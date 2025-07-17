import React, { useState } from 'react';

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const formStyles = {
  container: 'max-w-2xl mx-auto px-4 py-8',
  form: 'space-y-6',
  input: 'shadow-sm block w-full sm:text-sm rounded-md text-blue-900',
  label: 'block text-sm font-medium text-blue-900',
  error: 'mt-1 text-sm text-red-600',
  success: 'text-green-600 text-sm mb-4',
  button: 'inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = '';
    
    if (name === 'email' && !validateEmail(value)) {
      error = 'Please enter a valid email address';
    } else if (name === 'name' && value.length < 2) {
      error = 'Name must be at least 2 characters';
    } else if (name === 'subject' && value.length < 3) {
      error = 'Subject must be at least 3 characters';
    } else if (name === 'message' && value.length < 10) {
      error = 'Message must be at least 10 characters';
    }

    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields
    const allErrors = Object.keys(formData).reduce((acc, field) => {
      acc[field] = validateField(field, formData[field]);
      return acc;
    }, {});

    if (Object.values(allErrors).some(error => error)) {
      setErrors(allErrors);
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');
    
    try {
      const response = await fetch('https://formspree.io/f/xyzpzypq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _replyto: formData.email, // This is how Formspree knows where to send the reply
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const errorMessage = errorData.message || 'Failed to send message. Please try again later.';
        throw new Error(errorMessage);
      }

      setSuccessMessage('Message sent successfully! I will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setErrors({});
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage(error.message || 'Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFormControlClass = (name) => {
    if (errors[name]) {
      return 'border-red-500 focus:border-red-500 focus:ring-red-500';
    }
    return 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500';
  };

  return (
    <div className={formStyles.container}>
      <form onSubmit={handleSubmit} className={formStyles.form}>
        <div className="flex flex-col space-y-2">
          <label htmlFor="name" className={formStyles.label}>
            Name
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className={`${formStyles.input} ${getFormControlClass('name')}`}
              placeholder="Your name"
              required
            />
            {errors.name && (
              <p className={formStyles.error}>{errors.name}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-blue-900">
            Email
          </label>
          <div className="mt-1">
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className={`shadow-sm block w-full sm:text-sm rounded-md text-blue-900 ${getFormControlClass('email')}`}
              placeholder="Your email"
              required
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="subject" className="block text-sm font-medium text-blue-900">
            Subject
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`shadow-sm block w-full sm:text-sm rounded-md text-blue-900 ${getFormControlClass('subject')}`}
              placeholder="Subject"
              required
            />
            {errors.subject && (
              <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-blue-900">
            Message
          </label>
          <div className="mt-1">
            <textarea
              name="message"
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className={`shadow-sm block w-full sm:text-sm rounded-md text-blue-900 ${getFormControlClass('message')}`}
              placeholder="Your message"
              required
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message}</p>
            )}
          </div>
        </div>

        {successMessage && (
          <div className={formStyles.success}>
            {successMessage}
          </div>
        )}

        {errorMessage && (
          <div className={formStyles.error}>
            {errorMessage}
          </div>
        )}

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={formStyles.button}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;



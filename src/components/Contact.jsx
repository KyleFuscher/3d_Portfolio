import AnimatedTitle from "./AnimatedTitle";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} alt="Portfolio" className="w-full h-full object-cover" />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-screen w-full px-10 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="relative rounded-3xl bg-black py-24 text-blue-50 sm:overflow-hidden shadow-2xl border border-gray-800">
        <div className="absolute -left-20 top-0 hidden size-full overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/img/contact-1.png"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="/img/contact-2.gif"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/img/swordman-partial.webp"
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="/img/swordman.webp"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center max-w-4xl mx-auto px-4">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10 font-general text-sm uppercase tracking-wider text-blue-50"
          >
            Contact
          </motion.p>

          <AnimatedTitle
            title="let&#39;s b<u>u</u>ild the <br /> new era of <br /> tech<b>no</b>logy t<b>o</b>gether!"
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9] mb-16"
          />

          <div className="flex flex-col items-center text-center max-w-4xl mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <span className="inline-block bg-blue-50/20 px-4 py-2 rounded-full text-blue-50 font-bold text-sm">
                Get in Touch
              </span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
            >
              <div className="space-y-8 p-6 border-l-2 border-blue-50/20">
                <h3 className="text-2xl font-bold text-blue-50 mb-4">Contact Information</h3>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <div className="space-y-4">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="flex items-center"
                    >
                      <svg className="size-6 mr-3 text-blue-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <div className="ml-4">
                        <p className="font-medium text-blue-50 mb-1">Email</p>
                        <a href="mailto:kylefuscher@gmail.com" className="text-gray-400 hover:text-blue-300 transition-colors duration-300 hover:translate-x-1">
                          kylefuscher@gmail.com
                        </a>
                      </div>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="flex items-center"
                    >
                      <svg className="size-6 mr-3 text-blue-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <div className="ml-4">
                        <p className="font-medium text-blue-50 mb-1">Phone</p>
                        <p className="text-gray-400">060 650 6071</p>
                      </div>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="flex items-center"
                    >
                      <svg className="size-6 mr-3 text-blue-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div className="ml-4">
                        <p className="font-medium text-blue-50 mb-1">Location</p>
                        <p className="text-gray-400">Table View, Western Cape, South Africa</p>
                      </div>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="flex items-center"
                    >
                      <svg className="size-6 mr-3 text-blue-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                      <div className="ml-4">
                        <p className="font-medium text-blue-50 mb-1">LinkedIn</p>
                        <a href="https://www.linkedin.com/in/kylefuscher/" className="text-gray-400 hover:text-blue-300 transition-colors duration-300 hover:translate-x-1">
                          linkedin.com/in/kylefuscher
                        </a>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-blue-50/10 p-8 rounded-2xl border border-blue-50/20"
              >
                <h3 className="text-2xl font-bold text-blue-50 mb-6">Connect with me</h3>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ContactForm />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

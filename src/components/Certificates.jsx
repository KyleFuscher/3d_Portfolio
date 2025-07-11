import React from 'react';
import { motion } from 'framer-motion';
import { TiDownload } from 'react-icons/ti';

const certificates = [
  {
    id: 1,
    title: 'Endpoint and Server Protection',
    institution: 'Sophos',
    date: '2024',
    description: 'Sophos Central Endpoint and Server Protection Certified Technician',
    certificateUrl: 'file:///C:/Users/Kyle%20Fuscher/Downloads/Sophos%20Technician.pdf'
  },
  {
    id: 2,
    title: 'Endpoint and Server Protection',
    institution: 'Sophos',
    date: '2024',
    description: 'Sophos Central Endpoint and Server Protection Certified Engineer',
    certificateUrl: 'file:///C:/Users/Kyle%20Fuscher/Downloads/Sophos%20Engineer.pdf'
  },
  {
    id: 3,
    title: 'React Frameworks',
    institution: 'FreeCodeCamp',
    date: '2024',
    description: 'Completed React frameworks course covering Next.js, Remix, and Astro',
    certificateUrl: '/certificates/react-frameworks.pdf'
  }
];

const CertificateCard = ({ certificate }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-800">{certificate.title}</h3>
          <span className="text-sm text-gray-500">{certificate.date}</span>
        </div>
        <p className="text-gray-600 mb-4">{certificate.institution}</p>
        <p className="text-gray-500 mb-6">{certificate.description}</p>
        <a
          href={certificate.certificateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          View Certificate
          <TiDownload className="w-4 h-4" />
        </a>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </motion.div>
  );
};

const Certificates = () => {
  return (
    <section id="certificate" className="py-20 bg-gradient-to-b from-gray-50 to-black">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center w-full">
          <h2 className="section-heading text-4xl font-bold fade-in-out">Certificates & Achievements</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;

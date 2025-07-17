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
    certificateUrl: 'https://drive.google.com/file/d/15L-vKd6EyzFfj75PH4JPzpOel5wN3eUQ/view'
  },
  {
    id: 2,
    title: 'Endpoint and Server Protection',
    institution: 'Sophos',
    date: '2024',
    description: 'Sophos Central Endpoint and Server Protection Certified Engineer',
    certificateUrl: 'https://drive.google.com/file/d/1cwFWNtPRy0xd9BLEpTtp_pCikNeGRR9c/view'
  },
  {
    id: 3,
    title: 'Coursera Artificial Intelligence',
    institution: 'Coursera',
    date: '2025',
    description: 'Completed Artificial Intelligence',
    certificateUrl: 'https://drive.google.com/file/d/1awB8p1uE3O3gls6u3NBAb_3JZ8jf2KXm/view'
  },
  {
    id: 4,
    title: 'Coursera AI Essentials',
    institution: 'Coursera',
    date: '2025',
    description: 'Completed AI Essentials',
    certificateUrl: 'https://drive.google.com/file/d/157B5jXggNOorDlslXG9_IkahNPRQIq-1/view'
  },
  {
    id: 5,
    title: 'Coursera AI For Everyone',
    institution: 'Coursera',
    date: '2025',
    description: 'Completed AI For Everyone',
    certificateUrl: 'https://drive.google.com/file/d/1caQsj3UdUp1IeejcVjJT81XkPqXcSyYo/view'
  },
  {
    id: 6,
    title: 'Coursera Introduction to Generative AI',
    institution: 'Coursera',
    date: '2025',
    description: 'Completed Introduction to Generative AI',
    certificateUrl: 'https://drive.google.com/file/d/1zc-h85b3eiMxYsVbgQRo39JFsIsUX7Wy/view'
  },
  {
    id: 7,
    title: 'Coursera Generative AI with Large Language Models',
    institution: 'Coursera',
    date: '2025',
    description: 'Completed Generative AI with Large Language Models',
    certificateUrl: 'https://drive.google.com/file/d/1CVWLb2DykCmPkFtVa_8F0AXOqe40Gps2/view'
  },
  {
    id: 8,
    title: 'Coursera Building AI Powered Chatbots Without Programming',
    institution: 'Coursera',
    date: '2025',
    description: 'Completed Building AI Powered Chatbots Without Programming',
    certificateUrl: 'https://drive.google.com/file/d/1zW4iwFmT6O0YSCBKDTi5dzlEkoerpDU_/view'
  },
  {
    id: 9,
    title: 'Coursera Python for Data Science, AI & Development',
    institution: 'Coursera',
    date: '2025',
    description: 'Completed Python for Data Science, AI & Development',
    certificateUrl: 'https://drive.google.com/file/d/1LMvRDiQ24WzeaAb0y9LLlAGZYOiLCPIv/view'
  },
  {
    id: 10,
    title: 'Coursera Machine Learning Foundations for Product',
    institution: 'Coursera',
    date: '2025',
    description: 'Completed Machine Learning Foundations for Product',
    certificateUrl: 'https://drive.google.com/file/d/1RfJ2MFC1nRjci5SLdPDuFOOIKeBoye-z/view'
  },
  {
    id: 11,
    title: 'Coursera Write Professional Emails in English',
    institution: 'Coursera',
    date: '2025',
    description: 'Completed Write Professional Emails in English',
    certificateUrl: 'https://drive.google.com/file/d/1XDPZIRGeNWULkwQqc1hGL1GGp78t8KFU/view'
  },
  {
    id: 12,
    title: 'Certificate',
    institution: 'Capaciti',
    date: '2025',
    description: 'Completed Introduction to AI',
    certificateUrl: 'https://drive.google.com/file/d/1une_vqDNaiMvQVl5O1ShTTHJOG2zB5wG/view'
  },
  {
    id: 13,
    title: 'Certificate',
    institution: 'Capaciti',
    date: '2025',
    description: 'Completed AI & Python Development',
    certificateUrl: 'https://drive.google.com/file/d/1PcGRNcqurICBHiMmarhbgLieWH1tpl6B/view'
  },
  {
    id: 15,
    title: 'Demo',
    institution: 'Demo',
    date: '2024',
    description: 'Completed React frameworks course covering Next.js, Remix, and Astro',
    certificateUrl: ''
  }
];

const CertificateCard = ({ certificate }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-600"
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-800">{certificate.title}</h3>
          <span className="text-sm text-gray-500">{certificate.date}</span>
        </div>
        <p className="text-gray-600 mb-4">{certificate.institution}</p>
        <p className="text-gray-500 mb-6">{certificate.description}</p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => {
            const url = certificate.certificateUrl;
            console.log('Opening certificate:', url);
            window.open(url, '_blank', 'noopener,noreferrer');
          }}
          className="absolute bottom-4 left-4 right-4 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-lg text-white font-semibold text-sm transition-all duration-300 opacity-0 group-hover:opacity-100 hover:bg-blue-500/30 hover:scale-105"
        >
          View Certificate
        </button>
      </div>
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

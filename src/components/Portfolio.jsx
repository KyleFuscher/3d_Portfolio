import React from 'react';
import { motion } from 'framer-motion';
import AnimatedTitle from "./AnimatedTitle";

const Portfolio = () => {

  
  return (
    <section id="portfolio" className="min-h-screen py-20 bg-gradient-to-b from-black to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="relative size-full">
            <AnimatedTitle
              title="Projects"
              containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
            />
          </div>

          

          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            From beginner to intermediate to advanced projects.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-[400px] w-full"
          >
            <div className="relative h-full">
              <img src="/Portfolio/week-2.png" alt="Project 1" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-between p-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Healthcare App</h3>
                  <p className="text-yellow-400 text-sm leading-relaxed">
                  <b>AI-powered tool exploring ethical considerations</b>
                  </p>
                </div>
                
                <a href="https://apphealthcare.netlify.app/" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 inline-flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  View Project
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.button>
              </a>
              </div>
            </div>
          </motion.div>

          {/* Repeat for more projects */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-[400px] w-full"
          >
            <div className="relative h-full">
              <img src="/Portfolio/week-3.png" alt="Project 2" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-between p-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Text to Image</h3>
                  <p className="text-yellow-400 text-sm leading-relaxed">
                  <b>AI-generated images</b>
                  </p>
                </div>
                
                <a href="https://kyle-image.netlify.app/login" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 inline-flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  View Project
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.button>
              </a>
                </div>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-[400px] w-full"
          >
            <div className="relative h-full">
              <img src="/Portfolio/week-4.png" alt="Project 2" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-between p-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Resume Cover Letter Builder</h3>
                  <p className="text-yellow-400 text-sm leading-relaxed">
                    <b>Professional resumes and cover letters with live previews and export options.</b>
                  </p>
                </div>
                
                      <a href="https://kyleresume.netlify.app/" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 inline-flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  View Project
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.button>
              </a>
                </div>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-[400px] w-full"
          >
            <div className="relative h-full">
              <img src="/Portfolio/week-5.png" alt="Project 2" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-between p-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Sentiment Analyser</h3>
                  <p className="text-yellow-400 text-sm leading-relaxed">
                      <b>Analyze the sentiment of text using AI.</b>
                  </p>
                </div>
                
                <a href="https://huggingface.co/spaces/KyleFuscher/my-sentiment-analyser" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 inline-flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  View Project
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.button>
              </a>
                </div>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-[400px] w-full"
          >
            <div className="relative h-full">
              <img src="/Portfolio/week-7.png" alt="Project 2" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-between p-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Netflix Clone</h3>
                  <p className="text-white text-sm leading-relaxed">
                  <b>Clone of Netflix with AI-generated images.</b> 
                  </p>
                </div>
                
                <a href="https://netflikyle.netlify.app/" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 inline-flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  View Project
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.button>
              </a>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const certifications = [
  {
    id: 1,
    title: 'Introduction to Databases',
    image: '/SQL.png',
    link: 'https://drive.google.com/file/d/161j09btiKuiMhFG2OaCUpoIZQXD4V7gI/view?usp=drive_link',
    issuer: 'NxtWave',
    date: 'July 2024',
  },
  {
    id: 2,
    title: 'Node.js',
    image: '/Nodejs.png',
    link: 'https://drive.google.com/file/d/1-OdlqlRvu-aAqImY-0YaWqdyoqUOL3Tz/view?usp=sharing',
    issuer: 'NxtWave',
    date: 'Oct 2024',
  },
  {
    id: 3,
    title: 'MongoDB',
    image: '/Mongodb.png',
    link: 'https://drive.google.com/file/d/1cYY6I-CqsxvdTlEsKxTEbz6DXqdpvlUr/view?usp=sharing',
    issuer: 'MongoDB',
    date: 'May 2025',
  },
];

const Certifications = () => {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-pink-500 dark:from-yellow-400 dark:to-pink-300 animate-text">
          Certifications
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          My professional certifications and achievements
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            className="group relative overflow-hidden rounded-2xl border border-gray-200/30 dark:border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-gradient-to-br from-white/80 to-pink-50/50 dark:from-gray-800/80 dark:to-pink-900/20 backdrop-blur-sm hover:backdrop-blur-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ delay: index * 0.1, duration: 0.5, ease: "easeInOut" }}
          >
            <div className="relative">
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block overflow-hidden"
              >
                <img
                  className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex items-center text-yellow-300 text-sm font-medium">
                      View Certificate
                      <FaExternalLinkAlt className="ml-2" />
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                {cert.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                {cert.issuer} • {cert.date}
              </p>
              {/* <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 transition-colors"
                >
                  View Certificate
                  <FaExternalLinkAlt className="ml-1.5 h-3 w-3" />
                </a>
              </div> */}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;

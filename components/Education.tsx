'use client';

import { education } from '@/data/cv-data';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export default function Education() {
  return (
    <section className="mb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-cyan-500/10 rounded-lg">
            <GraduationCap className="w-6 h-6 text-cyan-400" />
          </div>
          <h2 className="text-3xl font-bold">Education</h2>
        </div>

        <div className="relative">
          {/* Ligne verticale centrale avec effet de brillance */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-500/30 via-blue-500/20 to-transparent"></div>
          
          {/* Points de connexion animés */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full">
            {education.map((_, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.2 }}
                className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 border-2 border-gray-900"
                style={{ top: `${(index * 33) + 12}%` }}
              />
            ))}
          </div>

          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-8 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
            >
              <div className="w-1/2 px-4">
                <motion.div
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 20px 40px rgba(6, 182, 212, 0.15)"
                  }}
                  className={`glass-effect rounded-2xl p-6 relative overflow-hidden group hover:neon-glow transition-all duration-300 ${
                    index % 2 === 0 
                      ? 'ml-auto mr-0 border-l-2 border-cyan-500/30' 
                      : 'mr-auto ml-0 border-r-2 border-blue-500/30'
                  }`}
                >
                  {/* Effet de miroir au survol */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  
                  {/* Indicateur de diplôme pour le Master */}
                  {edu.degree.includes("Master") && (
                    <div className="absolute -top-2 -right-2 p-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg backdrop-blur-sm">
                      <Award className="w-4 h-4 text-cyan-400" />
                    </div>
                  )}
                  
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{edu.degree}</h3>
                      {edu.Speciality && (
                        <p className="text-cyan-300 text-sm font-medium mb-2">{edu.Speciality}</p>
                      )}
                      <p className="text-gray-300 font-medium">{edu.institution}</p>
                    </div>
                  </div>
                  
                  {/* Informations supplémentaires */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    {edu.location && (
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Badge de niveau */}
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-cyan-500/10 text-cyan-300 rounded-full text-xs border border-cyan-500/20">
                      {edu.degree.includes("Master") ? "Graduate" : 
                       edu.degree.includes("Bachelor") ? "Undergraduate" : "High School"}
                    </span>
                    {edu.degree.includes("Master") && (
                      <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-white rounded-full text-xs">
                        Highest Degree
                      </span>
                    )}
                  </div>
                </motion.div>
              </div>
              
              {/* Cercle avec icône - amélioré avec animation */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`relative z-10 w-14 h-14 rounded-full flex items-center justify-center ${
                  index % 2 === 0 
                    ? 'ml-4 -mr-7 bg-gradient-to-r from-cyan-500 to-blue-600' 
                    : 'mr-4 -ml-7 bg-gradient-to-r from-blue-600 to-cyan-500'
                } shadow-lg border-2 border-gray-900`}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <GraduationCap className="w-6 h-6 text-white" />
                
                {/* Effet de pulsation */}
                <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-ping opacity-0 group-hover:opacity-100" />
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        {/* Timeline info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full">
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-sm text-cyan-300">Academic Journey Timeline</span>
          </div>
        </motion.div>
      </motion.div>
      </div>
    </section>
  );
}
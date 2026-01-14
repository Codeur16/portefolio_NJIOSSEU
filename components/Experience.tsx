'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { experience } from '@/data/cv-data';

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            {/* <Briefcase className="w-6 h-6 text-purple-400" /> */}
            <span className="text-purple-400 text-sm font-mono uppercase tracking-wider">Career Path</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Professional <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">Experience</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A journey through innovation, development, and AI integration
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-transparent"></div>

            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-12 md:mb-20 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1">
                  <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full border-4 border-slate-950"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-md opacity-50"></div>
                </div>

                {/* Content card */}
                <div className={`ml-8 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-all duration-300"
                  >
                    {/* Period badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
                      <Calendar className="w-4 h-4 text-purple-400" />
                      <span className="text-purple-300 text-sm font-mono">{exp.period}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                    <h4 className="text-xl text-purple-400 mb-3">{exp.company}</h4>
                    
                    <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>

                    <p className="text-slate-300 mb-4 leading-relaxed">{exp.description}</p>

                    <div className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-slate-400 text-sm">{highlight}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
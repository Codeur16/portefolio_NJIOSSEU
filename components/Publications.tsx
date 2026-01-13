'use client';

import { motion } from 'framer-motion';
import { BookOpen, Award, Calendar } from 'lucide-react';
import { publications } from '@/data/cv-data';

const Publications = () => {
  return (
    <section id="publications" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <BookOpen className="w-6 h-6 text-purple-400" />
            <span className="text-purple-400 text-sm font-mono uppercase tracking-wider">Research</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Research & <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">Publications</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Contributing to the advancement of AI and information retrieval
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {publications.map((publication, index) => (
            <motion.div
              key={publication.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-all duration-300"
              >
                {/* Status badge */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                    <Award className="w-4 h-4 text-green-400" />
                    <span className="text-green-300 text-sm font-mono">{publication.status}</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20">
                    <Calendar className="w-4 h-4 text-purple-400" />
                    <span className="text-purple-300 text-sm font-mono">{publication.year}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{publication.title}</h3>
                
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-purple-400 font-semibold text-lg">{publication.conference}</span>
                </div>

                <p className="text-slate-300 mb-6 leading-relaxed">
                  {publication.description}
                </p>

                {/* Topics */}
                <div className="flex flex-wrap gap-2">
                  {publication.topics.map((topic, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
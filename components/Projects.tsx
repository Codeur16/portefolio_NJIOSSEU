'use client';

import { motion } from 'framer-motion';
import { Rocket, ExternalLink, Code2 } from 'lucide-react';
import { projects } from '@/data/cv-data';

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            {/* <Rocket className="w-6 h-6 text-purple-400" /> */}
            <span className="text-purple-400 text-sm font-mono uppercase tracking-wider">Portfolio</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Discover my latest projects combining cutting-edge technologies and innovative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="h-full p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-all duration-300 group"
              >
                {/* Category badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                  <Code2 className="w-4 h-4 text-purple-400" />
                  <span className="text-purple-300 text-sm font-mono">{project.category}</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>

                <p className="text-slate-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-slate-400 text-sm">{highlight}</p>
                    </div>
                  ))}
                </div>

                {/* View button */}
                <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 group/btn">
                  <span className="text-sm font-medium">View Project</span>
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
'use client';

import { motion } from 'framer-motion';
import { services } from '@/data/portfolio-data';
import { Code2, Palette, Sparkles, BookOpen, ArrowRight } from 'lucide-react';

const iconMap: { [key: string]: any } = {
  Code2,
  Palette,
  Sparkles,
  BookOpen
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-purple-400 text-sm font-mono uppercase tracking-wider mb-4 block">
            Services & Expertise
          </span>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Ce que je{' '}
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
              propose
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Des solutions techniques complètes, de la conception à la livraison
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ x: 10 }}
                  className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 hover:bg-white/[0.07] transition-all duration-500 cursor-pointer"
                >
                  <div className="flex items-start gap-8">
                    {/* Number */}
                    <div className="flex-shrink-0">
                      <span className="text-6xl font-bold text-white/10 group-hover:text-purple-500/30 transition-colors duration-500">
                        {service.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-500">
                          <Icon className="w-6 h-6 text-purple-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-500">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-slate-300 leading-relaxed mb-6">
                        {service.description}
                      </p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-xs rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="flex-shrink-0 hidden md:block">
                      <div className="p-3 rounded-full bg-white/5 group-hover:bg-purple-500/20 transition-all duration-500">
                        <ArrowRight className="w-6 h-6 text-slate-400 group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-500" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
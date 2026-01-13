'use client';

import { motion } from 'framer-motion';
import { Code, Server, Sparkles, Palette } from 'lucide-react';
import { skills } from '@/data/cv-data';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code,
    skills: skills.frontend,
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Backend Development',
    icon: Server,
    skills: skills.backend,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'AI & Automation',
    icon: Sparkles,
    skills: skills.aiAutomation,
    color: 'from-violet-500 to-purple-500'
  },
  {
    title: 'Design',
    icon: Palette,
    skills: skills.design,
    color: 'from-fuchsia-500 to-pink-500'
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-purple-400" />
            <span className="text-purple-400 text-sm font-mono uppercase tracking-wider">Expertise</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Technical <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">Skills</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit spanning full-stack development, AI integration, and design
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="h-full p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-10`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>

                  {/* Skills list */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-slate-300 text-sm font-medium">{skill.name}</span>
                          <span className="text-purple-400 text-sm font-mono">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
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

export default Skills;
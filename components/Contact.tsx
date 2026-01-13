'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { personalInfo } from '@/data/cv-data';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Send className="w-6 h-6 text-purple-400" />
            <span className="text-purple-400 text-sm font-mono uppercase tracking-wider">Get In Touch</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Let's Work <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">Together</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Contact Info */}
            <div className="space-y-6">
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-1">Email</p>
                  <p className="text-white font-medium">{personalInfo.email}</p>
                </div>
              </motion.a>

              <motion.a
                href={`tel:${personalInfo.phone}`}
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300">
                  <Phone className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-1">Phone</p>
                  <p className="text-white font-medium">{personalInfo.phone}</p>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <div className="p-3 rounded-xl bg-purple-500/10">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-1">Location</p>
                  <p className="text-white font-medium">{personalInfo.location}</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links & CTA */}
            <div className="space-y-6">
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                  <Github className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-slate-400 text-sm mb-1">GitHub</p>
                  <p className="text-white font-medium">@Codeur16</p>
                </div>
                <div className="text-purple-400 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </div>
              </motion.a>

              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300">
                  <Linkedin className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <p className="text-slate-400 text-sm mb-1">LinkedIn</p>
                  <p className="text-white font-medium">Njiosseu Loic</p>
                </div>
                <div className="text-blue-400 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </div>
              </motion.a>

              {/* CTA Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/30"
              >
                <h3 className="text-xl font-bold text-white mb-2">Ready to collaborate?</h3>
                <p className="text-slate-300 text-sm mb-4">Let's create something amazing together</p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  <span>Send Message</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
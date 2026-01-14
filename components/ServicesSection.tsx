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
    <section id="services" className="py-16 md:py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="text-purple-400 text-xs sm:text-sm font-mono uppercase tracking-wider mb-3 sm:mb-4 block">
            Services & Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6">
            What I {' '}
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
               offer
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base lg:text-lg max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto px-4">
            Complete technical solutions, from design to delivery
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-4 sm:space-y-6 max-w-4xl lg:max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full"
              >
                <motion.div
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className="group p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 hover:bg-white/[0.07] transition-all duration-500 cursor-pointer active:scale-[0.99]"
                >
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 md:gap-8">
                    {/* Number - Mobile: top, Desktop: left */}
                    <div className="flex sm:flex-col items-start sm:items-center gap-3 sm:gap-0 sm:flex-shrink-0 w-full sm:w-auto">
                      <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-white/10 group-hover:text-purple-500/30 transition-colors duration-500 leading-none">
                        {service.number}
                      </span>
                      
                      {/* Arrow for mobile */}
                      <div className="sm:hidden ml-auto">
                        <div className="p-2 sm:p-3 rounded-full bg-white/5 group-hover:bg-purple-500/20 transition-all duration-500">
                          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 group-hover:text-purple-400 group-hover:translate-x-0.5 transition-all duration-500" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 w-full min-w-0"> {/* min-w-0 pour éviter le débordement */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
                        <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-500 w-fit">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-500 break-words">
                          {service.title}
                        </h3>
                      </div>
                      
                      <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-4 sm:mb-6">
                        {service.description}
                      </p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {service.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 sm:px-3 py-1 text-xs sm:text-xs rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 whitespace-nowrap"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Arrow - Desktop only */}
                    <div className="hidden sm:flex flex-shrink-0">
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


// 'use client';

// import { motion } from 'framer-motion';
// import { services } from '@/data/portfolio-data';
// import { Code2, Palette, Sparkles, BookOpen, ArrowRight } from 'lucide-react';

// const iconMap: { [key: string]: any } = {
//   Code2,
//   Palette,
//   Sparkles,
//   BookOpen
// };

// const ServicesSection = () => {
//   return (
//     <section id="services" className="py-32 relative">
//       <div className="container mx-auto px-6">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-20"
//         >
//           <span className="text-purple-400 text-sm font-mono uppercase tracking-wider mb-4 block">
//             Services & Expertise
//           </span>
//           <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
//             Ce que je{' '}
//             <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
//               propose
//             </span>
//           </h2>
//           <p className="text-slate-400 max-w-2xl mx-auto text-lg">
//             Des solutions techniques complètes, de la conception à la livraison
//           </p>
//         </motion.div>

//         {/* Services Grid */}
//         <div className="space-y-6 max-w-6xl mx-auto">
//           {services.map((service, index) => {
//             const Icon = iconMap[service.icon];
//             return (
//               <motion.div
//                 key={service.id}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//               >
//                 <motion.div
//                   whileHover={{ x: 10 }}
//                   className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 hover:bg-white/[0.07] transition-all duration-500 cursor-pointer"
//                 >
//                   <div className="flex items-start gap-8">
//                     {/* Number */}
//                     <div className="flex-shrink-0">
//                       <span className="text-6xl font-bold text-white/10 group-hover:text-purple-500/30 transition-colors duration-500">
//                         {service.number}
//                       </span>
//                     </div>

//                     {/* Content */}
//                     <div className="flex-1">
//                       <div className="flex items-center gap-4 mb-4">
//                         <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-500">
//                           <Icon className="w-6 h-6 text-purple-400" />
//                         </div>
//                         <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-500">
//                           {service.title}
//                         </h3>
//                       </div>
//                       <p className="text-slate-300 leading-relaxed mb-6">
//                         {service.description}
//                       </p>
                      
//                       {/* Technologies */}
//                       <div className="flex flex-wrap gap-2">
//                         {service.technologies.map((tech, idx) => (
//                           <span
//                             key={idx}
//                             className="px-3 py-1 text-xs rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300"
//                           >
//                             {tech}
//                           </span>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Arrow */}
//                     <div className="flex-shrink-0 hidden md:block">
//                       <div className="p-3 rounded-full bg-white/5 group-hover:bg-purple-500/20 transition-all duration-500">
//                         <ArrowRight className="w-6 h-6 text-slate-400 group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-500" />
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;
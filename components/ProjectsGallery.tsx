'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { projects, projectCategories } from '@/data/portfolio-data';
import { Github, ExternalLink, Sparkles, Calendar, User, Gitlab } from 'lucide-react';
import Image from 'next/image';

const ProjectsGallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const filteredProjects = projects.filter(
    project => activeCategory === 'all' || project.category === activeCategory
  );

  // Fonction pour détecter si un lien est GitHub ou GitLab
  const getGitPlatformInfo = (url: string) => {
    if (!url) return null;
    
    if (url.includes('github.com')) {
      return {
        icon: Github,
        name: 'GitHub',
        color: 'text-gray-300 hover:text-white'
      };
    } else if (url.includes('gitlab.com')) {
      return {
        icon: Gitlab,
        name: 'GitLab',
        color: 'text-orange-300 hover:text-orange-200'
      };
    }
    return {
      icon: Github,
      name: 'Code',
      color: 'text-gray-300 hover:text-white'
    };
  };

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-purple-400" />
            <span className="text-purple-400 text-sm font-mono uppercase tracking-wider">
              Portfolio
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            My{' '}
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
              Projects
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A selection of projects that demonstrate my technical expertise and ability to solve concrete problems
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {projectCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/50'
                  : 'bg-white/5 backdrop-blur-sm border border-white/10 text-slate-300 hover:border-purple-500/50 hover:text-white'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => {
              const gitInfo = project.github ? getGitPlatformInfo(project.github) : null;
              
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => setSelectedProject(project)}
                >
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="group h-full p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-all duration-500 cursor-pointer"
                  >
                    {/* Project Image */}
                    <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
                      {project.image && project.image !== '' ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                          <div className="text-6xl font-bold text-white/10">
                            {project.title.charAt(0)}
                          </div>
                        </div>
                      )}
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Featured badge */}
                      {project.featured && (
                        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-semibold shadow-lg shadow-purple-500/30">
                          Featured
                        </div>
                      )}
                      
                      {/* Year badge */}
                      <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white text-xs font-medium">
                        {project.year}
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="w-4 h-4 text-purple-400" />
                      <span className="text-sm text-purple-300">{project.year}</span>
                      {project.client && (
                        <>
                          <span className="text-slate-500">•</span>
                          <span className="text-sm text-slate-400">{project.client}</span>
                        </>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>

                    <p className="text-slate-300 text-sm mb-4 leading-relaxed line-clamp-3">
                      {project.shortDescription}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 text-xs rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 text-purple-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1.5 text-xs rounded-lg bg-slate-500/10 border border-slate-500/20 text-slate-300">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-4 mt-6">
                      {project.github && gitInfo && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className={`flex items-center gap-2 text-sm ${gitInfo.color} transition-colors`}
                        >
                          <gitInfo.icon className="w-4 h-4" />
                          <span>{gitInfo.name}</span>
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-2 text-sm text-cyan-300 hover:text-cyan-200 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </a>
                      )}
                      <button className="ml-auto text-slate-400 hover:text-white transition-colors text-sm">
                        View details →
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* No projects message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/5 mb-6">
              <Github className="w-10 h-10 text-slate-400" />
            </div>
            <p className="text-slate-400 text-lg">No projects found in this category.</p>
            <p className="text-slate-500 mt-2">Check back soon for new additions!</p>
          </motion.div>
        )}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl border border-white/10 shadow-2xl"
            >
              {/* Header with gradient */}
              <div className="relative h-64 rounded-t-3xl overflow-hidden">
                {selectedProject.image && selectedProject.image !== '' ? (
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-500/30 to-blue-500/30">
                    <div className="text-9xl font-bold text-white/10">
                      {selectedProject.title.charAt(0)}
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
                
                {/* Close button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                {/* Title overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-4xl font-bold text-white mb-2">{selectedProject.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <div className="flex items-center gap-2 text-purple-300">
                      <Calendar className="w-4 h-4" />
                      <span>{selectedProject.year}</span>
                    </div>
                    {selectedProject.client && (
                      <div className="flex items-center gap-2 text-slate-300">
                        <User className="w-4 h-4" />
                        <span>{selectedProject.client}</span>
                      </div>
                    )}
                    {selectedProject.category && (
                      <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs">
                        {selectedProject.category}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Description */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    Description
                  </h4>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                {/* Problem Solved */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Problem Solved
                  </h4>
                  <p className="text-slate-300 leading-relaxed">{selectedProject.problemSolved}</p>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {selectedProject.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-300">
                        <div className="w-6 h-6 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech: string, idx: number) => (
                      <span
                        key={idx}
                        className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10">
                  {selectedProject.github && (() => {
                    const gitInfo = getGitPlatformInfo(selectedProject.github);
                    return (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 text-white transition-all duration-300 hover:scale-[1.02]"
                      >
                        {gitInfo && <gitInfo.icon className="w-5 h-5" />}
                        <span>View on {gitInfo?.name || 'GitHub'}</span>
                      </a>
                    );
                  })()}
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-[1.02]"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>View Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsGallery;











// 'use client';

// import { motion, AnimatePresence } from 'framer-motion';
// import { useState } from 'react';
// import { projects, projectCategories } from '@/data/portfolio-data';
// import { Github, ExternalLink, Sparkles, Calendar, User } from 'lucide-react';
// import Image from 'next/image';

// const ProjectsGallery = () => {
//   const [activeCategory, setActiveCategory] = useState('all');
//   const [selectedProject, setSelectedProject] = useState<any>(null);

//   const filteredProjects = projects.filter(
//     project => activeCategory === 'all' || project.category === activeCategory
//   );

//   return (
//     <section id="projects" className="py-32 relative">
//       <div className="container mx-auto px-6">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <div className="inline-flex items-center gap-2 mb-4">
//             {/* <Sparkles className="w-6 h-6 text-purple-400" /> */}
//             <span className="text-purple-400 text-sm font-mono uppercase tracking-wider">
//               Portfolio
//             </span>
//           </div>
//           <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
//             My{' '}
//             <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
//               Projects
//             </span>
//           </h2>
//           <p className="text-slate-400 max-w-2xl mx-auto text-lg">
//             A selection of projects that demonstrate my technical expertise and ability to solve concrete problems
//           </p>
//         </motion.div>

//         {/* Category Filter */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="flex flex-wrap justify-center gap-4 mb-16"
//         >
//           {projectCategories.map((category) => (
//             <button
//               key={category.id}
//               onClick={() => setActiveCategory(category.id)}
//               className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
//                 activeCategory === category.id
//                   ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/50'
//                   : 'bg-white/5 backdrop-blur-sm border border-white/10 text-slate-300 hover:border-purple-500/50 hover:text-white'
//               }`}
//             >
//               {category.label}
//             </button>
//           ))}
//         </motion.div>

//         {/* Projects Grid */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeCategory}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.4 }}
//             className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
//           >
//             {filteredProjects.map((project, index) => (
//               <motion.div
//                 key={project.id}
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 onClick={() => setSelectedProject(project)}
//               >
//                 <motion.div
//                   whileHover={{ y: -8 }}
//                   className="group h-full p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-all duration-500 cursor-pointer"
//                 >
//                   {/* Project Image Placeholder */}
//                   <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-purple-500/20 to-blue-500/20">
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       {project.image ? (
//                         <Image
//                           src={project.image}
//                           alt={project.title}
//                           width={192}
//                           height={192}
//                           className="text-white/10"
//                         />
//                       ) : (
//                         <div className="text-6xl font-bold text-white/10">
//                           {project.title.charAt(0)}
//                         </div>
//                       )}
//                     </div>
//                     {/* Featured badge */}
//                     {project.featured && (
//                       <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-purple-500 text-white text-xs font-semibold">
//                         Featured
//                       </div>
//                     )}
//                   </div>

//                   {/* Project Info */}
//                   <div className="flex items-center gap-2 mb-3">
//                     <Calendar className="w-4 h-4 text-purple-400" />
//                     <span className="text-sm text-purple-300">{project.year}</span>
//                   </div>

//                   <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
//                     {project.title}
//                   </h3>

//                   <p className="text-slate-300 text-sm mb-4 leading-relaxed line-clamp-3">
//                     {project.shortDescription}
//                   </p>

//                   {/* Technologies */}
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.technologies.slice(0, 3).map((tech, idx) => (
//                       <span
//                         key={idx}
//                         className="px-2 py-1 text-xs rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-300"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                     {project.technologies.length > 3 && (
//                       <span className="px-2 py-1 text-xs rounded-md bg-slate-500/10 border border-slate-500/20 text-slate-300">
//                         +{project.technologies.length - 3}
//                       </span>
//                     )}
//                   </div>

//                   {/* Action buttons */}
//                   <div className="flex items-center gap-3 mt-6">
//                     {project.github && (
//                       <a
//                         href={project.github}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         onClick={(e) => e.stopPropagation()}
//                         className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"
//                       >
//                         <Github className="w-4 h-4" />
//                         <span>Code</span>
//                       </a>
//                     )}
//                     {project.demo && (
//                       <a
//                         href={project.demo}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         onClick={(e) => e.stopPropagation()}
//                         className="flex items-center gap-2 text-sm text-purple-300 hover:text-purple-200 transition-colors"
//                       >
//                         <ExternalLink className="w-4 h-4" />
//                         <span>Démo</span>
//                       </a>
//                     )}
//                   </div>
//                 </motion.div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </AnimatePresence>

//         {/* No projects message */}
//         {filteredProjects.length === 0 && (
//           <div className="text-center py-20">
//             <p className="text-slate-400 text-lg">Aucun projet dans cette catégorie pour le moment.</p>
//           </div>
//         )}
//       </div>

//       {/* Project Detail Modal */}
//       <AnimatePresence>
//         {selectedProject && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelectedProject(null)}
//             className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               onClick={(e) => e.stopPropagation()}
//               className="max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-slate-900 rounded-3xl border border-white/10 p-8"
//             >
//               {/* Header */}
//               <div className="flex items-start justify-between mb-6">
//                 <div>
//                   <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
//                   <div className="flex items-center gap-4 text-sm text-slate-400">
//                     <div className="flex items-center gap-2">
//                       <Calendar className="w-4 h-4" />
//                       <span>{selectedProject.year}</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <User className="w-4 h-4" />
//                       <span>{selectedProject.client}</span>
//                     </div>
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => setSelectedProject(null)}
//                   className="text-slate-400 hover:text-white transition-colors"
//                 >
//                   <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 </button>
//               </div>

//               {/* Image */}
//               <div className="w-full h-64 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-purple-500/20 to-blue-500/20">
//                 <div className="w-full h-full flex items-center justify-center">
//                   <div className="text-8xl font-bold text-white/10">
//                     {selectedProject.title.charAt(0)}
//                   </div>
//                 </div>
//               </div>

//               {/* Description */}
//               <div className="mb-6">
//                 <h4 className="text-xl font-bold text-white mb-3">Description</h4>
//                 <p className="text-slate-300 leading-relaxed">{selectedProject.fullDescription}</p>
//               </div>

//               {/* Problem Solved */}
//               <div className="mb-6">
//                 <h4 className="text-xl font-bold text-white mb-3">Problématique résolue</h4>
//                 <p className="text-slate-300 leading-relaxed">{selectedProject.problemSolved}</p>
//               </div>

//               {/* Features */}
//               <div className="mb-6">
//                 <h4 className="text-xl font-bold text-white mb-3">Caractéristiques clés</h4>
//                 <ul className="space-y-2">
//                   {selectedProject.features.map((feature: string, idx: number) => (
//                     <li key={idx} className="flex items-start gap-3 text-slate-300">
//                       <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
//                       <span>{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Technologies */}
//               <div className="mb-8">
//                 <h4 className="text-xl font-bold text-white mb-3">Technologies utilisées</h4>
//                 <div className="flex flex-wrap gap-2">
//                   {selectedProject.technologies.map((tech: string, idx: number) => (
//                     <span
//                       key={idx}
//                       className="px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* Links */}
//               <div className="flex gap-4">
//                 {selectedProject.github && (
//                   <a
//                     href={selectedProject.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 text-white transition-all duration-300"
//                   >
//                     <Github className="w-5 h-5" />
//                     <span>Voir le code</span>
//                   </a>
//                 )}
//                 {selectedProject.demo && (
//                   <a
//                     href={selectedProject.demo}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
//                   >
//                     <ExternalLink className="w-5 h-5" />
//                     <span>Voir la démo</span>
//                   </a>
//                 )}
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default ProjectsGallery;

import React from 'react';
import Section from './Section';
import { personalInfo } from '../data/portfolio';
import { motion } from 'framer-motion';
import { Folder, Github, ExternalLink, Shield, Brain, Code, Smartphone, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const iconMap = {
    Shield: <Shield size={20} />,
    Brain: <Brain size={20} />,
    Code: <Code size={20} />,
    Smartphone: <Smartphone size={20} />,
    Globe: <Globe size={20} />
  };

  return (
    <Section id="projects">
      <div className="mb-12">
        <h2 className={`text-3xl font-bold mb-4 text-center ${isRTL ? 'md:text-right' : 'md:text-left'}`}>
          <span className="text-accent">04.</span> {t.projects.title}
        </h2>
        <div className={`w-20 h-1 bg-accent mx-auto ${isRTL ? 'md:mr-0' : 'md:ml-0'}`}></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {t.projects.items.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-secondary rounded-lg shadow-xl border border-slate-800 hover:border-accent group relative flex flex-col overflow-hidden"
          >
            <div className="relative overflow-hidden h-48 w-full">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a
                  href={project.repoUrl || personalInfo.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-secondary rounded-full text-accent hover:bg-accent hover:text-primary transition-colors"
                >
                  <Github size={20} />
                </a>
                <a href={project.demoUrl} target="_blank" rel="noreferrer" className="p-2 bg-secondary rounded-full text-accent hover:bg-accent hover:text-primary transition-colors" title={t.projects.view_demo}>
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-primary/50 rounded-lg text-accent">
                  {iconMap[project.icon] || <Folder size={20} />}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>

              <div className="text-sm text-muted mb-6 flex-grow">
                {project.description}
              </div>

              <div className="flex flex-wrap gap-3 mt-auto">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-mono text-slate-300 bg-primary/50 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;

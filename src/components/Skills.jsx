import React from 'react';
import Section from './Section';
import { personalInfo } from '../data/portfolio';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Skills = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';
  const categories = Object.entries(personalInfo.skills);

  return (
    <Section id="skills" className="bg-secondary/30">
      <div className="mb-12">
        <h2 className={`text-3xl font-bold mb-4 text-center ${isRTL ? 'md:text-right' : 'md:text-left'}`}>
          <span className="text-accent">02.</span> {t.skills.title}
        </h2>
        <div className={`w-20 h-1 bg-accent mx-auto ${isRTL ? 'md:mr-0' : 'md:ml-0'}`}></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map(([category, items], index) => (
          <motion.div 
            key={category}
            initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-primary p-6 rounded-lg shadow-lg border border-slate-800"
          >
            <h3 className="text-xl font-semibold capitalize mb-4 text-white border-b border-slate-700 pb-2">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1 text-sm bg-secondary text-accent rounded-full border border-slate-700 hover:border-accent transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;

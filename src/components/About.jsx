import React from 'react';
import Section from './Section';
import { Code, Shield, Brain } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const iconMap = [
    <Code className="w-8 h-8 text-accent" />,
    <Brain className="w-8 h-8 text-accent" />,
    <Shield className="w-8 h-8 text-accent" />
  ];

  return (
    <Section id="about">
      <div className="mb-12">
        <h2 className={`text-3xl font-bold mb-4 text-center ${isRTL ? 'md:text-right' : 'md:text-left'}`}>
          <span className="text-accent">01.</span> {t.about.title}
        </h2>
        <div className={`w-20 h-1 bg-accent mx-auto ${isRTL ? 'md:mr-0' : 'md:ml-0'} mb-8`}></div>
        <p className="text-muted text-lg leading-relaxed max-w-3xl">
          {t.hero.summary}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {t.about.roles.map((role, index) => (
          <div key={index} className="bg-secondary p-6 rounded-lg border border-slate-700 hover:border-accent transition-colors group">
            <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{iconMap[index]}</div>
            <h3 className="text-xl font-semibold mb-2">{role.title}</h3>
            <p className="text-muted text-sm">{role.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default About;

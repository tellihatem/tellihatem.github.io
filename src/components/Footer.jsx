import React from 'react';
import { personalInfo } from '../data/portfolio';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-secondary py-8 text-center border-t border-slate-800">
      <div className="flex justify-center gap-6 mb-4">
        <a href={personalInfo.contact.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-accent transition-colors">
          <Github size={20} />
        </a>
        <a href={personalInfo.contact.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-accent transition-colors">
          <Linkedin size={20} />
        </a>
        <a href={`mailto:${personalInfo.contact.email}`} className="text-slate-400 hover:text-accent transition-colors">
          <Mail size={20} />
        </a>
      </div>
      <p className="text-slate-500 text-sm">
        {t.footer.built_by}
      </p>
      <p className="text-slate-600 text-xs mt-2">
        © {new Date().getFullYear()} {t.footer.rights}
      </p>
    </footer>
  );
};

export default Footer;

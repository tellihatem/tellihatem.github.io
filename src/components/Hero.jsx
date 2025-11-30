import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`text-center ${isRTL ? 'md:text-right' : 'md:text-left'}`}
          >
            <h2 className="text-accent font-medium mb-4 tracking-wide">{t.hero.greeting}</h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              {t.hero.name}
            </h1>
            
            <div className="h-20 md:h-24 mb-6 overflow-hidden">
              <motion.div 
                animate={{ y: [0, -40, -80, 0] }}
                transition={{ repeat: Infinity, duration: 6, times: [0, 0.33, 0.66, 1] }}
                className="text-2xl md:text-4xl text-muted font-light"
              >
                {t.hero.titles.map((title, index) => (
                  <div key={index} className={`h-10 md:h-12 flex items-center justify-center ${isRTL ? 'md:justify-start' : 'md:justify-start'}`}>
                    {/* Note: justify-start works for both if dir=rtl? No. Flex doesn't flip automatically unless using logical properties. 
                        But text alignment handles inner content. 
                        For the div container, we want it to align with the text.
                    */}
                     {/* Actually, for the typing effect, keeping it simple. */}
                    {title}
                  </div>
                ))}
              </motion.div>
            </div>

            <p className="text-muted max-w-xl mx-auto md:mx-0 text-lg mb-8 leading-relaxed">
              {t.hero.summary}
            </p>

            <div className={`flex flex-col md:flex-row gap-4 justify-center ${isRTL ? 'md:justify-start' : 'md:justify-start'} mb-12`}>
              <Link to="contact" smooth={true} offset={-70} className="px-8 py-3 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition-colors cursor-pointer">
                {t.hero.btn_contact}
              </Link>
              <a href="/resume.pdf" target="_blank" className="px-8 py-3 border border-accent text-accent font-bold rounded-lg hover:bg-accent/10 transition-colors flex items-center justify-center gap-2">
                <FileText size={20} /> {t.hero.btn_cv}
              </a>
            </div>

            <div className={`flex gap-6 justify-center ${isRTL ? 'md:justify-start' : 'md:justify-start'} text-muted`}>
              <a href={personalInfo.contact.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Github size={24} /></a>
              <a href={personalInfo.contact.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Linkedin size={24} /></a>
              <a href={`mailto:${personalInfo.contact.email}`} className="hover:text-white transition-colors"><Mail size={24} /></a>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`flex justify-center ${isRTL ? 'md:justify-start' : 'md:justify-end'}`}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>

              {/* Decorative Circles */}
              <div className="absolute inset-0 rounded-full border-2 border-accent/30 animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-4 rounded-full border-2 border-accent/20 animate-[spin_15s_linear_infinite_reverse]"></div>
              
              {/* Image Container */}
              <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-secondary shadow-2xl bg-secondary">
                <img 
                  src={personalInfo.profileImage} 
                  alt={personalInfo.name} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

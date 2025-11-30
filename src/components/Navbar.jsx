import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: t.nav.about, to: "about" },
    { name: t.nav.skills, to: "skills" },
    { name: t.nav.experience, to: "experience" },
    { name: t.nav.projects, to: "projects" },
    { name: t.nav.contact, to: "contact" },
  ];

  const LanguageSwitcher = () => (
    <div className="flex items-center gap-2 ltr:ml-6 rtl:mr-6">
      <Globe size={16} className="text-muted" />
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="bg-transparent text-sm font-medium text-muted hover:text-accent focus:outline-none cursor-pointer uppercase"
      >
        <option value="en" className="bg-secondary text-text">EN</option>
        <option value="fr" className="bg-secondary text-text">FR</option>
        <option value="ar" className="bg-secondary text-text">AR</option>
      </select>
    </div>
  );

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <Link to="hero" smooth={true} className="cursor-pointer font-bold text-xl tracking-tighter text-accent">
            HATEM.DEV
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                offset={-70}
                className="cursor-pointer text-sm font-medium text-muted hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <div className="md:hidden">
               <LanguageSwitcher />
            </div>
            <button onClick={() => setIsOpen(!isOpen)} className="text-text focus:outline-none">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-secondary border-t border-gray-800"
        >
          <div className="px-6 py-4 space-y-4 flex flex-col">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                offset={-70}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer text-base font-medium text-muted hover:text-accent"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;

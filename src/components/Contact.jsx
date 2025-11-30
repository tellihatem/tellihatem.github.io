import React from 'react';
import Section from './Section';
import { personalInfo } from '../data/portfolio';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <Section id="contact" className="mb-20">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold mb-4"><span className="text-accent">05.</span> {t.contact.title}</h2>
        <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          {t.contact.desc}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="bg-secondary p-3 rounded-lg text-accent">
              <Mail size={24} />
            </div>
            <div className={isRTL ? "text-right" : "text-left"}>
              <h3 className="text-lg font-semibold mb-1">{t.contact.labels.email}</h3>
              <a href={`mailto:${personalInfo.contact.email}`} className="text-muted hover:text-accent transition-colors">
                {personalInfo.contact.email}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-secondary p-3 rounded-lg text-accent">
              <Phone size={24} />
            </div>
            <div className={isRTL ? "text-right" : "text-left"}>
              <h3 className="text-lg font-semibold mb-1">{t.contact.labels.phone}</h3>
              <p className="text-muted">{personalInfo.contact.phone}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-secondary p-3 rounded-lg text-accent">
              <MapPin size={24} />
            </div>
            <div className={isRTL ? "text-right" : "text-left"}>
              <h3 className="text-lg font-semibold mb-1">{t.contact.labels.location}</h3>
              <p className="text-muted">{personalInfo.contact.location}</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-secondary p-6 rounded-lg border border-slate-800" onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label className={`block text-sm font-medium mb-2 text-slate-300 ${isRTL ? 'text-right' : 'text-left'}`}>{t.contact.labels.name}</label>
            <input type="text" className={`w-full bg-primary border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent ${isRTL ? 'text-right' : 'text-left'}`} />
          </div>
          <div className="mb-4">
            <label className={`block text-sm font-medium mb-2 text-slate-300 ${isRTL ? 'text-right' : 'text-left'}`}>{t.contact.labels.email}</label>
            <input type="email" className={`w-full bg-primary border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent ${isRTL ? 'text-right' : 'text-left'}`} />
          </div>
          <div className="mb-6">
            <label className={`block text-sm font-medium mb-2 text-slate-300 ${isRTL ? 'text-right' : 'text-left'}`}>{t.contact.labels.message}</label>
            <textarea rows="4" className={`w-full bg-primary border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent ${isRTL ? 'text-right' : 'text-left'}`}></textarea>
          </div>
          <button className="w-full bg-accent text-primary font-bold py-3 rounded-lg hover:bg-accent/90 transition-colors flex items-center justify-center gap-2">
            <Send size={18} /> {t.contact.labels.send}
          </button>
        </form>
      </div>
    </Section>
  );
};

export default Contact;

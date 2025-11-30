import React from 'react';
import Section from './Section';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Experience = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';
  
  const borderClass = isRTL ? "border-r-2 pr-8 mr-4" : "border-l-2 pl-8 ml-4";
  const dotClass = isRTL ? "-right-[41px]" : "-left-[41px]";

  return (
    <Section id="experience">
      <div className="mb-12">
        <h2 className={`text-3xl font-bold mb-4 text-center ${isRTL ? 'md:text-right' : 'md:text-left'}`}>
          <span className="text-accent">03.</span> {t.experience.title}
        </h2>
        <div className={`w-20 h-1 bg-accent mx-auto ${isRTL ? 'md:mr-0' : 'md:ml-0'}`}></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Work Experience */}
        <div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Briefcase className="text-accent" /> {t.experience.work_title}
          </h3>
          <div className={`space-y-8 border-slate-700 ${borderClass}`}>
            {t.experience.jobs.map((exp, index) => (
              <div key={index} className="relative">
                <div className={`absolute ${dotClass} top-0 w-5 h-5 bg-accent rounded-full border-4 border-primary`}></div>
                <div className="bg-secondary p-6 rounded-lg hover:shadow-lg transition-all border border-transparent hover:border-slate-700">
                  <div className="flex flex-col md:flex-row justify-between mb-2">
                    <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                    <span className="text-accent text-sm font-mono flex items-center gap-1">
                      <Calendar size={14} /> {exp.period}
                    </span>
                  </div>
                  <div className="text-lg text-muted mb-2">{exp.company}</div>
                  <div className="text-sm text-slate-500 mb-4 flex items-center gap-1">
                    <MapPin size={14} /> {exp.location}
                  </div>
                  <p className="text-slate-300 text-sm">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <GraduationCap className="text-accent" /> {t.experience.edu_title}
          </h3>
          <div className={`space-y-8 border-slate-700 ${borderClass}`}>
            {t.experience.education.map((edu, index) => (
              <div key={index} className="relative">
                <div className={`absolute ${dotClass} top-0 w-5 h-5 bg-accent rounded-full border-4 border-primary`}></div>
                <div className="bg-secondary p-6 rounded-lg hover:shadow-lg transition-all border border-transparent hover:border-slate-700">
                  <div className="flex flex-col md:flex-row justify-between mb-2">
                    <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                    <span className="text-accent text-sm font-mono flex items-center gap-1">
                      <Calendar size={14} /> {edu.period}
                    </span>
                  </div>
                  <div className="text-lg text-muted mb-4">{edu.school}</div>
                  <p className="text-slate-300 text-sm italic">{edu.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Experience;

import { 
  Code, 
  Shield, 
  Brain, 
  Database, 
  Cloud, 
  Terminal, 
  Globe, 
  Cpu,
  Server,
  Smartphone
} from 'lucide-react';

export const personalInfo = {
  name: "Hatem TELLI",
  titles: [
    "Full Stack Developer",
    "CyberSecurity Specialist",
    "Artificial Intelligence Researcher"
  ],
  profileImage: "/images/5reerrrereeryud.png",
  contact: {
    linkedin: "https://linkedin.com/in/tellihatem",
    github: "https://github.com/tellihatem",
    email: "hatem.telli@etu.univ-batna2.dz",
    phone: "+213 783853544",
    location: "46 Soultani Ahmed Tolga, Biskra, Algeria"
  },
  summary: "Passionate Full Stack & Mobile App Developer creating scalable and secure applications. Dedicated AI Researcher exploring intelligent solutions. Cybersecurity Specialist with deep understanding of securing systems and implementing proactive security measures.",
  skills: {
    programming: ["Python", "PHP", "C/C++", "Java", "JavaScript (ES6+)", "HTML", "CSS"],
    frameworks: ["Pytorch", "Tensorflow", "OpenCV", "React", "Next.js", "Node.js", "Tailwind CSS"],
    databases: ["SQLite", "MySQL", "PostgreSQL", "MongoDB", "Oracle DB"],
    cloud: ["AWS", "Azure", "Google Cloud", "SSH"],
    tools: ["VS Code", "PyCharm", "IntelliJ IDEA", "Android Studio", "Docker", "Git"],
    security: ["Encryption", "Security Audits", "Penetration Testing", "Malware Analysis"],
    platforms: ["Windows", "Linux (Kali, Ubuntu)", "Android", "iOS"]
  },
  experience: [
    {
      role: "Teaching",
      company: "Institute National Tolga",
      location: "Biskra, Algeria",
      period: "Oct 2024 - Present",
      description: "Computer Science Instructor.",
      icon: <Brain size={20} />
    },
    {
      role: "Freelance Website Developer",
      company: "THODZ Freelancing Company",
      location: "Remote",
      period: "Oct 2020 - Present",
      description: "Developing websites and web applications for various clients.",
      icon: <Globe size={20} />
    }
  ],
  education: [
    {
      degree: "Master in Cryptography and Security",
      school: "University of Batna, Algeria",
      period: "2022 - 2024",
      details: "Theme: Malware detection with artificial intelligence",
      icon: <Shield size={20} />
    },
    {
      degree: "Bachelor in Computer Systems",
      school: "University of Biskra, Algeria",
      period: "2019 - 2022",
      details: "Theme: Dynamic Social Media Website",
      icon: <Cpu size={20} />
    }
  ],
  projects: [
    {
      title: "Intelligent Antivirus",
      description: "Sophisticated antivirus powered by AI offering real-time protection, automated updates, and deep learning techniques for malware classification.",
      tags: ["AI", "Security", "Python", "Deep Learning"],
      icon: <Shield />,
      image: "https://placehold.co/600x400/1e293b/38bdf8?text=Intelligent+Antivirus",
      demoUrl: "#" // Place your project files in public/projects/antivirus
    },
    {
      title: "Malware Classification System",
      description: "Multi-stage deep neural network architecture to predict malware class based on binary-to-grayscale images. Tested on Malimg dataset.",
      tags: ["Deep Learning", "Computer Vision", "Research"],
      icon: <Brain />,
      image: "https://placehold.co/600x400/1e293b/38bdf8?text=Malware+Classification",
      demoUrl: "#"
    },
    {
      title: "Magicrypto Academy",
      description: "Platform to teach beginners about crypto markets with real-time news, insights, and automated trading bots.",
      tags: ["Web Dev", "Crypto", "Education"],
      icon: <Code />,
      image: "https://placehold.co/600x400/1e293b/38bdf8?text=Magicrypto+Academy",
      demoUrl: "#"
    },
    {
      title: "Social Media Platform",
      description: "Innovative platform with seamless sharing and end-to-end encrypted chat functionality.",
      tags: ["Full Stack", "Encryption", "Social"],
      icon: <Smartphone />,
      image: "https://placehold.co/600x400/1e293b/38bdf8?text=Social+Media+App",
      repoUrl: "https://github.com/tellihatem/THODZ_Social_Media",
      demoUrl: "https://tricky-mureil-thodz-82f1b2c9.koyeb.app/"
    },
    {
      title: "New Project Title",
      description: "Description of your amazing new project goes here.",
      tags: ["React", "Node.js", "MongoDB"],
      icon: <Globe />,
      image: "https://placehold.co/600x400/1e293b/38bdf8?text=New+Project"
    }
  ],
  certifications: [
    {
      name: "Responsive Web Design",
      issuer: "FreeCodeCamp",
      date: "July 2024",
      id: "thatem-rwd"
    },
    {
      name: "Back End Development and APIs",
      issuer: "FreeCodeCamp",
      date: "July 2024",
      id: "thatem-bedaa"
    }
  ]
};

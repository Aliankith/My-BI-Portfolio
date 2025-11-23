import React, { useState, useEffect } from 'react';
import { User, Briefcase, Code, GraduationCap, Mail, ExternalLink, Github, Linkedin, Download, ChevronDown, Moon, Sun, MapPin, Phone } from 'lucide-react';

/**
 * =========================================================================================
 * USER CONFIGURATION - EDIT THIS SECTION ONLY
 * =========================================================================================
 * * Instructions:
 * 1. Replace the text inside the quotation marks with your own details.
 * 2. You can add or remove items from the arrays (items inside [ ... ]).
 * 3. This is the only section you need to touch to update your portfolio!
 */

const DATA = {
  // --- Personal Info ---
  name: "Ankith Bera",
  title: "Senior Data & Reporting Analyst | People Analytics & Data Strategy",
  email: "ankithbera@gmail.com",
  phone: "9046786005",
  location: "Kolkata, WB",
  about: "Dynamic Senior Data & Reporting Analyst with 4+ years of experience in Business Intelligence & People Analytics. Proficient in Power BI, SQL, Workday Reporting, and data visualization for strategic decision-making. Skilled in automating workflows, optimizing reporting structures, and translating complex datasets into actionable insights. Experienced in cross-functional collaboration with HR, Talent, and Finance teams to drive impactful workforce strategies.",
  
  // --- New: Profile Picture URL ---
  profileUrl: "https://media.licdn.com/dms/image/v2/D5603AQF72LhGJu_mDA/profile-displayphoto-crop_800_800/B56ZmkP4wzKEAI-/0/1759397255954?e=1765411200&v=beta&t=H1BZWQe25oFuEGTh7gqeJDmwPV6ILpoDhxRSDwBozIc",

  // --- Social Links ---
  // ! IMPORTANT: Replace these '#' with your actual profile URLs
  linkedin: "https://www.linkedin.com/in/ankith-bera/", 
  github: "#", 
  resumeUrl: "https://drive.google.com/file/d/1XyS8xLkstHgwd6VZ8rzbwHOo5Up6RNfI/view?usp=drive_link", // Upload your PDF to Google Drive/Dropbox and paste the share link here

  // --- Skills Section ---
  skills: [
    { 
      category: "Data Analytics & BI", 
      items: ["Power BI ", "SQL", "Workday Report Writer", "People Analytics", "KPI Analysis", "Data Modeling"] 
    },
    { 
      category: "Technical & Automation", 
      items: ["Power Apps", "Power Automate", "Database Management", "AWS/Azure (Exposure)", "Google Sheets/Slides"] 
    },
    { 
      category: "Data Visualization & Reporting", 
      items: ["Dashboard Creation",  "Workforce Metrics", "Compliance Reporting"] 
    },
    { 
      category: "Professional & Soft Skills", 
      items: ["Data Storytelling", "Cross-Functional Collaboration", "Stakeholder Management", "Process Optimization"] 
    }
  ],

  // --- Experience Section ---
  experience: [
    {
      role: "Lead Analyst",
      company: "Capgemini",
      period: "Apr 2022 – Present",
      description: "Led People Analytics & BI development for Global HR. Designed Power BI models, automated 75% of reporting tasks (cutting TAT by 50%), managed stakeholder alignment, and conducted deep KPI analysis using Workday Report Writer.",
    },
    {
      role: "Assistant Engineer",
      company: "Rashmi Metaliks Ltd",
      period: "Jan 2018 – Jan 2022",
      description: "Optimized operational efficiency by proactive analysis of metadata. Reduced machine downtime by 30% and cut inventory costs by 50%, significantly improving production margins.",
    },
    {
      role: "Subject Matter Expert (Freelance)",
      company: "Chegg India",
      period: "Apr 2015 – Aug 2017",
      description: "Provided expert solutions in Electrical Engineering, facilitating clear knowledge dissemination.",
    },
    {
      role: "Operations Executive",
      company: "Kotak Mahindra Fin. Services",
      period: "Jun 2017 – Dec 2017",
      description: "Led data validation efforts to improve document integrity and operational streamlining.",
    }
  ],

  // --- Education Section ---
  education: [
    {
      degree: "PG Diploma in Data Science",
      school: "IIIT Bangalore & UpGrad",
      year: "Mar 2021 - Apr 2022"
    },
    {
      degree: "Master's in Technology (Power Systems)",
      school: "Netaji Subhas Engineering College",
      year: "Aug 2013 - Aug 2015"
    },
    {
      degree: "Microsoft Power BI Desktop for Business Intelligence",
      school: "Certification",
      year: "2024"
    },
    {
      degree: "Gen AI for Everyone",
      school: "Certification",
      year: "2024"
    }
  ],

  // --- Projects Section ---
  projects: [
    {
      title: "Generational Workforce Analysis (Gen Z)",
      tags: ["Excel", "Power BI", "Workforce Planning"],
      description: "Conducted in-depth analysis of workforce composition focused on Gen Z employees. Identified hiring, retention, and engagement trends across generational cohorts and delivered actionable insights to HR leadership.",
      link: "#"
    },
    {
      title: "Workforce KPI Dashboard",
      tags: ["Power BI", "Workday Reporting"],
      description: "Developed comprehensive workforce KPI dashboards, tracking accuracy, attrition, hiring trends, and organizational performance in the HR domain.",
      link: "#"
    },
    {
      title: "Expense Tracking Financial Dashboard",
      tags: ["Power BI", "SQL", "Finance"],
      description: "Built an expense-tracking dashboard, analyzing Year-to-Date financial metrics for improved budget visibility.",
      link: "#"
    },
    {
      title: "Loan Repayment Likelihood Prediction",
      tags: ["Python", "Banking Analytics", "EDA"],
      description: "Applied Exploratory Data Analysis (EDA) techniques to assess applicant repayment likelihood, aiding risk assessment.",
      link: "#"
    },
    {
      title: "Manufacturing/Regional Performance KPI Analysis",
      tags: ["Power BI", "Strategic Insights"],
      description: "Designed executive dashboards tracking regional performance and high-value customer analytics to drive operational decisions.",
      link: "#"
    }
  ]
};

/**
 * =========================================================================================
 * MAIN APPLICATION CODE - NO NEED TO EDIT BELOW THIS LINE
 * =========================================================================================
 */

const App = () => { // Component renamed to App
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const NavItem = ({ id, icon: Icon, label }) => (
    <button
      onClick={() => scrollTo(id)}
      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
        activeSection === id 
          ? (darkMode ? 'bg-blue-600 text-white' : 'bg-slate-900 text-white')
          : (darkMode ? 'text-slate-300 hover:bg-slate-800' : 'text-slate-600 hover:bg-slate-100')
      }`}
    >
      <Icon size={18} />
      <span className="hidden md:inline font-medium">{label}</span>
    </button>
  );

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'} font-sans`}>
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? (darkMode ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800' : 'bg-white/80 backdrop-blur-md shadow-sm') 
          : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl tracking-tight flex items-center gap-2">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold ${darkMode ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'}`}>
              {DATA.name.charAt(0)}
            </div>
            {DATA.name}
          </div>
          
          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden md:flex gap-2">
              <NavItem id="home" icon={User} label="About" />
              <NavItem id="experience" icon={Briefcase} label="Experience" />
              <NavItem id="projects" icon={Code} label="Projects" />
            </div>
            
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${darkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-200 hover:bg-slate-300'}`}
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 min-h-[90vh] flex flex-col justify-center">
        <div className="max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="md:w-1/2 animate-fade-in-up">
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-6 ${
              darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700'
            }`}>
              {DATA.title}
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
              Hi, I'm {DATA.name}. <br />
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${darkMode ? 'from-blue-400 to-teal-400' : 'from-blue-600 to-teal-600'}`}>
                Data Storyteller.
              </span>
            </h1>
            <p className={`text-xl md:text-2xl mb-8 max-w-2xl leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              {DATA.about}
            </p>
            
            <div className={`flex flex-col md:flex-row gap-4 mb-10 text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
               <div className="flex items-center gap-2">
                 <MapPin size={18} /> {DATA.location}
               </div>
               <div className="flex items-center gap-2">
                 <Phone size={18} /> {DATA.phone}
               </div>
               <div className="flex items-center gap-2">
                 <Mail size={18} /> {DATA.email}
               </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href={DATA.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-transform hover:-translate-y-1 ${
                  darkMode ? 'bg-blue-600 hover:bg-blue-500 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                <Download size={20} />
                Download Resume
              </a>
              <a 
                href={DATA.linkedin}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold border-2 transition-transform hover:-translate-y-1 ${
                  darkMode ? 'border-slate-700 hover:bg-slate-800' : 'border-slate-300 hover:bg-slate-100'
                }`}
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Profile Image - Circular Frame */}
          <div className="md:w-1/2 flex justify-center animate-fade-in-up delay-100">
             <div className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 shadow-2xl ${
               darkMode ? 'border-slate-800' : 'border-white'
             }`}>
                <img 
                  src={DATA.profileUrl || "https://via.placeholder.com/400"} 
                  alt={DATA.name}
                  className="w-full h-full object-cover"
                />
             </div>
          </div>

        </div>
      </section>

      {/* Skills Section */}
      <section className={`py-20 px-6 ${darkMode ? 'bg-slate-900' : 'bg-slate-100'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <Code className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
            Technical Expertise
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {DATA.skills.map((skillGroup, idx) => (
              <div 
                key={idx} 
                className={`p-6 rounded-2xl border transition-all hover:shadow-lg ${
                  darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'
                }`}
              >
                <h3 className="text-xl font-bold mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className={`px-3 py-1 rounded-md text-sm ${
                        darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <Briefcase className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
            Professional Experience
          </h2>

          <div className="space-y-12">
            {DATA.experience.map((job, idx) => (
              <div key={idx} className="relative pl-8 md:pl-0">
                {/* Timeline Line */}
                <div className={`hidden md:block absolute left-[50%] top-0 bottom-0 w-px ${darkMode ? 'bg-slate-800' : 'bg-slate-200'}`}></div>
                
                <div className={`md:flex justify-between items-center group ${idx % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className={`md:w-[45%] mb-4 md:mb-0 ${idx % 2 === 0 ? 'text-left md:text-left' : 'text-left md:text-right'}`}>
                    <h3 className="2xl font-bold">{job.role}</h3>
                    <div className={`text-lg font-medium mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>{job.company}</div>
                    <p className={`leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{job.description}</p>
                  </div>
                  
                  {/* Center Dot */}
                  <div className={`absolute left-0 md:left-[50%] md:-translate-x-1/2 w-4 h-4 rounded-full border-4 ${
                    darkMode ? 'bg-slate-950 border-blue-500' : 'bg-white border-blue-500'
                  }`}></div>

                  {/* Date */}
                  <div className={`md:w-[45%] pl-8 md:pl-0 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${
                      darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-200 text-slate-700'
                    }`}>
                      {job.period}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold mt-20 mb-8 flex items-center gap-3">
            <GraduationCap className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
            Education & Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {DATA.education.map((edu, idx) => (
              <div key={idx} className={`p-6 rounded-xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                <h4 className="font-bold text-lg">{edu.degree}</h4>
                <div className="text-slate-500">{edu.school}</div>
                <div className="text-sm text-slate-400 mt-2">{edu.year}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 px-6 ${darkMode ? 'bg-slate-900' : 'bg-slate-100'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <Code className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
            Key Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DATA.projects.map((project, idx) => (
              <div 
                key={idx} 
                className={`group p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  darkMode ? 'bg-slate-950 hover:bg-slate-900' : 'bg-white hover:bg-slate-50'
                }`}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3 rounded-lg ${darkMode ? 'bg-blue-900/20 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                    <Briefcase size={24} />
                  </div>
                  {/* Link is optional based on resume content, kept generic if empty */}
                  {project.link !== "#" && (
                    <a href={project.link} className={`opacity-0 group-hover:opacity-100 transition-opacity ${darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-400 hover:text-black'}`}>
                        <ExternalLink size={20} />
                    </a>
                  )}
                </div>
                
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className={`mb-6 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className={`text-xs px-2 py-1 rounded ${
                        darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-200 text-slate-600'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 text-center ${darkMode ? 'bg-slate-950 text-slate-500' : 'bg-white text-slate-500'}`}>
        <p>© {new Date().getFullYear()} {DATA.name}. All rights reserved.</p>
        <p className="text-sm mt-2">Built with React & Tailwind</p>
      </footer>

    </div>
  );
};

export default App; // Export changed to App

import { useState, useEffect, useRef } from "react";
import "./About.css";
import luke from "../src/assets/images/luke.jpg";
import SSU from "../src/assets/images/ssu.png";
import SPES from "../src/assets/images/spes.png";
import BU from "../src/assets/images/bu.png";
import Expresslogo from "../src/assets/images/Expressjs.png";
import Mongologo from "../src/assets/images/Mongodb.png";
import Tensorflowlogo from "../src/assets/images/Tensorflow.png";

// Terminal Bio Component with enhanced content
const TerminalBio = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const terminalRef = useRef(null);
  
  // Enhanced terminal text with more detailed bio content based on actual resume
  const text = `visitor@luke-samson:~$ cat about.txt
  
  Hi! I am Luke Vincent Samson, a dedicated Software Engineer and Full-Stack Developer with a strong foundation in building integrated applications for Contact Center platforms. I specialize in developing seamless web experiences using Vue.js, React, Express.js, and integrating AI capabilities.
  
  With professional experience spanning both frontend and backend development, as well as AI and machine learning implementation using TensorFlow, PyTorch, and NLP tools like spaCy and NLTK, I strive to deliver high-quality solutions that have a positive impact on users.
  
  I graduated with Latin Honors (Cum Laude) in Computer Science from Bicol University, where I honed my skills in software development, artificial intelligence, and database management.
  
  I'm passionate about integrating emerging technologies like voice biometric authentication and creating automation solutions that streamline business processes.
  
  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or hiking in the beautiful landscapes of Bicol.
  
  visitor@luke-samson:~$ cat professional_experience.txt
  
  • Software Engineer at GCM3 (July 2024-Present)
    Maintaining and enhancing Vue.js frontend and Express.js backend applications
    Building RESTful APIs integrated with multiple banking systems
    Designing and implementing IVR and chatbot flows
    Managing deployments on Windows IIS and Linux environments
  
  • AI Developer - Freelancing (October 2024-Present)
    Developing MVPs and prototypes for businesses based on client proposals
    Building chatbots for WhatsApp using Twilio and Google Maps API
    Creating automation solutions for lead capture and appointment scheduling
  
  • Full-stack Developer Intern at Andale (May 2023-April 2024)
    Developed web and mobile applications using React, Express, Node.js, Flutter and Firebase
    Implemented RESTful APIs and worked with NoSQL and SQL databases
  
  visitor@luke-samson:~$ _`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startTypewriter();
        }
      },
      { threshold: 0.3 }
    );
    
    if (terminalRef.current) {
      observer.observe(terminalRef.current);
    }
    
    return () => {
      if (terminalRef.current) {
        observer.unobserve(terminalRef.current);
      }
    };
  }, []);
  
  const startTypewriter = () => {
    if (textIndex < text.length) {
      const timer = setTimeout(() => {
        setTextIndex(textIndex + 1);
      }, 20);
      return () => clearTimeout(timer);
    }
  };

  useEffect(() => {
    if (textIndex < text.length) {
      const timer = setTimeout(() => {
        setTextIndex(textIndex + 1);
      }, 20);
      return () => clearTimeout(timer);
    }
  }, [textIndex]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div
      ref={terminalRef}
      className="terminal-card"
    >
      <div className="terminal-header">
        <div className="terminal-button"></div>
        <div className="terminal-button"></div>
        <div className="terminal-button"></div>
        <span className="terminal-title">terminal</span>
      </div>

      <div className="terminal-body">
        {text.slice(0, textIndex)}
        {showCursor && <span className="terminal-cursor">|</span>}
      </div>
    </div>
  );
};

// Profile Card Component with enhanced content
const ProfileCard = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const tiltX = (y - centerY) / 10;
    const tiltY = (centerX - x) / 10;
    
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div 
      className="profile-card-container"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
      }}
    >
      <div className="profile-card">
        <div className="profile-cover"></div>
        
        <div className="profile-content">
          <div className="profile-image-container">
            <img src={luke} alt="Luke Vincent Samson" className="profile-image" />
          </div>
          
          <h2 className="profile-name">Luke Vincent Samson</h2>
          <p className="profile-title">Software Engineer</p>
          
          <p className="profile-bio">
            Building innovative solutions and creating impactful software experiences
          </p>
          
          <div className="profile-stats">
            <div className="stat">
              <h6>50+</h6>
              <small>Repositories</small>
            </div>
            <div className="stat">
              <h6>500+</h6>
              <small>Connections</small>
            </div>
            <div className="stat">
              <h6>100+</h6>
              <small>Projects</small>
            </div>
          </div>
          
          <div className="profile-social">
            <a href="https://github.com/lucheezou" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://twitter.com/lucheezou" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/luke-vincent-samson-646bb8190/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://lucheezou.github.io" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-globe"></i>
            </a>
          </div>
          
          <a href="https://www.linkedin.com/in/luke-vincent-samson-646bb8190/" target="_blank" rel="noopener noreferrer" className="profile-button">
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

// Enhanced Skills Display Component with more detailed content and descriptions
const SkillsDisplay = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  const [showSkillDetails, setShowSkillDetails] = useState(null);
  
  const skillsData = [
    { 
      id: 'js', 
      name: 'JavaScript', 
      icon: 'fa-brands fa-js', 
      level: 90,
      description: "Core language for web & backend development" 
    },
    { 
      id: 'vue', 
      name: 'Vue.js', 
      icon: 'fa-brands fa-vuejs', 
      level: 85,
      description: "Frontend framework for Contact Center applications" 
    },
    { 
      id: 'react', 
      name: 'React', 
      icon: 'fa-brands fa-react', 
      level: 85,
      description: "Component-based UI development" 
    },
    { 
      id: 'node', 
      name: 'Node.js', 
      icon: 'fa-brands fa-node', 
      level: 80,
      description: "Server-side JavaScript runtime" 
    },
    { 
      id: 'python', 
      name: 'Python', 
      icon: 'fa-brands fa-python', 
      level: 80,
      description: "AI, automation & backend development" 
    },
    { 
      id: 'ai', 
      name: 'AI Integration', 
      icon: 'fa-solid fa-robot', 
      level: 85,
      description: "LLMs, voice biometrics & chatbot development" 
    },
    { 
      id: 'ml', 
      name: 'Machine Learning', 
      icon: 'fa-solid fa-brain', 
      level: 75,
      description: "TensorFlow, PyTorch & scikit-learn implementation" 
    },
    { 
      id: 'nlp', 
      name: 'NLP', 
      icon: 'fa-solid fa-comment-dots', 
      level: 75,
      description: "Natural language processing with spaCy & NLTK" 
    },
    { 
      id: 'db', 
      name: 'Databases', 
      icon: 'fa-solid fa-database', 
      level: 80,
      description: "MySQL, PostgreSQL, MongoDB & more" 
    },
    { 
      id: 'api', 
      name: 'RESTful APIs', 
      icon: 'fa-solid fa-plug', 
      level: 85,
      description: "Design & implementation for core system integration" 
    },
    { 
      id: 'auto', 
      name: 'Automation', 
      icon: 'fa-solid fa-cogs', 
      level: 75,
      description: "n8n, Make, Zapier & custom solutions" 
    },
    { 
      id: 'cloud', 
      name: 'Cloud Services', 
      icon: 'fa-solid fa-cloud', 
      level: 70,
      description: "AWS, Azure, Heroku & Render deployment" 
    },
  ];

  const handleSkillClick = (skillId) => {
    if (showSkillDetails === skillId) {
      setShowSkillDetails(null);
    } else {
      setShowSkillDetails(skillId);
    }
  };

  return (
    <div className="skills-container">
      <h3 className="skills-title">TECH STACK</h3>
      <div className="skills-grid">
        {skillsData.map((skill) => (
          <div 
            key={skill.id}
            className={`skill-item ${activeSkill === skill.id ? 'active' : ''} ${showSkillDetails === skill.id ? 'expanded' : ''}`}
            onMouseEnter={() => setActiveSkill(skill.id)}
            onMouseLeave={() => setActiveSkill(null)}
            onClick={() => handleSkillClick(skill.id)}
          >
            {skill.icon ? (
              <i className={`skill-icon ${skill.icon}`}></i>
            ) : (
              <img src={skill.imgSrc} alt={skill.name} className="skill-img" />
            )}
            <div className="skill-info">
              <h4>{skill.name}</h4>
              <div className="skill-bar">
                <div 
                  className="skill-progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              {showSkillDetails === skill.id && (
                <div className="skill-description">
                  {skill.description}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="additional-skills">
        <img className="skill-logo" src={Expresslogo} alt="Express" />
        <img className="skill-logo" src={Mongologo} alt="MongoDB" />
      </div>
    </div>
  );
};

// New component: Projects & Certifications
const ProjectsHighlights = () => {
  return (
    <div className="interests-container">
      <h3 className="interests-title">FEATURED WORK</h3>
      <div className="interests-grid">
        <div className="interest-item">
          <div className="interest-icon">
            <i className="fas fa-headset"></i>
          </div>
          <div className="interest-content">
            <h4>Contact Center Integration</h4>
            <p>Screen pop web applications integrated with Glia, Genesys, and 8x8</p>
          </div>
        </div>
        <div className="interest-item">
          <div className="interest-icon">
            <i className="fas fa-robot"></i>
          </div>
          <div className="interest-content">
            <h4>AI Chatbots</h4>
            <p>WhatsApp and web chatbots with CRM integration and routing capabilities</p>
          </div>
        </div>
        <div className="interest-item">
          <div className="interest-icon">
            <i className="fas fa-fingerprint"></i>
          </div>
          <div className="interest-content">
            <h4>Voice Biometrics</h4>
            <p>Integration of Illuma Labs for voice authentication in banking systems</p>
          </div>
        </div>
        <div className="interest-item">
          <div className="interest-icon">
            <i className="fas fa-calendar-check"></i>
          </div>
          <div className="interest-content">
            <h4>Scheduling Systems</h4>
            <p>Clinic appointment scheduling with automated notifications and management</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// New component: Academic & Recognition
const AcademicRecognition = () => {
  return (
    <div className="philosophy-container">
      <div className="philosophy-content">
        <h3 className="philosophy-title">EDUCATION & ACHIEVEMENTS</h3>
        <div className="achievement-item">
          <div className="achievement-icon">
            <i className="fas fa-graduation-cap"></i>
          </div>
          <div className="achievement-content">
            <h4>Bicol University</h4>
            <p>BS Computer Science - Cum Laude</p>
          </div>
        </div>
        
        <div className="achievement-item">
          <div className="achievement-icon">
            <i className="fas fa-award"></i>
          </div>
          <div className="achievement-content">
            <h4>DOST Science Scholarship</h4>
            <p>Department of Science and Technology Junior Level Science Scholarship</p>
          </div>
        </div>
        
        <div className="achievement-item">
          <div className="achievement-icon">
            <i className="fas fa-certificate"></i>
          </div>
          <div className="achievement-content">
            <h4>Technical Expertise</h4>
            <p>Contact Center integrations, banking system APIs, IVR design</p>
          </div>
        </div>
        
        <div className="achievement-item">
          <div className="achievement-icon">
            <i className="fas fa-code-branch"></i>
          </div>
          <div className="achievement-content">
            <h4>Project Leadership</h4>
            <p>Leading client meetings and technical requirement gathering</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="education-section" id="education">
      <h2 className="education-title">WORK EXPERIENCE</h2>
      
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-icon college"></div>
          <div className="timeline-content">
            <div className="education-header">
              <h3>GCM3</h3>
              {/* Remove or comment out the image if you don't have a company logo */}
              {/* <img src={companyLogo1} alt="GCM3 Logo" /> */}
            </div>
            <p>Software Engineer</p>
            <span className="timeline-date">July 2024 - Present</span>
            <p className="education-details">
              <strong>Key Responsibilities:</strong><br/>
              • Maintaining Vue.js frontend and Express.js backend applications<br/>
              • Building RESTful APIs for core banking systems (Symitar, Fiserv DNA)<br/>
              • Designing IVR and chatbot flows for customer service automation<br/>
              • Managing deployments on Windows IIS and Linux environments<br/>
              • Integrating emerging technologies like voice biometric authentication
            </p>
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-icon highschool"></div>
          <div className="timeline-content">
            <div className="education-header">
              <h3>Freelancing</h3>
              {/* Remove or comment out the image if you don't have a company logo */}
              {/* <img src={companyLogo2} alt="Freelance Logo" /> */}
            </div>
            <p>AI Developer</p>
            <span className="timeline-date">October 2024 - Present</span>
            <p className="education-details">
              <strong>Projects:</strong><br/>
              • WhatsApp chatbot for delivery drivers with route optimization<br/>
              • Real estate chatbot with Hubspot CRM integration<br/>
              • Clinic appointment scheduling system with notifications<br/>
              • MVP and prototype development for business clients
            </p>
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-icon elementary"></div>
          <div className="timeline-content">
            <div className="education-header">
              <h3>Andale</h3>
              {/* Remove or comment out the image if you don't have a company logo */}
              {/* <img src={companyLogo3} alt="Andale Logo" /> */}
            </div>
            <p>Full-stack Developer Intern</p>
            <span className="timeline-date">May 2023 - April 2024</span>
            <p className="education-details">
              <strong>Responsibilities:</strong><br/>
              • Developing web and mobile applications with React, Express, Node.js, Flutter and Firebase<br/>
              • Implementing RESTful APIs for data communication<br/>
              • Working with NoSQL (MongoDB) and SQL databases for data retrieval
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const [visible, setVisible] = useState({
    title: false,
    bio: false,
    skills: false,
    interests: false,
    philosophy: false
  });
  
  const titleRef = useRef(null);
  const bioRef = useRef(null);
  const skillsRef = useRef(null);
  const interestsRef = useRef(null);
  const philosophyRef = useRef(null);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    // Add a small delay to let the section fully render
    setTimeout(() => {
      // Check for any overflows and adjust if needed
      if (sectionRef.current) {
        const section = sectionRef.current;
        const sectionHeight = section.offsetHeight;
        const sectionRect = section.getBoundingClientRect();
        
        // Check if any children overflow
        Array.from(section.children).forEach(child => {
          const childRect = child.getBoundingClientRect();
          
          // If a child extends beyond the section's bottom
          if (childRect.bottom > sectionRect.bottom) {
            console.log('Found overflow element, adjusting layout');
            // You could add a class or adjust styles here
          }
        });
      }
    }, 1000);
    
    const observerOptions = {
      threshold: 0.3
    };
    
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === titleRef.current) {
            setVisible(prev => ({ ...prev, title: true }));
          } else if (entry.target === bioRef.current) {
            setVisible(prev => ({ ...prev, bio: true }));
          } else if (entry.target === skillsRef.current) {
            setVisible(prev => ({ ...prev, skills: true }));
          } else if (entry.target === interestsRef.current) {
            setVisible(prev => ({ ...prev, interests: true }));
          } else if (entry.target === philosophyRef.current) {
            setVisible(prev => ({ ...prev, philosophy: true }));
          }
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    if (titleRef.current) observer.observe(titleRef.current);
    if (bioRef.current) observer.observe(bioRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);
    if (interestsRef.current) observer.observe(interestsRef.current);
    if (philosophyRef.current) observer.observe(philosophyRef.current);
    
    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (bioRef.current) observer.unobserve(bioRef.current);
      if (skillsRef.current) observer.unobserve(skillsRef.current);
      if (interestsRef.current) observer.unobserve(interestsRef.current);
      if (philosophyRef.current) observer.unobserve(philosophyRef.current);
    };
  }, []);

  return (
    <>
      <div id="about" className="about-section" ref={sectionRef}>
        <div className="shape-divider">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
          </svg>
        </div>
        
        <h1 
          ref={titleRef} 
          className={`about-title ${visible.title ? 'visible' : ''}`}
        >
          ABOUT ME
        </h1>
        
        <div className="about-content">
          {/* Profile Card */}
          <div className="profile-card-wrapper">
            <ProfileCard />
          </div>
          
          {/* Terminal Bio */}
          <div 
            ref={bioRef} 
            className={`about-bio ${visible.bio ? 'visible' : ''}`}
          >
            <TerminalBio />
          </div>
          
          {/* Skills Display */}
          <div 
            ref={skillsRef} 
            className={`about-skills ${visible.skills ? 'visible' : ''}`}
          >
            <SkillsDisplay />
          </div>
        </div>
        
        {/* New row for additional components */}
        <div className="about-additional-content">
          <div 
            ref={interestsRef} 
            className={`about-interests ${visible.interests ? 'visible' : ''}`}
          >
            <ProjectsHighlights />
          </div>
          
          <div 
            ref={philosophyRef} 
            className={`about-philosophy ${visible.philosophy ? 'visible' : ''}`}
          >
            <AcademicRecognition />
          </div>
        </div>
      </div>
      
      <Experience />
    </>
  );
};

export default About;
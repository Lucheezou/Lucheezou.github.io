import { useState, useRef, useEffect } from "react";
import "./Projects.css";
// Import your project images
import rrltool from "../src/assets/images/rrltool.png";
import dsa from "../src/assets/images/dsa.png";
import breaktime from "../src/assets/images/breaktime.png";
import fide from "../src/assets/images/f-ide.png";
import francissoft from "../src/assets/images/francissoft.png";
import page from "../src/assets/images/pagestructure.png";
import music from "../src/assets/images/music.png";
import eden from "../src/assets/images/eden.png";
import newyear from "../src/assets/images/newyear.png";
import puzzle from "../src/assets/images/puzzle.png";
import boardpost from "../src/assets/images/boardpost.png";
import DM from "../src/assets/images/r.png";
import Spotify from "../src/assets/images/spotify.png";
import WriteScan from "../src/assets/images/writescan.jpg";
import WriteScan_BE from "../src/assets/images/writescan_back.png";
import MessengerGPT from "../src/assets/images/messenger.png";
import talatrapiko from "../src/assets/images/talatrapiko.png";
import verde from "../src/assets/images/verde.png";
import lblog from "../src/assets/images/lblog.png";

const ProjectCard = ({ project, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`project-card ${isVisible ? "visible" : ""}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="card-inner">
        <div className="card-front">
          <img 
            src={project.image} 
            alt={project.title} 
            className={project.imageClass || "project-image"}
          />
          <div className="project-overlay">
            <h3>{project.title}</h3>
            <div className="tech-tags">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="card-back">
          <h3>{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <div className="project-links">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link github"
              >
                <i className="fab fa-github"></i> GitHub
              </a>
            )}
            {project.liveDemo && (
              <a 
                href={project.liveDemo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link demo"
              >
                <i className="fas fa-arrow-up-right-from-square"></i> View Project
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleProjects, setVisibleProjects] = useState([]);
  const projectsRef = useRef(null);

  // Project data
  const projectsData = [
    {
      id: 1,
      title: "F-IDE",
      description: "An online IDE with a Model that assists users in retrieving information about standard code functions. I was the Lead Developer for this project.",
      image: fide,
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      category: "fullstack",
      github: "https://github.com/Lucheezou/F-IDE",
      liveDemo: "https://f-ide.onrender.com/login"
    },
    {
      id: 2,
      title: "TalaTrapiko",
      description: "A Web Application that can web scrape or analyze manually inputted news articles written in Filipino and identifies entities using a roBERTa model and extracts statistics.",
      image: talatrapiko,
      technologies: ["React", "FastAPI", "spaCy", "Transformers", "Machine Learning"],
      category: "ai",
      github: "https://github.com/Lucheezou/TalaTrapiko"
    },
    {
      id: 3,
      title: "WriteScan",
      description: "A simple mobile app to read handwritten text using OCR technology.",
      image: WriteScan,
      imageClass: "writescan-image",
      technologies: ["React Native", "Expo", "OCR", "Mobile"],
      category: "mobile",
      github: "https://github.com/Lucheezou/WriteScan"
    },
    {
      id: 4,
      title: "WriteScan Backend",
      description: "The API server for WriteScan that processes images with a trained model made by my classmates.",
      image: WriteScan_BE,
      technologies: ["Python", "FastAPI", "Machine Learning"],
      category: "backend",
      github: "https://github.com/Lucheezou/WriteScanner_Backend"
    },
    {
      id: 5,
      title: "FrancisSoft Homepage",
      description: "Homepage for FrancisSoft built using React and Bootstrap.",
      image: francissoft,
      technologies: ["React", "Bootstrap", "Frontend"],
      category: "frontend",
      github: "https://github.com/Lucheezou/FrancisSoft",
      liveDemo: "https://francissoft.onrender.com"
    },
    {
      id: 6,
      title: "RRL Tool",
      description: "A Related Literature Review Tool listing relevant information about a topic given a title.",
      image: rrltool,
      technologies: ["React", "NLP", "Research"],
      category: "ai",
      github: "https://github.com/Lucheezou/RRLTool",
      liveDemo: "https://rrltool.onrender.com"
    },
    {
      id: 7,
      title: "MessengerGPT",
      description: "An integration of OpenAI models to Meta's Messenger API. Currently Limited Access.",
      image: MessengerGPT,
      technologies: ["Node.js", "OpenAI API", "Meta API"],
      category: "ai",
      github: "https://github.com/Lucheezou/MessengerGPT"
    },
    {
      id: 8,
      title: "Verde",
      description: "A landing page for a Plant Shop made with React and Tailwind CSS.",
      image: verde,
      technologies: ["React", "Tailwind CSS", "Frontend"],
      category: "frontend",
      github: "https://github.com/Lucheezou/Verde",
      liveDemo: "https://lucheezou.github.io/Verde"
    },
    {
      id: 9,
      title: "BoardPost",
      description: "Mini site where you can post for everyone to see. Built with MongoDB, Pug and Express.",
      image: boardpost,
      technologies: ["MongoDB", "Express", "Pug", "Node.js"],
      category: "fullstack",
      github: "https://github.com/Lucheezou/BoardPost",
      liveDemo: "https://boardpost.onrender.com"
    },
    {
      id: 10,
      title: "Spotify Token Generator",
      description: "A Spotify token generator for using Spotify's Web API.",
      image: Spotify,
      technologies: ["Node.js", "Express", "API"],
      category: "backend",
      github: "https://github.com/Lucheezou/spotify",
      liveDemo: "https://lucheezouspotify.onrender.com"
    },
    {
      id: 11,
      title: "Page Structure",
      description: "A project while learning CSS grids, flex, transitions, etc. A Tribute Page that shows page structuring.",
      image: page,
      technologies: ["HTML", "CSS", "Frontend"],
      category: "frontend",
      github: "https://github.com/Lucheezou/Page_Structure",
      liveDemo: "https://lucheezou-s-pagestructuring.onrender.com"
    },
    {
      id: 12,
      title: "Blog Template",
      description: "A blog that I made when I was interning for a startup, made with Bootstrap Templates.",
      image: lblog,
      technologies: ["Bootstrap", "HTML", "CSS"],
      category: "frontend",
      github: "https://github.com/Lucheezou/LBlog",
      liveDemo: "https://lucheezou.github.io/LBlog"
    },
    {
      id: 13,
      title: "3x3 Puzzle Solver",
      description: "A requirement for my Artificial Intelligence Course, a 3x3 puzzle solver written in C++.",
      image: puzzle,
      technologies: ["C++", "Algorithms", "AI"],
      category: "ai",
      github: "https://github.com/Lucheezou/DSA-Codes/tree/master/3x3%20puzzle%20solver%20using%20Astar%20and%20IDS%20search"
    },
    {
      id: 14,
      title: "Breaktime App",
      description: "One of my first projects while learning Javascript. Inspired by theuselessweb.com.",
      image: breaktime,
      technologies: ["HTML", "JavaScript", "CSS"],
      category: "frontend",
      github: "https://github.com/Lucheezou/Lucheezou-s_Breaktime",
      liveDemo: "https://lucheezou.github.io/Lucheezou-s_Breaktime"
    },
    {
      id: 15,
      title: "DSA Code Collection",
      description: "A compilation of my Data Structures and Algorithms Code.",
      image: dsa,
      technologies: ["C++", "Data Structures", "Algorithms"],
      category: "other",
      github: "https://github.com/Lucheezou/DSA-Codes"
    },
    {
      id: 16,
      title: "Data Mining Notes",
      description: "My notes for my Data Mining course, R for Data Mining and Machine Learning.",
      image: DM,
      technologies: ["R", "Data Mining", "Machine Learning"],
      category: "ai",
      github: "https://github.com/Lucheezou/R_DataMining"
    },
    {
      id: 17,
      title: "Music Promo Banner",
      description: "A music promo banner template for a friend's project.",
      image: music,
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "frontend",
      github: "https://github.com/Lucheezou/MusicBanner",
      liveDemo: "https://lucheezou.github.io/MusicBanner/"
    },
    {
      id: 18,
      title: "New Year Card",
      description: "An animated greeting card I made for the New Year.",
      image: newyear,
      technologies: ["HTML", "CSS", "JavaScript", "Animation"],
      category: "frontend",
      github: "https://github.com/Lucheezou/NewyearCard",
      liveDemo: "https://lucheezou.github.io/NewyearCard"
    },
    {
      id: 19,
      title: "Valentine Card",
      description: "My very first project. An animated greeting card I made for my highschool sweetheart. The secret word is CASE.",
      image: eden,
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "frontend",
      github: "https://github.com/Lucheezou/ValentineCard",
      liveDemo: "https://lucheezou.github.io/ValentineCard"
    }
  ];

  // Filter projects by category and search term
  useEffect(() => {
    let filtered = projectsData;
    
    if (filter !== "all") {
      filtered = filtered.filter(project => project.category === filter);
    }
    
    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        project => 
          project.title.toLowerCase().includes(term) || 
          project.description.toLowerCase().includes(term) ||
          project.technologies.some(tech => tech.toLowerCase().includes(term))
      );
    }
    
    setVisibleProjects(filtered);
  }, [filter, searchTerm]);

  

  // Initialize visibleProjects on component mount
  useEffect(() => {
    setVisibleProjects(projectsData);
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="wave-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
        </svg>
      </div>

      <div ref={projectsRef} className="projects-container">
        <h1 className="projects-title">PROJECTS</h1>
        <p className="projects-subtitle">
          A collection of my work ranging from simple websites to complex applications
        </p>

        <div className="projects-filters">
          <div className="category-filters">
            <button 
              className={filter === "all" ? "active" : ""}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button 
              className={filter === "frontend" ? "active" : ""}
              onClick={() => setFilter("frontend")}
            >
              Frontend
            </button>
            <button 
              className={filter === "backend" ? "active" : ""}
              onClick={() => setFilter("backend")}
            >
              Backend
            </button>
            <button 
              className={filter === "fullstack" ? "active" : ""}
              onClick={() => setFilter("fullstack")}
            >
              Full Stack
            </button>
            <button 
              className={filter === "mobile" ? "active" : ""}
              onClick={() => setFilter("mobile")}
            >
              Mobile
            </button>
            <button 
              className={filter === "ai" ? "active" : ""}
              onClick={() => setFilter("ai")}
            >
              AI/ML
            </button>
            <button 
              className={filter === "other" ? "active" : ""}
              onClick={() => setFilter("other")}
            >
              Other
            </button>
          </div>
          
          <div className="search-container">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <i className="fas fa-search search-icon"></i>
          </div>
        </div>

        <div className="projects-grid">
          {visibleProjects.length > 0 ? (
            visibleProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
              />
            ))
          ) : (
            <div className="no-projects">
              <i className="fas fa-search"></i>
              <p>No projects match your criteria. Try a different filter or search term.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
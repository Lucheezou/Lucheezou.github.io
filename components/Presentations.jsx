import { useState, useEffect, useRef } from "react";
import "./Presentations.css";
import PDFViewer from "./PDFViewer";
import PDFThumbnailGenerator from "./PDFThumbnailGenerator";

const PresentationCard = ({ presentation, index, onPresentationClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [thumbnailUrl, setThumbnailUrl] = useState(presentation.thumbnail || null);
  const [thumbnailGenerated, setThumbnailGenerated] = useState(false);
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

  const handleCardClick = () => {
    onPresentationClick(presentation);
  };

  // Handle thumbnail generation
  const handleThumbnailGenerated = (dataUrl) => {
    setThumbnailUrl(dataUrl);
    setThumbnailGenerated(true);
  };

  // Default placeholder thumbnail while loading
  const placeholderThumbnail = "/images/pdf-placeholder.jpg";

  return (
    <div
      ref={cardRef}
      className={`presentation-card ${isVisible ? "visible" : ""}`}
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={handleCardClick}
    >
      <div className="presentation-inner">
        <div className="presentation-thumbnail">
          {!thumbnailGenerated && (
            <PDFThumbnailGenerator 
              pdfUrl={presentation.pdfUrl}
              onThumbnailGenerated={handleThumbnailGenerated}
              width={400}
            />
          )}
          <img 
            src={thumbnailUrl || placeholderThumbnail} 
            alt={presentation.title} 
            className="presentation-image"
            style={{ display: thumbnailGenerated ? 'block' : 'none' }}
          />
          {!thumbnailGenerated && (
            <div className="thumbnail-loading-overlay">
              <div className="thumbnail-spinner"></div>
              <p>Generating preview...</p>
            </div>
          )}
          <div className="presentation-overlay">
            <i className="fas fa-external-link-alt"></i>
          </div>
        </div>
        <div className="presentation-info">
          <h3>{presentation.title}</h3>
          <p className="presentation-date">{presentation.date}</p>
          <p className="presentation-description">{presentation.description}</p>
          <div className="presentation-tags">
            {presentation.tags.map((tag, idx) => (
              <span key={idx} className="presentation-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Disclaimer component
const DisclaimerNotice = () => {
  return (
    <div className="disclaimer-notice">
      <p>
        <strong>Disclaimer:</strong> The slide decks presented here contain redacted content for confidentiality and privacy reasons. 
        These presentations showcase my design and presentation skills across various disciplines beyond software engineering, 
        including UX design, brand strategy, education, and business communications.
      </p>
    </div>
  );
};

const Presentations = () => {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [visiblePresentations, setVisiblePresentations] = useState([]);
  const [selectedPresentation, setSelectedPresentation] = useState(null);
  const presentationsRef = useRef(null);

  // Updated presentation data with PDF paths but no explicit thumbnails
  const presentationsData = [
    {
      id: 1,
      title: "Mobile App Engagement: Reimagined",
      description: "A strategic exploration of crafting digital experiences for focused minds in today's attention economy. Includes UX principles, engagement metrics, and case studies.",
      pdfUrl: "/adhd-focused-mobile.pdf",
      date: "April 2025",
      tags: ["UX Design", "Mobile", "User Engagement"],
      category: "design"
    },
    {
      id: 2,
      title: "Agency Onboarding Guide",
      description: "Welcome presentation for new team members joining our creative agency. Covers company culture, workflow processes, and client relationship management.",
      pdfUrl: "/onboarding.pdf",
      date: "March 2025",
      tags: ["Onboarding", "Agency Work", "Team Culture"],
      category: "business"
    },
    {
      id: 3,
      title: "Designing Accessible Slide Decks",
      description: "Best practices for creating presentations accessible to dyslexic audiences. Focuses on high-contrast design, typography selection, spacing considerations, and visual clarity.",
      pdfUrl: "/dyslexic-focused-slides.pdf",
      date: "February 2025",
      tags: ["Accessibility", "Presentation Design", "Inclusion"],
      category: "design"
    },
    {
      id: 4,
      title: "Behavioral Psychology Fundamentals",
      description: "Training materials exploring core principles of behavioral psychology with interactive visuals. Features handmade-style data visualizations and real-world application examples.",
      pdfUrl: "/behavioral-training.pdf",
      date: "January 2025",
      tags: ["Psychology", "Training", "Data Visualization"],
      category: "education"
    },
    {
      id: 5,
      title: "Brand Identity: Elevating the Everyday",
      description: "Premium lifestyle brand presentation focusing on blending heritage with modern design principles. Includes brand positioning, visual identity, and market strategy.",
      pdfUrl: "/brand-pitch.pdf",
      date: "December 2024",
      tags: ["Branding", "Marketing", "Design"],
      category: "business"
    },
    {
      id: 6,
      title: "Understanding Dummy Business Reports",
      description: "Overview of how fabricated business reports are used for system testing, employee training, and format demonstrations. Includes practical examples and implementation guidelines.",
      pdfUrl: "/dummy-reports.pdf",
      date: "November 2024",
      tags: ["Business Intelligence", "Training", "Data"],
      category: "business"
    }
  ];

  // Filter presentations by category and search term
  useEffect(() => {
    let filtered = presentationsData;
    
    if (filter !== "all") {
      filtered = filtered.filter(presentation => presentation.category === filter);
    }
    
    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        presentation => 
          presentation.title.toLowerCase().includes(term) || 
          presentation.description.toLowerCase().includes(term) ||
          presentation.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }
    
    setVisiblePresentations(filtered);
  }, [filter, searchTerm]);

  // Initialize visiblePresentations on component mount
  useEffect(() => {
    setVisiblePresentations(presentationsData);
    
    // Add custom cursor functionality
    const initCustomCursor = () => {
      const cursor = document.querySelector('.cursor');
      const cursorFollower = document.querySelector('.cursor-follower');
      
      if (!cursor || !cursorFollower) {
        // Create cursor elements if they don't exist
        const newCursor = document.createElement('div');
        newCursor.className = 'cursor';
        const newCursorFollower = document.createElement('div');
        newCursorFollower.className = 'cursor-follower';
        
        document.body.appendChild(newCursor);
        document.body.appendChild(newCursorFollower);
        
        // Set initial opacity
        newCursor.style.opacity = 0;
        newCursorFollower.style.opacity = 0;
        
        // Check if we're on mobile
        const isMobile = window.innerWidth <= 768;
        if (isMobile) return;
        
        // Make visible after a delay
        setTimeout(() => {
          newCursor.style.opacity = 1;
          newCursorFollower.style.opacity = 1;
        }, 1000);
        
        // Update on mouse move
        document.addEventListener('mousemove', (e) => {
          newCursor.style.left = `${e.clientX}px`;
          newCursor.style.top = `${e.clientY}px`;
          
          setTimeout(() => {
            newCursorFollower.style.left = `${e.clientX}px`;
            newCursorFollower.style.top = `${e.clientY}px`;
          }, 70);
        });
        
        // Interactive element effects
        const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, .presentation-card');
        
        interactiveElements.forEach(element => {
          element.addEventListener('mouseenter', () => {
            newCursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            newCursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
            newCursorFollower.style.borderColor = 'rgba(74, 140, 255, 0.8)';
          });
          
          element.addEventListener('mouseleave', () => {
            newCursor.style.transform = 'translate(-50%, -50%) scale(1)';
            newCursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
            newCursorFollower.style.borderColor = 'rgba(74, 140, 255, 0.5)';
          });
        });
      }
    };
    
    // Run cursor initialization
    initCustomCursor();
  }, []);

  // Handle presentation click
  const handlePresentationClick = (presentation) => {
    setSelectedPresentation(presentation);
  };

  // Close PDF viewer
  const handleClosePDFViewer = () => {
    setSelectedPresentation(null);
  };

  // Back to portfolio button handler
  const navigateToPortfolio = () => {
    window.location.href = '/';
  };

  return (
    <div className="presentations-page">
      {selectedPresentation && (
        <PDFViewer 
          pdfUrl={selectedPresentation.pdfUrl} 
          onClose={handleClosePDFViewer} 
        />
      )}
      
      <header className="presentations-header">
        <div className="header-content">
          <h1>Luke Vincent Samson</h1>
          <h2>Presentations</h2>
          <button className="back-button" onClick={navigateToPortfolio}>
            <i className="fas fa-arrow-left"></i> Back to Portfolio
          </button>
        </div>
      </header>

      <main className="presentations-section">
        <div ref={presentationsRef} className="presentations-container">
          <div className="presentations-intro">
            <h2>Professional Slide Decks</h2>
            <p>
              Click on any presentation to view the full slide deck. These presentations showcase my
              design and communication skills across a variety of disciplines.
            </p>
            <DisclaimerNotice />
          </div>

          <div className="presentations-filters">
            <div className="category-filters">
              <button 
                className={filter === "all" ? "active" : ""}
                onClick={() => setFilter("all")}
              >
                All
              </button>
              <button 
                className={filter === "design" ? "active" : ""}
                onClick={() => setFilter("design")}
              >
                Design
              </button>
              <button 
                className={filter === "business" ? "active" : ""}
                onClick={() => setFilter("business")}
              >
                Business
              </button>
              <button 
                className={filter === "education" ? "active" : ""}
                onClick={() => setFilter("education")}
              >
                Education
              </button>
            </div>
            
            <div className="search-container">
              <input
                type="text"
                placeholder="Search presentations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <i className="fas fa-search search-icon"></i>
            </div>
          </div>

          <div className="presentations-grid">
            {visiblePresentations.length > 0 ? (
              visiblePresentations.map((presentation, index) => (
                <PresentationCard 
                  key={presentation.id} 
                  presentation={presentation} 
                  index={index}
                  onPresentationClick={handlePresentationClick}
                />
              ))
            ) : (
              <div className="no-presentations">
                <i className="fas fa-search"></i>
                <p>No presentations match your criteria. Try a different filter or search term.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="presentations-footer">
        <p>&copy; {new Date().getFullYear()} Luke Vincent Samson. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Presentations;
import { useState, useEffect, useRef } from "react";
import "./Hero.css";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [quote, setQuote] = useState("");
  const [greeting, setGreeting] = useState("");
  const [timeOfDay, setTimeOfDay] = useState("");
  const heroRef = useRef(null);
  const particlesRef = useRef(null);
  const [playertitle, setPlay] = useState("Currently Listening To:");
  const [description, setDesc] = useState("");
  const [artist, setArtist] = useState("Not listening to anything");
  const [songname, setSong] = useState("");
  const [album, setAlbum] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [particles, setParticles] = useState([]);
  
  // List of rotating skill phrases
  const phrases = [
    "Software Engineer",
    "Web Developer",
    "Full-Stack Developer",
    "AI Enthusiast"
  ];
  
  // List of professional and inspirational quotes to display randomly
  const quotes = [
    "Innovation distinguishes between a leader and a follower.",
    "Quality is not an act, it is a habit.",
    "Creativity is intelligence having fun.",
    "Simplicity is the ultimate sophistication.",
    "Design is not just what it looks like, design is how it works.",
    "The details are not the details. They make the design.",
    "Great things in business are never done by one person. They're done by a team of people.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "The function of good software is to make the complex appear to be simple.",
    "Technology is best when it brings people together."
  ];

  // Get a random quote and set description on initial render
  useEffect(() => {
    const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomQuoteIndex]);
    setDesc("Welcome to My Portfolio");
    
    // Set the appropriate Filipino greeting based on time of day
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 18) {
      setGreeting("Magandang Araw!");
      setTimeOfDay("day");
    } else {
      setGreeting("Magandang Gabi!");
      setTimeOfDay("night");
    }
    
    // Animate hero elements on load
    setIsVisible(true);
    
    // Initialize particles
    initParticles();
    
    // Fetch Spotify data
    const fetchSpotifyData = async () => {
      try {
        const response = await fetch("https://lucheezouspotify.onrender.com/song");
        const data = await response.json();
        
        if (data && data.item) {
          setArtist(data.item.album.artists[0].name);
          setSong(data.item.name);
          setAlbum(data.item.album.images[2].url);
        }
      } catch (error) {
        console.error("Error fetching Spotify data:", error);
      } finally {
        setIsLoaded(true);
      }
    };
    
    fetchSpotifyData();
    const spotifyInterval = setInterval(fetchSpotifyData, 240000);
    
    // Animation frame for particles
    let animationFrame;
    const animateParticles = () => {
      updateParticles();
      animationFrame = requestAnimationFrame(animateParticles);
    };
    animationFrame = requestAnimationFrame(animateParticles);
    
    return () => {
      clearInterval(spotifyInterval);
      cancelAnimationFrame(animationFrame);
    };
  }, []);
  
  // Add effect for typewriter that runs whenever typedText, currentPhraseIndex, or isDeleting changes
  useEffect(() => {
    handleTypewriter();
  }, [typedText, currentPhraseIndex, isDeleting]);
  
  // Typewriter effect logic with improved timing
  const handleTypewriter = () => {
    const currentPhrase = phrases[currentPhraseIndex];
    const typingSpeed = 80; // Faster typing
    const deletingSpeed = 40; // Faster deleting
    const pauseTime = 1500;
    
    if (!isDeleting && typedText === currentPhrase) {
      // Pause at the end of the phrase before deleting
      setTimeout(() => setIsDeleting(true), pauseTime);
      return;
    }
    
    if (isDeleting && typedText === "") {
      // Move to the next phrase when current one is completely deleted
      setIsDeleting(false);
      setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
      return;
    }
    
    // Schedule the next update with appropriate speed
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(() => {
      const nextText = isDeleting
        ? currentPhrase.substring(0, typedText.length - 1)
        : currentPhrase.substring(0, typedText.length + 1);
        
      setTypedText(nextText);
    }, speed);
    
    return () => clearTimeout(timer);
  };
  
  // Enhanced particle system with more dynamic particles
  const initParticles = () => {
    const newParticles = [];
    const particleCount = 50; // Increased count for more visible effect
    
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 4 + 1,
        speedX: (Math.random() - 0.5) * 1.2,
        speedY: (Math.random() - 0.5) * 1.2,
        opacity: Math.random() * 0.6 + 0.2,
        color: Math.random() > 0.5 ? 
          `rgba(74, 140, 255, ${Math.random() * 0.6 + 0.2})` : 
          `rgba(94, 96, 206, ${Math.random() * 0.6 + 0.2})`,
        pulse: Math.random() * 0.08 + 0.02,
        pulseFactor: 0,
        pulseDirection: 1
      });
    }
    
    setParticles(newParticles);
    
    // Make sure the canvas is set to full size initially
    if (particlesRef.current) {
      particlesRef.current.width = window.innerWidth;
      particlesRef.current.height = window.innerHeight;
    }
    
    // Add window resize handler
    const handleResize = () => {
      if (particlesRef.current) {
        particlesRef.current.width = window.innerWidth;
        particlesRef.current.height = window.innerHeight;
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  };
  
  const updateParticles = () => {
    if (!particlesRef.current) return;
    
    const canvas = particlesRef.current;
    const ctx = canvas.getContext('2d');
    
    // Ensure canvas size matches window
    if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Update and draw particles with enhanced effects
    const updatedParticles = particles.map(particle => {
      // Move particle
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      
      // Wrap particles around screen
      if (particle.x > canvas.width) particle.x = 0;
      else if (particle.x < 0) particle.x = canvas.width;
      
      if (particle.y > canvas.height) particle.y = 0;
      else if (particle.y < 0) particle.y = canvas.height;
      
      // Handle pulsing effect
      particle.pulseFactor += particle.pulse * particle.pulseDirection;
      if (particle.pulseFactor > 1 || particle.pulseFactor < 0) {
        particle.pulseDirection *= -1;
      }
      
      // Calculate actual size with pulse
      const pulseSize = particle.size * (1 + particle.pulseFactor * 0.3);
      
      // Draw particle with glow effect
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, pulseSize, 0, Math.PI * 2);
      
      // Add glow effect
      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, pulseSize * 2
      );
      gradient.addColorStop(0, particle.color);
      gradient.addColorStop(1, 'rgba(74, 140, 255, 0)');
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Draw the core of the particle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, pulseSize * 0.6, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
      
      return particle;
    });
    
    setParticles(updatedParticles);
  };
  
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      // Get the section's position
      const sectionPosition = aboutSection.getBoundingClientRect().top;
      // Get the current scroll position and adjust for navbar height
      const offsetPosition = sectionPosition + window.scrollY - 80;
      
      // Perform the smooth scroll
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="hero-container" ref={heroRef} id="home">
      {/* Particle overlay canvas */}
      <canvas ref={particlesRef} className="particles-canvas"></canvas>
      
      <div className="hero-overlay"></div>
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      
      <div className="hero-content">
        <div className={`text-content ${isVisible ? 'fade-in' : ''}`}>
          <div className="title-container">
            <h1 className="hero-title">
              {/* Updated greeting with icon */}
              <div className="greeting-container">
                <i className={`fas ${timeOfDay === "day" ? "fa-sun" : "fa-moon"} greeting-icon`}></i>
                <span className="greeting-text">{greeting}</span>
              </div>
            </h1>
          </div>
          <p className="hero-description">{description}</p>
          
          {/* Added the random quote display */}
          <p className="hero-quote">"{quote}"</p>
          
          <div className="typed-text">
            <span>I'm {/^[aeiouAEIOU]/.test(typedText.charAt(0)) ? 'an' : 'a'}</span>
            <div className="typewriter-container">
              <span className="typewriter-text">{typedText}</span>
              <span className="typewriter-cursor">|</span>
            </div>
          </div>
          
          <div className="spotify-container">
            <div className="spotify-header">
              <i className="fab fa-spotify spotify-icon"></i>
              <h6>{playertitle}</h6>
            </div>
            <div className={`spotify-card ${isLoaded ? 'loaded' : 'loading'}`}>
              {isLoaded ? (
                <>
                  {album && <img src={album} alt="Album Cover" className="album-cover" />}
                  <div className="song-details">
                    <h5>{songname || "Not Playing"}</h5>
                    <h6>{artist}</h6>
                    <div className="spotify-equalizer">
                      <span className="eq-bar"></span>
                      <span className="eq-bar"></span>
                      <span className="eq-bar"></span>
                      <span className="eq-bar"></span>
                    </div>
                  </div>
                </>
              ) : (
                <div className="spotify-loading">
                  <div className="spotify-spinner"></div>
                  <p>Connecting to Spotify...</p>
                </div>
              )}
            </div>
          </div>
          
          <div className="tech-stack-showcase">
            <div className="tech-icon-wrapper">
              <i className="fab fa-react tech-icon"></i>
              <i className="fab fa-node-js tech-icon"></i>
              <i className="fab fa-js-square tech-icon"></i>
              <i className="fab fa-html5 tech-icon"></i>
              <i className="fab fa-css3-alt tech-icon"></i>
            </div>
          </div>
          
          <button className="explore-button" onClick={scrollToAbout}>
            <span>Explore</span>
            <i className="fas fa-arrow-down"></i>
          </button>
        </div>
      </div>
      
      {/* Scroll indicator animation */}
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
        <div className="scroll-arrow"></div>
        <div className="scroll-arrow"></div>
      </div>
      
      {/* Simpler wave transition element */}
      <div className="hero-wave-separator">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
    <path 
      d="M0,32 C320,64 480,0 720,32 C960,64 1120,0 1440,32 L1440,120 L0,120 Z" 
      fill="#333333"
    />
    <path 
      d="M0,48 C220,16 480,80 720,48 C960,16 1220,80 1440,48 L1440,120 L0,120 Z" 
      fill="#666666"
    />
    <path 
      d="M0,64 C320,96 480,32 720,64 C960,96 1120,32 1440,64 L1440,120 L0,120 Z" 
      fill="#f8f9fa"
    />
  </svg>
</div>
    </header>
  );
};

export default Hero;
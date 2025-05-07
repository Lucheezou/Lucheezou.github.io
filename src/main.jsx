// main.jsx - updated with React Router
import { createRoot } from 'react-dom/client';
import AppRouter from './AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Create and render React app
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<AppRouter />);

// Single implementation of smooth scrolling functionality
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for all anchor links
  const setupSmoothScrolling = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Offset for navbar
            behavior: 'smooth'
          });
        }
      });
    });
    
    console.log('Smooth scrolling initialized');
  };
  
  // Initialize smooth scrolling
  setupSmoothScrolling();
  
  // Cursor functionality (existing code)
  const setupCustomCursor = () => {
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    if (!cursor || !cursorFollower) return;
    
    // Initial position
    cursor.style.opacity = 0;
    cursorFollower.style.opacity = 0;
    
    // Show cursors after DOM is loaded
    setTimeout(() => {
      cursor.style.opacity = 1;
      cursorFollower.style.opacity = 1;
    }, 1000);
    
    // Track mouse movement
    document.addEventListener('mousemove', (e) => {
      // Update cursor position
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      
      // Update follower with slight delay for smooth trailing effect
      setTimeout(() => {
        cursorFollower.style.left = `${e.clientX}px`;
        cursorFollower.style.top = `${e.clientY}px`;
      }, 70);
    });
    
    // Handle cursor interactions
    document.addEventListener('mousedown', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(0.7)';
      cursorFollower.style.transform = 'translate(-50%, -50%) scale(0.7)';
    });
    
    document.addEventListener('mouseup', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
    });
    
    // Define all interactive elements
    const interactiveElements = document.querySelectorAll(`
      a, button, input[type="submit"], input[type="button"], 
      .nav-link, .project-card, .category-filters button,
      .search-input, .submit-button, .back-to-top,
      .profile-social a, .project-link, .explore-button,
      input[type="text"], input[type="email"], input[type="password"],
      textarea, .tech-tag, .form-control, .presentation-card
    `);
    
    // Add hover effects for each interactive element
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        // Text inputs get a text cursor style
        if (element.tagName === 'INPUT' && 
            (element.type === 'text' || element.type === 'email' || element.type === 'password') || 
            element.tagName === 'TEXTAREA') {
          cursor.style.transform = 'translate(-50%, -50%) scale(0.5)';
          cursor.style.opacity = '0.5';
          cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.2)';
          cursorFollower.style.borderColor = 'rgba(74, 140, 255, 0.4)';
          cursorFollower.style.borderWidth = '1px';
        } 
        // Other interactive elements get a pointer style
        else {
          cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
          cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
          cursorFollower.style.borderColor = 'rgba(74, 140, 255, 0.8)';
          cursorFollower.style.borderWidth = '2px';
        }
      });
      
      element.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.opacity = '1';
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorFollower.style.borderColor = 'rgba(74, 140, 255, 0.5)';
        cursorFollower.style.borderWidth = '2px';
      });
    });
  };
  
  setupCustomCursor();
  
  // Handle chatbot cursor functionality (existing code)
  const handleChatbotCursor = () => {
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    if (!cursor || !cursorFollower) return;
    
    // Function to check for chatbot elements periodically
    const checkForChatbot = setInterval(() => {
      // Look for common chatbot iframe or container elements
      const chatbotElements = document.querySelectorAll('iframe, .chatbot-container, [id*="chat"], [id*="bot"], [class*="chat"], [class*="bot"]');
      
      if (chatbotElements.length > 0) {
        console.log("Chatbot elements found, applying cursor fix");
        clearInterval(checkForChatbot);
        
        chatbotElements.forEach(element => {
          // Make the element pass through mouse events to the custom cursor
          element.style.pointerEvents = 'auto';
          
          // Add event listener for when mouse enters chatbot area
          element.addEventListener('mouseenter', () => {
            // Make custom cursor visible in chatbot area
            cursor.style.zIndex = '99999';
            cursorFollower.style.zIndex = '99998';
            
            // Adjust cursor appearance for chatbot interaction
            cursor.style.transform = 'translate(-50%, -50%) scale(1.2)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.2)';
            cursorFollower.style.borderColor = 'rgba(74, 140, 255, 0.8)';
          });
          
          // Add event listener for when mouse leaves chatbot area
          element.addEventListener('mouseleave', () => {
            // Reset cursor appearance
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorFollower.style.borderColor = 'rgba(74, 140, 255, 0.5)';
          });
          
          // Try to access iframe content if possible
          try {
            if (element.tagName === 'IFRAME' && element.contentWindow) {
              element.contentWindow.document.addEventListener('mousemove', (e) => {
                // Calculate position relative to main document
                const rect = element.getBoundingClientRect();
                const x = e.clientX + rect.left;
                const y = e.clientY + rect.top;
                
                // Update cursor position
                cursor.style.left = `${x}px`;
                cursor.style.top = `${y}px`;
                
                // Update follower with slight delay
                setTimeout(() => {
                  cursorFollower.style.left = `${x}px`;
                  cursorFollower.style.top = `${y}px`;
                }, 70);
              });
            }
          } catch (error) {
            console.log("Cannot access iframe content due to same-origin policy");
          }
        });
      }
    }, 1000); // Check every second
    
    // Stop checking after 10 seconds to avoid resource waste
    setTimeout(() => {
      clearInterval(checkForChatbot);
    }, 10000);
  };
  
  // Run the function when the DOM is loaded
  window.addEventListener('load', () => {
    setTimeout(handleChatbotCursor, 2000); // Give the chatbot time to initialize
    
    // Re-initialize smooth scrolling after everything is loaded
    // This ensures that dynamically added elements also get the smooth scrolling functionality
    setupSmoothScrolling();
  });
});
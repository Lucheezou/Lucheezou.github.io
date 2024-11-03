import "./About.css";
import { useState, useRef, useEffect } from "react";
import Lucheezou from "../src/assets/images/Lucheezou.png";
import luke from "../src/assets/images/luke.jpg";
import SSU from "../src/assets/images/ssu.png";
import SPES from "../src/assets/images/spes.png";
import BU from "../src/assets/images/bu.png";
import Expresslogo from "../src/assets/images/Expressjs.png";
import Mongologo from "../src/assets/images/Mongodb.png";
import Tensorflowlogo from "../src/assets/images/Tensorflow.png";

const TerminalBio = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [startTerminal, setTerminal] = useState(false);

  const text = `visitor@luke-samson:~$ cat about.txt
  
  Hi! I am Luke Vincent Samson, a dedicated Web Developer and Software Engineer with a strong foundation in full-stack development. I specialize in building visually appealing, user-friendly, and functional websites using technologies like JavaScript, Vue.js, React, Node.js, Express, and Python. 
  
  With experience in front-end and back-end development, as well as machine learning using TensorFlow and NLP tools like spaCy, I strive to deliver high-quality solutions that have a positive impact on users.
  
  visitor@luke-samson:~$ _`;

  useEffect(() => {

    addEventListener("scroll", () => { window.scrollY > 550 ? setTerminal(true) : setTerminal(false)})

    if (textIndex < text.length && startTerminal) {
      const timer = setTimeout(() => {
        setTextIndex(textIndex + 1);
      }, 20);
      return () => clearTimeout(timer);
    }
  }, [textIndex,startTerminal]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div
      className="card shadow-sm"
      style={{
        background: "#000000",
        borderRadius: "8px",
        width: "900px",
        height: "500px",
      }}
    >
      <div
        className="card-header d-flex align-items-center gap-2"
        style={{
          background: "#1a1a1a",
          borderBottom: "1px solid #333",
          padding: "8px 16px",
        }}
      >
        <div
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            background: "#333",
          }}
        ></div>
        <div
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            background: "#333",
          }}
        ></div>
        <div
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            background: "#333",
          }}
        ></div>
        <span className="ms-2 text-light small">terminal</span>
      </div>

      <div
        className="card-body"
        style={{
          fontFamily: "monospace",
          fontSize: "14px",
          color: "#ffffff",
          whiteSpace: "pre-wrap",
          padding: "20px",
          overflow: "auto",
        }}
      >
        {text.slice(0, textIndex)}
        {showCursor && <span className="text-light">|</span>}
      </div>
    </div>
  );
};

const ProfileCard = () => {
  return (
    <div
      className="card shadow-sm"
      style={{ maxWidth: "350px", marginBottom: "20px" }}
    >
      {/* Cover Image */}
      <div
        className="card-img-top"
        style={{
          height: "120px",
          background: "linear-gradient(135deg, #1a1a1a 0%, #404040 100%)",
        }}
      />

      {/* Profile Content */}
      <div
        className="card-body text-center position-relative"
        style={{ marginTop: "60px", background: "#ffffff" }}
      >
        {/* Profile Image */}
        <div
          className="position-absolute top-0 start-50 translate-middle"
          style={{ marginTop: "-60px" }}
        >
          <img
            src={luke}
            className="rounded-circle border border-4 border-white"
            alt="Luke Vincent Samson"
            style={{ width: "120px", height: "120px", objectFit: "cover" }}
          />
        </div>

        {/* User Info */}
        <h5 className="mb-0 fw-bold">Luke Vincent Samson</h5>
        <p className="text-muted mb-3">Software Engineer</p>

        {/* Bio */}
        <p className="small mb-4 text-muted">
          Building innovative solutions and creating impactful software
          experiences
        </p>

        {/* Stats */}
        <div className="d-flex justify-content-center gap-4 mb-4">
          <div className="text-center">
            <h6 className="mb-0 fw-bold">50+</h6>
            <small className="text-muted">Repositories</small>
          </div>
          <div className="text-center">
            <h6 className="mb-0 fw-bold">500+</h6>
            <small className="text-muted">Connections</small>
          </div>
          <div className="text-center">
            <h6 className="mb-0 fw-bold">100+</h6>
            <small className="text-muted">Projects</small>
          </div>
        </div>

        {/* Social Links */}
        <div className="mb-4">
          <a
            href="https://github.com/lucheezou"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark btn-sm me-2"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://twitter.com/lucheezou"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark btn-sm me-2"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/luke-vincent-samson-646bb8190/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark btn-sm me-2"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://lucheezou.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark btn-sm"
          >
            <i className="fas fa-globe"></i>
          </a>
        </div>

        {/* Action Button */}
        <a
          href="https://www.linkedin.com/in/luke-vincent-samson-646bb8190/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-dark w-100"
        >
          Connect on LinkedIn
        </a>
      </div>
    </div>
  );
};

const About = () => {
  const animatepart1 = useRef();
  const animatepart2 = useRef();
  const animatepart3 = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
     
      if (window.innerWidth >= 576) {

        if (window.scrollY > 200) {
          animatepart1.current.style.opacity = 1;
        }

        if (window.scrollY > 450) {
          animatepart2.current.style.left = 0;
          setTimeout(() => {
            animatepart2.current.style.opacity = 1;
            setTimeout(() => {
              animatepart3.current.style.opacity = 1;
            }, 1000);
          }, 300);
        }
      } 
      
      else {
        if (window.scrollY > 380) {
          animatepart1.current.style.opacity = 1;
        }

        if (window.scrollY > 500) {
          animatepart2.current.style.opacity = 1;
        }

        if (window.scrollY > 700) {
          animatepart3.current.style.opacity = 1;
        }
      }
    });
  });

  return (
    <>
      <div id="about">
        <div class="custom-shape-divider-top-1676999125"></div>

        <ProfileCard />

        <div id="abouttext">
          <h1 class="h1 initial" ref={animatepart1} id="abouttitle">
            ABOUT ME
          </h1>
          <div id="caption" ref={animatepart2}>
            <TerminalBio />
          </div>
        </div>

        <div id="abouttext2" ref={animatepart3}>
          <p class="lead"> TECH STACK </p>
          <div id="icons">
            <i class="iconbrand fa-brands fa-html5"></i>
            <i class="iconbrand fa-brands fa-js"></i>
            <i class="iconbrand fa-brands fa-css3-alt"></i>
            <i class="iconbrand fa-brands fa-react"></i>
            <i class="iconbrand fa-brands fa-vuejs"></i>
            <i class="iconbrand fa-brands fa-node"></i>
            <i class="iconbrand fa-brands fa-git-alt"></i>
            <i class="iconbrand fa-brands fa-bootstrap"></i>
            <i class="iconbrand fa-brands fa-python"></i>
            <i class="iconbrand fa-solid fa-database"></i>
            <i class="iconbrand fa-brands fa-aws"></i>
            <i class="iconbrand">
              <img id="tensorflowlogo" src={Tensorflowlogo} alt="TensorFlow" />
            </i>
          </div>

          <img id="expresslogo" src={Expresslogo} alt="Express" />
          <img id="mongologo" src={Mongologo} alt="MongoDB" />
        </div>
      </div>
      <Education />
    </>
  );
};

const Education = () => {
  return (
    <>
      <div id="education">
        <h1 class="h1" id="educationtitle">
          EDUCATION
        </h1>

        <div id="educationinfo" class="educationinfo">
          <h3 class="display-5">
            College <img src={BU} />
          </h3>
          <p class="lead">
            Bachelor of Science in Computer Science at Bicol University
            <span>2020 - 2024</span>
          </p>
          <h3 class="display-5">
            High School <img src={SSU} />
          </h3>
          <p class="lead">
            Science, Technology, Engineering and Mathematics at Sorsogon State
            University
            <span>2018 - 2020</span>
          </p>
          <p class="lead">
            Junior High School at Sorsogon State University
            <span>2014 - 2018</span>
          </p>
          <h3 class="display-5">
            Elementary <img src={SPES} id="spes" />
          </h3>
          <p class="lead">
            {" "}
            Elementary at Sorsogon Pilot Elementary School
            <span id="projects">2008 - 2014</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default About;

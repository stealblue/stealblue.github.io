import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";
import "./CSS Files/Navbar.css";
import Typewriter from "typewriter-effect/dist/core";
import { animateScroll as scroll } from "react-scroll";
import Pdf from "./Images/AkshayVakilResume.pdf";

function Navbar() {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const typewriter = new Typewriter(typewriterRef.current, {
      strings: [
        "안녕하세요.",
        "코딩 공부 중인 비전공 개발자입니다.",
        "열심히 하겠습니다.",
      ],
      autoStart: true,
      loop: true,
      typeSpeed: 30,
      deleteSpeed: 50,
    });

    typewriterRef.current.style.display = "flex";
    typewriterRef.current.style.flexWrap = "wrap";

    return () => {
      typewriter.stop();
    };
  }, []);



  const onResumeClick = () => {
    window.open(Pdf);
  };

  return (
    <nav id="navbar">
      <div className="container">
        {/* <a className="Resume" onClick={onResumeClick}>
          My Resume
        </a> */}
      </div>

      <a href="https://www.linkedin.com/in/akshay-vakil/" target="_blank" className="icons">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://github.com/Octrainn" target="_blank" className="icons">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>

      <ul className="nav-links">
        <div className="name-box">

          <li className="Name">
            A <span className="period">.</span>
          </li>

        </div>
        <Link to="About" smooth={true} duration={500}>
          <li>About</li>
        </Link>
        <Link to="Projects" smooth={true} duration={500}>
          <li>Projects</li>
        </Link>
        <Link to="Contact" smooth={true} duration={500}>
          <li>Contact</li>
        </Link>
      </ul>
      <div className="Introduction">
        <h1>안녕하세요, 이상원입니다.</h1>
        <h2>
          <span ref={typewriterRef}></span>
        </h2>
        <p>
          심리학과를 전공한 비전공 개발자입니다. 잘부탁드립니다.
        </p>
        <Link to="Contact" smooth={true} duration={900}>
          <button>Contact Me</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
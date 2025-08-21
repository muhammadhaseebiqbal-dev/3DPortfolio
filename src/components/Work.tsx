import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  useEffect(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <section className="work-section" id="work" role="main" aria-labelledby="work-main-heading">
      <div className="work-container section-container">
        <h2 id="work-main-heading">
          My <span>Work</span>
        </h2>
        <div className="work-flex" role="region" aria-label="Portfolio projects showcase">
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>01</h3>
                <div>
                  <h4>3D Resume Website</h4>
                  <p>Interactive Web Experience</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>React, TypeScript, Three.js, GSAP, WebGL</p>
            </div>
            <WorkImage 
              image="/images/3D_resume.png" 
              alt="3D Resume Website" 
              link="https://www.haseebiqbal.site/"
            />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>02</h3>
                <div>
                  <h4>Resume Analyzer</h4>
                  <p>MERN Stack Application</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>MongoDB, Express.js, React, Node.js, AI Analysis</p>
            </div>
            <WorkImage 
              image="/images/Resumepie.png" 
              alt="Resume Analyzer" 
              comingSoon={true}
            />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>03</h3>
                <div>
                  <h4>DopeShell</h4>
                  <p>Custom Shell Application</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Python, AI-Powered, Cross-platform, Lightweight, Custom Commands</p>
            </div>
            <WorkImage 
              image="/images/dopeshell.png" 
              alt="DopeShell Custom Shell" 
              link="https://github.com/muhammadhaseebiqbal-dev/DopeShell"
            />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>04</h3>
                <div>
                  <h4>FylyFly</h4>
                  <p>File Storage Platform</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Next.js, Go, File API, Unlimited Storage, Direct Downloads</p>
            </div>
            <WorkImage 
              image="/images/fylfly.png" 
              alt="FylyFly File Storage Platform" 
              link="https://fylfly.vercel.app/"
            />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>05</h3>
                <div>
                  <h4>Conway's Game of Life</h4>
                  <p>Interactive Simulation</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>HTML, CSS, JavaScript, Beautiful Design, Customizable</p>
            </div>
            <WorkImage 
              image="/images/conways.png" 
              alt="Conway's Game of Life" 
              link="https://conways-game-of-life-tawny.vercel.app/"
            />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>06</h3>
                <div>
                  <h4>Pulse</h4>
                  <p>Social Media Platform</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>React, Vite, Social Features, Post & Comment System</p>
            </div>
            <WorkImage 
              image="/images/capstone.png" 
              alt="Pulse Social Platform" 
              link="https://capstone-one-dun.vercel.app"
            />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>07</h3>
                <div>
                  <h4>Spendify</h4>
                  <p>Interactive Spending Game</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>HTML, CSS, JavaScript, Neal.fun Inspired, Invoice Features</p>
            </div>
            <WorkImage 
              image="/images/spendify.png" 
              alt="Spendify Spending Game" 
              link="https://spendify-zeta.vercel.app/"
            />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>08</h3>
                <div>
                  <h4>Doxcer</h4>
                  <p>AI Code Documentation Tool</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Python, Tkinter GUI, API-Powered, Word Document Output</p>
            </div>
            <WorkImage 
              image="/images/docxer.png" 
              alt="Doxcer Code Documentation Tool" 
              link="https://github.com/muhammadhaseebiqbal-dev/Docxer/releases"
            />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>09</h3>
                <div>
                  <h4>TaskFlow</h4>
                  <p>Simple Todo Application</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>HTML, CSS, JavaScript, Clean UI, Task Management</p>
            </div>
            <WorkImage 
              image="/images/taskflow.png" 
              alt="TaskFlow Todo Application" 
              link="https://task-flow-dusky.vercel.app/"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;

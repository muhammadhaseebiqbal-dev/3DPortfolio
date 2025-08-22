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
    <section className="work-section" id="work" role="main" aria-labelledby="work-main-heading" itemScope itemType="https://schema.org/CreativeWork">
      <div className="work-container section-container">
        <h2 id="work-main-heading">
          My <span>Work</span>
        </h2>
        <div className="work-flex" role="region" aria-label="Portfolio projects showcase">
          <div className="work-box" itemScope itemType="https://schema.org/SoftwareApplication">
            <div className="work-info">
              <div className="work-title">
                <h3>01</h3>
                <div>
                  <h4 itemProp="name">3D Resume Website</h4>
                  <p itemProp="description">Interactive Web Experience</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p itemProp="programmingLanguage">React, TypeScript, Three.js, GSAP, WebGL</p>
              <meta itemProp="url" content="https://www.haseebiqbal.site/" />
              <meta itemProp="author" content="Muhammad Haseeb Iqbal" />
              <meta itemProp="applicationCategory" content="WebApplication" />
            </div>
            <WorkImage 
              image="/images/3D_resume.png" 
              alt="3D Resume Website by Muhammad Haseeb Iqbal - Interactive Portfolio" 
              link="https://www.haseebiqbal.site/"
            />
          </div>
          <div className="work-box" itemScope itemType="https://schema.org/SoftwareApplication">
            <div className="work-info">
              <div className="work-title">
                <h3>02</h3>
                <div>
                  <h4 itemProp="name">Resume Analyzer</h4>
                  <p itemProp="description">MERN Stack Application</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p itemProp="programmingLanguage">MongoDB, Express.js, React, Node.js, AI Analysis</p>
              <meta itemProp="author" content="Muhammad Haseeb Iqbal" />
              <meta itemProp="applicationCategory" content="WebApplication" />
            </div>
            <WorkImage 
              image="/images/Resumepie.png" 
              alt="Resume Analyzer by Muhammad Haseeb Iqbal - AI-Powered MERN Stack App" 
              comingSoon={true}
            />
          </div>
          <div className="work-box" itemScope itemType="https://schema.org/SoftwareApplication">
            <div className="work-info">
              <div className="work-title">
                <h3>03</h3>
                <div>
                  <h4 itemProp="name">DopeShell</h4>
                  <p itemProp="description">Custom Shell Application</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p itemProp="programmingLanguage">Python, AI-Powered, Cross-platform, Lightweight, Custom Commands</p>
              <meta itemProp="url" content="https://github.com/muhammadhaseebiqbal-dev/DopeShell" />
              <meta itemProp="author" content="Muhammad Haseeb Iqbal" />
              <meta itemProp="applicationCategory" content="DeveloperApplication" />
            </div>
            <WorkImage 
              image="/images/dopeshell.png" 
              alt="DopeShell by Muhammad Haseeb Iqbal - AI-Powered Custom Shell" 
              link="https://github.com/muhammadhaseebiqbal-dev/DopeShell"
            />
          </div>
          <div className="work-box" itemScope itemType="https://schema.org/SoftwareApplication">
            <div className="work-info">
              <div className="work-title">
                <h3>04</h3>
                <div>
                  <h4 itemProp="name">FylFly</h4>
                  <p itemProp="description">File Storage Platform</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p itemProp="programmingLanguage">Next.js, Go, File API, Unlimited Storage, Direct Downloads</p>
              <meta itemProp="url" content="https://fylfly.vercel.app/" />
              <meta itemProp="author" content="Muhammad Haseeb Iqbal" />
              <meta itemProp="applicationCategory" content="WebApplication" />
            </div>
            <WorkImage 
              image="/images/fylfly.png" 
              alt="FylFly by Muhammad Haseeb Iqbal - File Storage Platform with Go Backend" 
              link="https://fylfly.vercel.app/"
            />
          </div>
          <div className="work-box" itemScope itemType="https://schema.org/SoftwareApplication">
            <div className="work-info">
              <div className="work-title">
                <h3>05</h3>
                <div>
                  <h4 itemProp="name">Conway's Game of Life</h4>
                  <p itemProp="description">Interactive Simulation</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p itemProp="programmingLanguage">HTML, CSS, JavaScript, Beautiful Design, Customizable</p>
              <meta itemProp="url" content="https://conways-game-of-life-tawny.vercel.app/" />
              <meta itemProp="author" content="Muhammad Haseeb Iqbal" />
              <meta itemProp="applicationCategory" content="GameApplication" />
            </div>
            <WorkImage 
              image="/images/conways.png" 
              alt="Conway's Game of Life by Muhammad Haseeb Iqbal - Interactive JavaScript Simulation" 
              link="https://conways-game-of-life-tawny.vercel.app/"
            />
          </div>
          <div className="work-box" itemScope itemType="https://schema.org/SoftwareApplication">
            <div className="work-info">
              <div className="work-title">
                <h3>06</h3>
                <div>
                  <h4 itemProp="name">Pulse</h4>
                  <p itemProp="description">Social Media Platform</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p itemProp="programmingLanguage">React, Vite, Social Features, Post & Comment System</p>
              <meta itemProp="url" content="https://capstone-one-dun.vercel.app" />
              <meta itemProp="author" content="Muhammad Haseeb Iqbal" />
              <meta itemProp="applicationCategory" content="SocialNetworkingApplication" />
            </div>
            <WorkImage 
              image="/images/capstone.png" 
              alt="Pulse Social Media Platform by Muhammad Haseeb Iqbal - React Application" 
              link="https://capstone-one-dun.vercel.app"
            />
          </div>
          <div className="work-box" itemScope itemType="https://schema.org/SoftwareApplication">
            <div className="work-info">
              <div className="work-title">
                <h3>07</h3>
                <div>
                  <h4 itemProp="name">Spendify</h4>
                  <p itemProp="description">Interactive Spending Game</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p itemProp="programmingLanguage">HTML, CSS, JavaScript, Neal.fun Inspired, Invoice Features</p>
              <meta itemProp="url" content="https://spendify-zeta.vercel.app/" />
              <meta itemProp="author" content="Muhammad Haseeb Iqbal" />
              <meta itemProp="applicationCategory" content="GameApplication" />
            </div>
            <WorkImage 
              image="/images/spendify.png" 
              alt="Spendify Interactive Game by Muhammad Haseeb Iqbal - JavaScript Web Game" 
              link="https://spendify-zeta.vercel.app/"
            />
          </div>
          <div className="work-box" itemScope itemType="https://schema.org/SoftwareApplication">
            <div className="work-info">
              <div className="work-title">
                <h3>08</h3>
                <div>
                  <h4 itemProp="name">Doxcer</h4>
                  <p itemProp="description">AI Code Documentation Tool</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p itemProp="programmingLanguage">Python, Tkinter GUI, API-Powered, Word Document Output</p>
              <meta itemProp="url" content="https://github.com/muhammadhaseebiqbal-dev/Docxer/releases" />
              <meta itemProp="author" content="Muhammad Haseeb Iqbal" />
              <meta itemProp="applicationCategory" content="DeveloperApplication" />
            </div>
            <WorkImage 
              image="/images/docxer.png" 
              alt="Doxcer AI Documentation Tool by Muhammad Haseeb Iqbal - Python Application" 
              link="https://github.com/muhammadhaseebiqbal-dev/Docxer/releases"
            />
          </div>
          <div className="work-box" itemScope itemType="https://schema.org/SoftwareApplication">
            <div className="work-info">
              <div className="work-title">
                <h3>09</h3>
                <div>
                  <h4 itemProp="name">TaskFlow</h4>
                  <p itemProp="description">Simple Todo Application</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p itemProp="programmingLanguage">HTML, CSS, JavaScript, Clean UI, Task Management</p>
              <meta itemProp="url" content="https://task-flow-dusky.vercel.app/" />
              <meta itemProp="author" content="Muhammad Haseeb Iqbal" />
              <meta itemProp="applicationCategory" content="WebApplication" />
            </div>
            <WorkImage 
              image="/images/taskflow.png" 
              alt="TaskFlow Todo App by Muhammad Haseeb Iqbal - JavaScript Task Management" 
              link="https://task-flow-dusky.vercel.app/"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;

import { lazy, PropsWithChildren, Suspense, useEffect, useState } from "react";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import setSplitText from "./utils/splitText";

// Lazy load heavy components
const About = lazy(() => import("./About"));
const Career = lazy(() => import("./Career"));
const Contact = lazy(() => import("./Contact"));
const SocialIcons = lazy(() => import("./SocialIcons"));
const WhatIDo = lazy(() => import("./WhatIDo"));
const Work = lazy(() => import("./Work"));
const TechStack = lazy(() => import("./TechStack"));

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isDesktopView]);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <Suspense fallback={<div className="loading-placeholder">Loading...</div>}>
        <SocialIcons />
      </Suspense>
      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="container-main" role="main">
            <Landing>{!isDesktopView && children}</Landing>
            <section id="about" aria-label="About Muhammad Haseeb Iqbal">
              <Suspense fallback={<div className="loading-placeholder">Loading About...</div>}>
                <About />
              </Suspense>
            </section>
            <section id="services" aria-label="What I Do - Services">
              <Suspense fallback={<div className="loading-placeholder">Loading Services...</div>}>
                <WhatIDo />
              </Suspense>
            </section>
            <section id="career" aria-label="Career and Experience">
              <Suspense fallback={<div className="loading-placeholder">Loading Career...</div>}>
                <Career />
              </Suspense>
            </section>
            <section id="portfolio" aria-label="My Work Portfolio">
              <Suspense fallback={<div className="loading-placeholder">Loading Portfolio...</div>}>
                <Work />
              </Suspense>
            </section>
            {isDesktopView && (
              <Suspense fallback={<div className="loading-placeholder">Loading Tech Stack...</div>}>
                <section id="tech-stack" aria-label="Technology Stack">
                  <TechStack />
                </section>
              </Suspense>
            )}
            <section id="contact" aria-label="Contact Information">
              <Suspense fallback={<div className="loading-placeholder">Loading Contact...</div>}>
                <Contact />
              </Suspense>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;

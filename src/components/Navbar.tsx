import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);

// Alternative to ScrollSmoother - simple smooth scroll implementation
export let smoother = {
  paused: (paused?: boolean) => {
    if (paused !== undefined) {
      document.body.style.overflow = paused ? 'hidden' : 'auto';
    }
  },
  scrollTo: (target: string, smooth: boolean = true, position: string = "top") => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ 
        behavior: smooth ? 'smooth' : 'auto',
        block: position.includes('top') ? 'start' : 'end'
      });
    }
  },
  scrollTop: (value: number) => {
    window.scrollTo({ top: value, behavior: 'smooth' });
  }
};

const Navbar = () => {
  useEffect(() => {
    // Initialize smooth scroll behavior
    smoother.scrollTop(0);
    smoother.paused(true);

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          if (section) {
            smoother.scrollTo(section, true, "top");
          }
        }
      });
    });
    window.addEventListener("resize", () => {
      ScrollTrigger.refresh();
    });
  }, []);
  return (
    <>
      <header className="header" role="banner">
        <a href="/#" className="navbar-title" data-cursor="disable" aria-label="Home - Muhammad Haseeb Iqbal Portfolio">
          haseeb.dev
        </a>
        <a
          href="mailto:muhammadhaseebiqbal.official@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
          aria-label="Contact Muhammad Haseeb Iqbal via email"
        >
          muhammadhaseebiqbal.official@gmail.com
        </a>
        <nav role="navigation" aria-label="Main navigation">
          <ul>
            <li>
              <a data-href="#about" href="#about" aria-label="About section">
                <HoverLinks text="ABOUT" />
              </a>
            </li>
            <li>
              <a data-href="#work" href="#work" aria-label="Work portfolio section">
                <HoverLinks text="WORK" />
              </a>
            </li>
            <li>
              <a data-href="#contact" href="#contact" aria-label="Contact section">
                <HoverLinks text="CONTACT" />
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="landing-circle1" aria-hidden="true"></div>
      <div className="landing-circle2" aria-hidden="true"></div>
      <div className="nav-fade" aria-hidden="true"></div>
    </>
  );
};

export default Navbar;

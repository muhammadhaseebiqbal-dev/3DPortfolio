import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

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
          smoother.scrollTo(section, true, "top top");
        }
      });
    });
    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
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

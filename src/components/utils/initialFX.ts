import gsap from "gsap";
import { smoother } from "../Navbar";

// Alternative to SplitText - splits text into characters manually
function splitTextToChars(selector: string): HTMLElement[] {
  const elements = document.querySelectorAll(selector);
  const chars: HTMLElement[] = [];
  
  elements.forEach((element) => {
    const text = element.textContent || '';
    element.innerHTML = '';
    
    text.split('').forEach((char) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char; // Use non-breaking space
      span.style.display = 'inline-block';
      element.appendChild(span);
      chars.push(span);
    });
  });
  
  return chars;
}

export function initialFX() {
  document.body.style.overflowY = "auto";
  if (smoother) smoother.paused(false);
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  // Split and animate landing text
  const landingChars = splitTextToChars(".landing-info h3, .landing-intro h2, .landing-intro h1");
  gsap.fromTo(
    landingChars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  // Split and animate h2 info text
  const landingH2Chars = splitTextToChars(".landing-h2-info");
  gsap.fromTo(
    landingH2Chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  // Create looping text animations
  const landingH2Info1Chars = splitTextToChars(".landing-h2-info-1");
  const landingH21Chars = splitTextToChars(".landing-h2-1");
  const landingH22Chars = splitTextToChars(".landing-h2-2");

  LoopText(landingH2Chars, landingH2Info1Chars);
  LoopText(landingH21Chars, landingH22Chars);
}

function LoopText(Text1Chars: HTMLElement[], Text2Chars: HTMLElement[]) {
  var tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const delay = 4;
  const delay2 = delay * 2 + 1;

  tl.fromTo(
    Text2Chars,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power3.inOut",
      y: 0,
      stagger: 0.1,
      delay: delay,
    },
    0
  )
    .fromTo(
      Text1Chars,
      { y: 80 },
      {
        duration: 1.2,
        ease: "power3.inOut",
        y: 0,
        stagger: 0.1,
        delay: delay2,
      },
      1
    )
    .fromTo(
      Text1Chars,
      { y: 0 },
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay,
      },
      0
    )
    .to(
      Text2Chars,
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay2,
      },
      1
    );
}

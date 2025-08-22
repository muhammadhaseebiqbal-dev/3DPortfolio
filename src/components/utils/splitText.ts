import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ParaElement extends HTMLElement {
  anim?: gsap.core.Animation;
  splitWords?: HTMLElement[];
  splitChars?: HTMLElement[];
}

gsap.registerPlugin(ScrollTrigger);

// Alternative to SplitText - splits text into words and characters manually
function splitTextToWords(element: HTMLElement): HTMLElement[] {
  const text = element.textContent || '';
  const words: HTMLElement[] = [];
  element.innerHTML = '';
  
  text.split(' ').forEach((word, index) => {
    const span = document.createElement('span');
    span.textContent = word;
    span.style.display = 'inline-block';
    span.style.marginRight = '0.25em';
    if (index === 0) span.style.marginLeft = '0';
    element.appendChild(span);
    words.push(span);
  });
  
  return words;
}

function splitTextToChars(element: HTMLElement): HTMLElement[] {
  const text = element.textContent || '';
  const chars: HTMLElement[] = [];
  element.innerHTML = '';
  
  text.split('').forEach((char) => {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\u00A0' : char;
    span.style.display = 'inline-block';
    element.appendChild(span);
    chars.push(span);
  });
  
  return chars;
}

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });
  if (window.innerWidth < 900) return;
  const paras: NodeListOf<ParaElement> = document.querySelectorAll(".para");
  const titles: NodeListOf<ParaElement> = document.querySelectorAll(".title");

  const TriggerStart = window.innerWidth <= 1024 ? "top 60%" : "20% 60%";
  const ToggleAction = "play pause resume reverse";

  paras.forEach((para: ParaElement) => {
    para.classList.add("visible");
    if (para.anim) {
      para.anim.progress(1).kill();
      // Revert to original text
      if (para.splitWords) {
        const originalText = para.splitWords.map(word => word.textContent).join(' ');
        para.innerHTML = originalText;
      }
    }

    para.splitWords = splitTextToWords(para);

    para.anim = gsap.fromTo(
      para.splitWords,
      { autoAlpha: 0, y: 80 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: para.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
        duration: 1,
        ease: "power3.out",
        y: 0,
        stagger: 0.02,
      }
    );
  });
  
  titles.forEach((title: ParaElement) => {
    if (title.anim) {
      title.anim.progress(1).kill();
      // Revert to original text
      if (title.splitChars) {
        const originalText = title.splitChars.map(char => char.textContent).join('');
        title.innerHTML = originalText;
      }
    }
    
    title.splitChars = splitTextToChars(title);
    
    title.anim = gsap.fromTo(
      title.splitChars,
      { autoAlpha: 0, y: 80, rotate: 10 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: title.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
        duration: 0.8,
        ease: "power2.inOut",
        y: 0,
        rotate: 0,
        stagger: 0.03,
      }
    );
  });

  ScrollTrigger.addEventListener("refresh", () => setSplitText());
}

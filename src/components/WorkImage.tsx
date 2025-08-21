import { useState, useCallback, useRef, useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
  comingSoon?: boolean;
}

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(img);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    observer.observe(img);

    return () => {
      observer.unobserve(img);
    };
  }, []);

  const handleMouseEnter = useCallback(async () => {
    if (props.video && isLoaded) {
      setIsVideo(true);
      try {
        const response = await fetch(`src/assets/${props.video}`);
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);
        setVideo(blobUrl);
      } catch (error) {
        console.error('Failed to load video:', error);
      }
    }
  }, [props.video, isLoaded]);

  const handleImageLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsVideo(false);
    if (video) {
      URL.revokeObjectURL(video);
      setVideo("");
    }
  }, [video]);

  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={props.link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor={"disable"}
        aria-label={props.alt || "Project image"}
      >
        {props.link && (
          <div className="work-link">
            <MdArrowOutward aria-hidden="true" />
          </div>
        )}
        {props.comingSoon && (
          <div className="work-link coming-soon">
            COMING SOON
          </div>
        )}
        <img 
          ref={imgRef}
          src={isInView ? props.image : undefined}
          alt={props.alt} 
          loading="lazy"
          decoding="async"
          onLoad={handleImageLoad}
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out'
          }}
        />
        {isVideo && (
          <video 
            src={video} 
            autoPlay 
            muted 
            playsInline 
            loop
            preload="none"
          />
        )}
      </a>
    </div>
  );
};

export default WorkImage;

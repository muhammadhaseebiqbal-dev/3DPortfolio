import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Creative Developer</h4>
                <h5>Freelance</h5>
              </div>
              <h3>2022 - NOW</h3>
            </div>
            <p>
              Working as a freelance creative developer since 2022, specializing in 
              innovative web applications, 3D interactive experiences, and AI-powered 
              solutions. Combining technical expertise with creative vision to deliver 
              unique digital experiences for clients worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

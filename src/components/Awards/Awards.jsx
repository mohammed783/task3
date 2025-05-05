import  { useState, useEffect } from "react";
import './Awards.css';

const awards = [
  {
    title: "Outstanding Early Childhood Education Award",
    description:
      "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.",
    icon: "🕒",
  },
  {
    title: "Innovative STEAM Education Award",
    description:
      "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.",
    icon: "📊",
  },
  {
    title: "Environmental Stewardship Award",
    description:
      "Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students.",
    icon: "⚡",
  },
];

function AwardsSlider() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleCount = isMobile ? 1 : 3;

  const handlePrev = () => {
    setCurrent((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrent((prev) => Math.min(prev + 1, awards.length - visibleCount));
  };

  return (
    <div className="awards-container">
      <h2 className="awards-title">Our Awards and Recognitions</h2>
      <p className="awards-subtitle">
        Little Learners Academy takes pride in our commitment to delivering
        high-quality education and outstanding student experiences.
      </p>

      <div className={`slider ${isMobile ? "mobile" : ""}`}>
        <div className="slides">
          {awards.slice(current, current + visibleCount).map((award, index) => (
            <div className="award-card" key={index}>
              <div className="award-icon">{award.icon}</div>
              <h3>{award.title}</h3>
              <p>{award.description}</p>
            </div>
          ))}
        </div>

        <div className="nav-buttons">
          <button className="nav-btn" onClick={handlePrev}>
            ←
          </button>
          <button className="nav-btn" onClick={handleNext}>
            →
          </button>
        </div>
      </div>
    </div>
  );
}

export default AwardsSlider;

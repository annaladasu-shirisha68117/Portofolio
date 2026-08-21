import React, { useEffect, useState } from "react";
import "./PageLoader.css";

const PageLoader = ({ onComplete }) => {
  const [showLoader, setShowLoader] = useState(true);
  const [startAnimation, setStartAnimation] = useState(false);
  const [glitter, setGlitter] = useState([]);

  useEffect(() => {
    // Create glitter particles
    const particles = Array.from({ length: 180 }, (_, index) => ({
      id: index,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 5 + 2,
      delay: Math.random() * 1.5,
      duration: Math.random() * 2 + 1,
    }));

    setGlitter(particles);

    // Start feather animation
    const animationTimer = setTimeout(() => {
      setStartAnimation(true);
    }, 300);

    // Finish loader
    const finishTimer = setTimeout(() => {
      setShowLoader(false);

      if (onComplete) {
        onComplete();
      }
    }, 5000);

    return () => {
      clearTimeout(animationTimer);
      clearTimeout(finishTimer);
    };
  }, [onComplete]);

  if (!showLoader) {
    return null;
  }

  return (
    <div className={`page-loader ${startAnimation ? "animate" : ""}`}>
      {/* Dark background */}
      <div className="loader-background" />

      {/* Glitter */}
      <div className="glitter-container">
        {glitter.map((particle) => (
          <span
            key={particle.id}
            className="glitter"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Feather */}
      <div className="feather-container">
       <img
  src="/Images/peacock-feather.jpeg"
  alt="Peacock Feather"
  className="feather"
/>
      </div>

      {/* Center text */}
      <div className="loader-text">
        <span>WELCOME</span>
      </div>
    </div>
  );
};

export default PageLoader;
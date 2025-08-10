import { useEffect, useRef, useState } from "react";
import "./carousel.css";

export default function Carousel({
  items,
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  const goToSlide = (index) => {
    if (!loop) {
      if (index < 0 || index >= items.length) return;
    }
    setCurrentIndex(loop ? index % items.length : index);
  };

  const nextSlide = () => {
    goToSlide(currentIndex + 1);
  };

  const prevSlide = () => {
    goToSlide(currentIndex - 1);
  };

  useEffect(() => {
    if (autoplay) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, autoplayDelay);
      return () => clearInterval(intervalRef.current);
    }
  }, [currentIndex, autoplay]);

  const handleMouseEnter = () => {
    if (pauseOnHover && autoplay) clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    if (pauseOnHover && autoplay) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, autoplayDelay);
    }
  };

  return (
    <div
      className="carousel-container"
      style={{ width: `${baseWidth}px` }}
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="carousel-track"
        style={{
          width: `${items.length * 100}%`,
          transform: `translateX(-${(100 / items.length) * currentIndex}%)`,
        }}
      >
        {items.map((item, index) => (
          <div
            className="carousel-item"
            key={index}
            style={{ width: `${100 / items.length}%` }}
          >
            {item.icon}
          </div>
        ))}
      </div>

      {/* Dot Indicators */}
      <div className="carousel-indicators">
        {items.map((_, index) => (
          <span
            key={index}
            className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}

import React, { useEffect, useRef } from "react";
import "./roa.css"; // Assuming the CSS is adapted for React

const CircularTextRotation = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const rotateText = (event) => {
      const rect = ref.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const angle =
        Math.atan2(y - rect.height / 2, x - rect.width / 2) * (180 / Math.PI);
      ref.current.style.transform = `rotate(${angle}deg)`;
    };

    document.addEventListener("mousemove", rotateText);

    return () => {
      document.removeEventListener("mousemove", rotateText);
    };
  }, []);

  return (
    <div ref={ref} className="text-container">
      {children}
    </div>
  );
};

export default CircularTextRotation;

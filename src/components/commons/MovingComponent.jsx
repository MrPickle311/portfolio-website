import React, { useState, useRef, useEffect } from "react";

const MovingComponent = () => {
  const [top, setTop] = useState(0);
  const movingRef = useRef(null);

  const handleClick = () => {
    setTop((prevTop) => prevTop + 25);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Position:", movingRef.current.getBoundingClientRect().top);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={movingRef}
      style={{
        position: "relative",
        top: `${top}px`,
        transition: "top 0.5s ease",
      }}
      onClick={handleClick}
    >
      Moving component
    </div>
  );
};

export default MovingComponent;

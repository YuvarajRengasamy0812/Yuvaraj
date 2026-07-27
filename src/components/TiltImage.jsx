import { useState } from "react";

export default function TiltImage({ src, alt, className = "" }) {
  const [style, setStyle] = useState({});

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 18;
    const rotateX = ((0.5 - y / rect.height)) * 18;
    setStyle({ transform: `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)` });
  };

  return (
    <div className={`tilt-card ${className}`} onMouseMove={handleMove} onMouseLeave={() => setStyle({})} style={style}>
      <img src={src} alt={alt} />
    </div>
  );
}
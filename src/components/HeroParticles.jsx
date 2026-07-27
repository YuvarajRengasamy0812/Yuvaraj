const particles = Array.from({ length: 38 }, (_, index) => ({
  left: `${(index * 29) % 100}%`,
  top: `${(index * 47) % 100}%`,
  delay: `${(index % 9) * 0.4}s`,
  size: `${5 + (index % 5) * 3}px`,
}));

export default function HeroParticles() {
  return (
    <div className="hero-particles" aria-hidden="true">
      {particles.map((particle, index) => (
        <span key={index} style={{ left: particle.left, top: particle.top, animationDelay: particle.delay, width: particle.size, height: particle.size }} />
      ))}
    </div>
  );
}
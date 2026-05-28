export function ParallaxBackground({ scrollY }) {
  return (
    <div
      className="fixed inset-0 opacity-10 pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at ${50 + Math.sin(scrollY * 0.002) * 30}% ${30 + Math.cos(scrollY * 0.003) * 20}%, rgba(0, 206, 209, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse at ${50 + Math.cos(scrollY * 0.0015) * 25}% ${70 + Math.sin(scrollY * 0.0025) * 15}%, rgba(0, 206, 209, 0.2) 0%, transparent 60%)
          `,
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />
    </div>
  );
}

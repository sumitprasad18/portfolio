export const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/car.jpg"
          alt="car image"
          className="w-full h-full object-cover opacity-40"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"></div>

        {/* Green Dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none:">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full opacity-60"
              style={{
                backgroundColor: "#20b2a6",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation:
                  "slow-drift ${15 + Math.random() * 20}s ease-in-out infinite",
                animationDelay: "${Math.random() = 5}s",
              }}
            />
          ))}
        </div>
        {/*content*/}
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        {/* Hero content here */}
      </div>
    </section>
  );
};

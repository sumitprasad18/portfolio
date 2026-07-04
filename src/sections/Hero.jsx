import { ArrowRight , Download} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

export const Hero = () => {
  const dots = Array.from({ length: 30 }, () => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: `${15 + Math.random() * 20}s`,
    delay: `${Math.random() * 5}s`,
  }));

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/car.jpg"
          alt="car"
          className="w-full h-full object-cover opacity-40"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/70 to-black" />

        {/* Floating Dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {dots.map((dot, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full opacity-60 bg-teal-400 animate-pulse"
              style={{
                left: dot.left,
                top: dot.top,
                animationDuration: dot.duration,
                animationDelay: dot.delay,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Side */}
          <div className="space-y-8 text-white">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-sm text-teal-400">
              <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
              Software Engineer • FullStack
            </span>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                Crafting <span className="text-teal-400">Digital</span>
                <br />
                Experiences with
                <br />
                <span className="font-serif italic font-normal">precision</span>
              </h1>

              <p className="text-lg text-gray-300 max-w-lg">
                I’m Sumit Prasad, a software engineer focused on full-stack
                development and scalable digital solutions. I build clean,
                efficient, and user-centric applications while exploring AI and
                emerging technologies.
              </p>
            </div>

            {/* CTA */}
            <button className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              Contact Me
              <ArrowRight className="w-5 h-5" />
            </button>
            <AnimatedBorderButton>
              <Download className="w-5 h-5" />
              Download CV
            </AnimatedBorderButton>
          </div>
          {/*social links*/}
          <div>
            
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-80 h-80 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-gray-300">
              Add Image / Card Here
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

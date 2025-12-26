import { BookOpen } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-gradient min-h-[50vh] flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Logo */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 mb-8 opacity-0 animate-fade-in">
          <BookOpen className="w-8 h-8 text-accent" />
        </div>

        {/* Title */}
        <h1 
          className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-gradient mb-6 opacity-0 animate-fade-in"
          style={{ animationDelay: "100ms" }}
        >
          Good Reads
        </h1>

        {/* Subtitle */}
        <p 
          className="text-xl sm:text-2xl text-hero-foreground/80 font-light opacity-0 animate-fade-in"
          style={{ animationDelay: "200ms" }}
        >
          Meet Your Next Favourite Book
        </p>

        {/* Decorative line */}
        <div 
          className="mt-10 w-24 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto opacity-0 animate-fade-in"
          style={{ animationDelay: "300ms" }}
        />
      </div>
    </section>
  );
};

export default Hero;

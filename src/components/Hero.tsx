import { Button } from "@/components/ui/button";
import { ArrowDown, BookOpen, Heart } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Christian ministry and reflection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 via-primary/70 to-primary-dark/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground/10 backdrop-blur-sm rounded-full mb-6">
            <Heart className="w-8 h-8 text-primary-foreground" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          Grace <span className="text-accent-red">Gleaned</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Exploring faith, culture, and wisdom through articles, book reviews, and thoughtful commentary. 
          Join me on this journey of discovering God's grace in everyday life.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            <BookOpen className="mr-2 h-5 w-5" />
            Read Latest Articles
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
            About This Ministry
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary-foreground/70 mx-auto" />
        </div>
      </div>
    </section>
  );
};
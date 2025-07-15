import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <Avatar className="w-32 h-32 mx-auto mb-8 ring-4 ring-primary/30 animate-glow">
            <AvatarImage src={profilePhoto} alt="Ryan Geekin" className="object-cover" />
            <AvatarFallback className="text-4xl bg-gradient-to-br from-purple-primary to-purple-secondary text-background">
              RG
            </AvatarFallback>
          </Avatar>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Hi, I'm <span className="text-gradient">Ryan Geekin</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-purple-light mb-8 max-w-2xl mx-auto">
            A Full-stack Developer passionate about creating innovative solutions 
            that make a difference in people's lives
          </p>
          
          <Button 
            onClick={scrollToProjects}
            size="lg"
            className="animate-scale-in glow-hover bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg"
          >
            Explore My Work
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
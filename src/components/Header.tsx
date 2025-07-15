import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Header = () => {
  const handleDownloadCV = () => {
    // Create a sample CV download link
    const link = document.createElement('a');
    link.href = '/sample-cv.pdf'; // You can replace this with your actual CV file
    link.download = 'Ryan_Geekin_CV.pdf';
    link.click();
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gradient">
            Ryan Geekin
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
            <Button 
              onClick={handleDownloadCV}
              variant="outline"
              className="glow-hover"
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </div>

          <div className="md:hidden">
            <Button 
              onClick={handleDownloadCV}
              variant="outline"
              size="sm"
            >
              <Download className="w-4 h-4" />
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
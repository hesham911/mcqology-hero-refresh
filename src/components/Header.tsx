import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 md:px-6 py-2 md:py-4">
        <div className="flex items-center justify-between md:justify-between">
          {/* Logo - Centered on mobile, left on desktop */}
          <div className="flex items-center md:flex-none absolute left-1/2 transform -translate-x-1/2 md:relative md:left-auto md:transform-none">
            <img src="/lovable-uploads/7fee58d2-510d-45f7-9b20-fa94ba74047b.png" alt="McQology Logo" className="h-6 md:h-10 w-auto" />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-medical-green transition-colors" onClick={(e) => {
              e.preventDefault();
              document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Home
            </a>
            <a href="#years" className="text-foreground hover:text-medical-green transition-colors" onClick={(e) => {
              e.preventDefault();
              document.getElementById('years')?.scrollIntoView({ behavior: 'smooth' });
            }}>Years</a>
            
            <a href="#about" className="text-foreground hover:text-medical-green transition-colors" onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              About Us
            </a>
            <a href="#contact" className="text-foreground hover:text-medical-green transition-colors" onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Contact Us
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button variant="medical" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-medical-green transition-colors relative z-10"
            aria-label="Navigation menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 pt-4">
              <a href="#home" className="text-foreground hover:text-medical-green transition-colors py-2" onClick={(e) => {
                e.preventDefault();
                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}>
                Home
              </a>
              <a href="#years" className="text-foreground hover:text-medical-green transition-colors py-2" onClick={(e) => {
                e.preventDefault();
                document.getElementById('years')?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}>
                Years
              </a>
              <a href="#about" className="text-foreground hover:text-medical-green transition-colors py-2" onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}>
                About Us
              </a>
              <a href="#contact" className="text-foreground hover:text-medical-green transition-colors py-2" onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}>
                Contact Us
              </a>
              <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                <Button variant="outline" size="sm" className="w-full">
                  Sign In
                </Button>
                <Button variant="medical" size="sm" className="w-full">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>;
};
export default Header;
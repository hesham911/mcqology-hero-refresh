import { useState } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  isYearPage?: boolean;
}

const Header = ({ isYearPage = false }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 md:px-6 py-2 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/lovable-uploads/7fee58d2-510d-45f7-9b20-fa94ba74047b.png" alt="McQology Logo" className="h-6 md:h-10 w-auto" />
          </div>
          
          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href={isYearPage ? "/year" : "/"} className="text-foreground hover:text-primary transition-colors font-medium">Home</a>
            {!isYearPage && <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium" onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}>About Us</a>}
            {isYearPage && <a href="#universities" className="text-foreground hover:text-primary transition-colors font-medium" onClick={(e) => {
              e.preventDefault();
              scrollToSection('universities');
            }}>Universities</a>}
            {!isYearPage && <a href="#team" className="text-foreground hover:text-primary transition-colors font-medium" onClick={(e) => {
              e.preventDefault();
              scrollToSection('team');
            }}>Team</a>}
            {!isYearPage && <a href="#features" className="text-foreground hover:text-primary transition-colors font-medium" onClick={(e) => {
              e.preventDefault();
              scrollToSection('features');
            }}>Features</a>}
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium" onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}>Contact</a>
          </nav>

          {/* CTA Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-foreground hover:text-primary transition-colors font-medium">
              Sign In
            </button>
            <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
              {isYearPage ? "Join Now" : "Get Started"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors relative z-10"
            aria-label="Navigation menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-6 mb-8">
              <a 
                href={isYearPage ? "/year" : "/"} 
                className="text-foreground hover:text-primary transition-colors font-medium text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              {!isYearPage && (
                <a 
                  href="#about" 
                  className="text-foreground hover:text-primary transition-colors font-medium text-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('about');
                    setIsMenuOpen(false);
                  }}
                >
                  About Us
                </a>
              )}
              {isYearPage && (
                <a 
                  href="#universities" 
                  className="text-foreground hover:text-primary transition-colors font-medium text-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('universities');
                    setIsMenuOpen(false);
                  }}
                >
                  Universities
                </a>
              )}
              {!isYearPage && (
                <a 
                  href="#team" 
                  className="text-foreground hover:text-primary transition-colors font-medium text-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('team');
                    setIsMenuOpen(false);
                  }}
                >
                  Team
                </a>
              )}
              {!isYearPage && (
                <a 
                  href="#features" 
                  className="text-foreground hover:text-primary transition-colors font-medium text-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('features');
                    setIsMenuOpen(false);
                  }}
                >
                  Features
                </a>
              )}
              <a 
                href="#contact" 
                className="text-foreground hover:text-primary transition-colors font-medium text-lg"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                  setIsMenuOpen(false);
                }}
              >
                Contact
              </a>
            </nav>

            <div className="flex flex-col space-y-4">
              <button className="text-foreground hover:text-primary transition-colors font-medium text-lg">
                Sign In
              </button>
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                {isYearPage ? "Join Now" : "Get Started"}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
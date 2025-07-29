import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50" dir="rtl">
      <div className="container mx-auto px-4 md:px-6 py-2 md:py-4">
        <div className="flex items-center justify-between md:justify-between">
          {/* Logo - Centered on mobile, left on desktop */}
          <div className="flex items-center md:flex-none absolute left-1/2 transform -translate-x-1/2 md:relative md:left-auto md:transform-none">
            <img src="/lovable-uploads/7bfbfef7-3da9-447c-80c5-b6b4691b8917.png" alt="شعار McQology" className="h-6 md:h-10 w-auto" />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            <a href="#home" className="text-foreground hover:text-medical-green transition-colors" onClick={(e) => {
              e.preventDefault();
              document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              الرئيسية
            </a>
            <a href="#qbanks" className="text-foreground hover:text-medical-green transition-colors" onClick={(e) => {
              e.preventDefault();
              document.getElementById('qbanks')?.scrollIntoView({ behavior: 'smooth' });
            }}>الفرقه</a>
            
            <a href="#about" className="text-foreground hover:text-medical-green transition-colors" onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              حولنا
            </a>
            <a href="#contact" className="text-foreground hover:text-medical-green transition-colors" onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              تواصل معنا
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4 space-x-reverse">
            <Button variant="outline" size="sm">
              تسجيل الدخول
            </Button>
            <Button variant="medical" size="sm">
              ابدأ الآن
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-medical-green transition-colors relative z-10"
            aria-label="قائمة التنقل"
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
                الرئيسية
              </a>
              <a href="#qbanks" className="text-foreground hover:text-medical-green transition-colors py-2" onClick={(e) => {
                e.preventDefault();
                document.getElementById('qbanks')?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}>
                الفرقه
              </a>
              <a href="#about" className="text-foreground hover:text-medical-green transition-colors py-2" onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}>
                حولنا
              </a>
              <a href="#contact" className="text-foreground hover:text-medical-green transition-colors py-2" onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}>
                تواصل معنا
              </a>
              <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                <Button variant="outline" size="sm" className="w-full">
                  تسجيل الدخول
                </Button>
                <Button variant="medical" size="sm" className="w-full">
                  ابدأ الآن
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>;
};
export default Header;
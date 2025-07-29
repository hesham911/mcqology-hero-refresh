import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50" dir="rtl">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/540413e5-ab8a-41ea-815e-0c2ea9f5d421.png" 
              alt="شعار McQology" 
              className="h-8 w-auto"
            />
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            <a href="#home" className="text-foreground hover:text-medical-green transition-colors">
              الرئيسية
            </a>
            <a href="#qbanks" className="text-foreground hover:text-medical-green transition-colors">
              بنوك الأسئلة
            </a>
            <a href="#tutorials" className="text-foreground hover:text-medical-green transition-colors">
              الدروس التعليمية
            </a>
            <a href="#about" className="text-foreground hover:text-medical-green transition-colors">
              حولنا
            </a>
            <a href="#contact" className="text-foreground hover:text-medical-green transition-colors">
              تواصل معنا
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4 space-x-reverse">
            <Button variant="outline" size="sm">
              تسجيل الدخول
            </Button>
            <Button variant="medical" size="sm">
              ابدأ الآن
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
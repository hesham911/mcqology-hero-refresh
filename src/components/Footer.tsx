import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
const Footer = () => {
  return <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img src="/lovable-uploads/540413e5-ab8a-41ea-815e-0c2ea9f5d421.png" alt="McQology Logo" className="h-8 w-auto mb-4 brightness-0 invert" />
              <p className="text-primary-foreground/80 leading-relaxed max-w-md">
                Empowering medical students across Jordan with comprehensive MCQ practice. 
                Master every question, excel in every exam.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-medical-green" />
                <span className="text-primary-foreground/80">info@mcqology.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-medical-green" />
                <span className="text-primary-foreground/80">+962 6 XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-medical-green" />
                <span className="text-primary-foreground/80">Amman, Jordan</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-primary-foreground">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-primary-foreground/80 hover:text-medical-green transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#qbanks" className="text-primary-foreground/80 hover:text-medical-green transition-colors">
                  QBanks
                </a>
              </li>
              <li>
                <a href="#features" className="text-primary-foreground/80 hover:text-medical-green transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-medical-green transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-medical-green transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Universities */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-primary-foreground">Universities</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-medical-green transition-colors">
                  Jordan University
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-medical-green transition-colors">
                  Yarmouk University
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-medical-green transition-colors">
                  JUST
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-medical-green transition-colors">
                  Mutah University
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-medical-green transition-colors">
                  Hashemite University
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        

        {/* Social Links & Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-primary-foreground/80 hover:text-medical-green transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-medical-green transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-medical-green transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-medical-green transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          
          <div className="text-primary-foreground/60 text-sm">
            © 2024 McQology. All rights reserved.
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
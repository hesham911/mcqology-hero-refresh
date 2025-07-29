import { Button } from "@/components/ui/button";
import { Play, BookOpen, Users, Trophy } from "lucide-react";
import heroImage from "@/assets/medical-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-background to-medical-teal/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-medical-teal">Master Every</span>
                <br />
                <span className="text-medical-green">MCQ!</span>
                <br />
                <span className="text-foreground">Empower Your Success</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Access thousands of high-quality medical MCQs designed to help you ace your exams. 
                With detailed explanations and personalized performance tracking.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 py-4">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-medical-green" />
                <span className="text-sm font-semibold">10,000+ Questions</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-medical-green" />
                <span className="text-sm font-semibold">5,000+ Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <Trophy className="w-5 h-5 text-medical-green" />
                <span className="text-sm font-semibold">95% Success Rate</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Start Learning Now
                <Play className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Preview QBanks
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-3">Trusted by students from:</p>
              <div className="flex flex-wrap gap-4 text-sm font-medium text-foreground">
                <span>Jordan University</span>
                <span>•</span>
                <span>Yarmouk University</span>
                <span>•</span>
                <span>JUST</span>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img 
                src={heroImage} 
                alt="Medical Education" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-medical-teal/20 to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -right-6 bg-card border border-border rounded-xl p-4 shadow-soft">
              <div className="text-2xl font-bold text-medical-green">95%</div>
              <div className="text-sm text-muted-foreground">Pass Rate</div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-soft">
              <div className="text-2xl font-bold text-medical-teal">10K+</div>
              <div className="text-sm text-muted-foreground">Questions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
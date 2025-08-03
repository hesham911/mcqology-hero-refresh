import { Play } from "lucide-react";

const YearHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        <div 
          className="absolute inset-0 opacity-30 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/lovable-uploads/540413e5-ab8a-41ea-815e-0c2ea9f5d421.png')"
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-foreground to-secondary bg-clip-text text-transparent">
            Welcome to Your
            <span className="block text-accent"> Medical Journey</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Learn how to master medical education with our comprehensive platform. 
            Watch our tutorial to get started with interactive learning.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Start Learning Now
            </button>
            
            <button className="group flex items-center gap-3 bg-background/10 backdrop-blur-sm border border-border hover:bg-background/20 text-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Platform Tutorial
            </button>
          </div>
          
          {/* Platform Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-muted-foreground">Practice Questions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground">Medical Courses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default YearHero;
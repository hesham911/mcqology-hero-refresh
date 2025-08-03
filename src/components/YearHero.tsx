import { Play } from "lucide-react";

const YearHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <iframe 
          className="absolute top-1/2 left-1/2 w-[177.77vh] h-[56.25vw] min-w-full min-h-full"
          style={{ 
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none'
          }}
          src="https://www.youtube.com/embed/bBzfI3CbOvY?autoplay=1&mute=1&loop=1&playlist=bBzfI3CbOvY&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Background Video"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg">
            Welcome to Your
            <span className="block text-white"> Medical Journey</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md">
            Learn how to master medical education with our comprehensive platform. 
            Watch our tutorial to get started with interactive learning.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Start Learning Now
            </button>
            
            <button className="group flex items-center gap-3 bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Platform Tutorial
            </button>
          </div>
          
          {/* Platform Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="group text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in">
              <div className="text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                50K+
              </div>
              <div className="text-white/90 drop-shadow-md font-medium">Practice Questions</div>
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-3 rounded-full"></div>
            </div>
            <div className="group text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                25+
              </div>
              <div className="text-white/90 drop-shadow-md font-medium">Medical Courses</div>
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-3 rounded-full"></div>
            </div>
            <div className="group text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                95%
              </div>
              <div className="text-white/90 drop-shadow-md font-medium">Success Rate</div>
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-3 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={() => {
          const nextSection = document.querySelector('#courses-section');
          nextSection?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center hover:bg-white/10 transition-colors">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default YearHero;
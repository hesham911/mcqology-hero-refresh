import { Button } from "@/components/ui/button";
import { Play, ArrowLeft } from "lucide-react";

const HeroVideo = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0" dir="rtl">
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full bg-gradient-to-br from-medical-teal via-medical-blue to-medical-teal/80">
          {/* Video placeholder - replace with actual video */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-40"></div>
          <div className="absolute inset-0 bg-medical-teal/60"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-4 md:space-y-8">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold font-cairo leading-tight">
            المنصة التعليمية الطبية
            <br />
            <span className="text-medical-green">الرائدة باللغة العربية</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            نقدم لك أحدث الطرق التعليمية والمحتوى الطبي المتخصص لمساعدتك في تحقيق أهدافك الأكاديمية والمهنية
          </p>

          {/* CTA Buttons - Hidden on mobile, shown on desktop */}
          <div className="hidden md:flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-medical-green hover:bg-medical-green/90 text-white px-8 py-4 text-xl font-semibold rounded-full shadow-glow transition-all duration-300 hover:scale-105"
            >
              ابدأ رحلتك الآن
              <ArrowLeft className="w-6 h-6 mr-3" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-medical-teal px-8 py-4 text-xl font-semibold rounded-full backdrop-blur-sm transition-all duration-300"
            >
              <Play className="w-6 h-6 ml-3" />
              شاهد الفيديو التعريفي
            </Button>
          </div>

          {/* Mobile CTA - Single button */}
          <div className="md:hidden pt-4">
            <Button 
              size="lg" 
              className="bg-medical-green hover:bg-medical-green/90 text-white px-6 py-3 text-lg font-semibold rounded-full shadow-glow transition-all duration-300 w-full max-w-xs"
            >
              ابدأ رحلتك الآن
              <ArrowLeft className="w-5 h-5 mr-2" />
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 pt-6 md:pt-12">
            <div className="text-center">
              <div className="text-xl md:text-3xl font-bold text-medical-green">10,000+</div>
              <div className="text-white/80 text-sm md:text-base">سؤال تفاعلي</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-3xl font-bold text-medical-green">5,000+</div>
              <div className="text-white/80 text-sm md:text-base">طالب نشط</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-3xl font-bold text-medical-green">95%</div>
              <div className="text-white/80 text-sm md:text-base">معدل النجاح</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;
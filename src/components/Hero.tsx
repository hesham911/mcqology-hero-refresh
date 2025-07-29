import { Button } from "@/components/ui/button";
import { Play, BookOpen, Users, Trophy } from "lucide-react";
import heroImage from "@/assets/medical-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-background to-medical-teal/5" dir="rtl">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Right Column - Content */}
          <div className="space-y-8 lg:order-2">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-right">
                <span className="text-medical-teal">إتقان كل سؤال</span>
                <br />
                <span className="text-medical-green">MCQ!</span>
                <br />
                <span className="text-foreground">منصة التعليم الطبي الرائدة</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg text-right">
                الوصول إلى آلاف الأسئلة الطبية عالية الجودة المصممة لمساعدتك في النجاح في امتحاناتك.
                مع شروحات مفصلة وتتبع شخصي للأداء.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 py-4 justify-end">
              <div className="flex items-center space-x-2 space-x-reverse">
                <span className="text-sm font-semibold">أسئلة 10,000+</span>
                <BookOpen className="w-5 h-5 text-medical-green" />
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <span className="text-sm font-semibold">طالب 5,000+</span>
                <Users className="w-5 h-5 text-medical-green" />
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <span className="text-sm font-semibold">معدل نجاح 95%</span>
                <Trophy className="w-5 h-5 text-medical-green" />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                ابدأ التعلم الآن
                <Play className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                معاينة بنوك الأسئلة
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-3 text-right">محل ثقة طلاب من:</p>
              <div className="flex flex-wrap gap-4 text-sm font-medium text-foreground justify-end">
                <span>الجامعة الأردنية</span>
                <span>•</span>
                <span>جامعة اليرموك</span>
                <span>•</span>
                <span>جست</span>
              </div>
            </div>
          </div>

          {/* Left Column - Hero Image */}
          <div className="relative lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img 
                src={heroImage} 
                alt="التعليم الطبي" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-medical-teal/20 to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-soft text-right">
              <div className="text-2xl font-bold text-medical-green">95%</div>
              <div className="text-sm text-muted-foreground">معدل النجاح</div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-4 shadow-soft text-right">
              <div className="text-2xl font-bold text-medical-teal">10K+</div>
              <div className="text-sm text-muted-foreground">الأسئلة</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
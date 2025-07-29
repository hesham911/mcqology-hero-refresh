import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Clock, Users, BookOpen } from "lucide-react";

const tutorials = [
  {
    title: "كيفية التسجيل في المنصة",
    description: "دليل شامل للتسجيل وإنشاء حساب جديد في منصة McQology",
    duration: "5:30",
    views: "2,100",
    thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=225&fit=crop&crop=center",
    category: "البداية"
  },
  {
    title: "كيفية اختيار بنك الأسئلة المناسب",
    description: "تعلم كيفية اختيار بنك الأسئلة المناسب لجامعتك ومرحلتك الدراسية",
    duration: "8:15",
    views: "1,850",
    thumbnail: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=225&fit=crop&crop=center",
    category: "بنوك الأسئلة"
  },
  {
    title: "طريقة حل الأسئلة والحصول على النتائج",
    description: "شرح مفصل لطريقة حل الأسئلة وفهم النتائج والإحصائيات",
    duration: "12:45",
    views: "3,200",
    thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=225&fit=crop&crop=center",
    category: "الامتحانات"
  },
  {
    title: "استخدام تقارير الأداء والإحصائيات",
    description: "كيفية قراءة وفهم تقارير الأداء لتحسين درجاتك",
    duration: "10:20",
    views: "1,650",
    thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=225&fit=crop&crop=center",
    category: "التقارير"
  },
  {
    title: "نصائح للمراجعة الفعالة",
    description: "استراتيجيات مدروسة للمراجعة باستخدام أسئلة MCQ",
    duration: "15:30",
    views: "4,100",
    thumbnail: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=400&h=225&fit=crop&crop=center",
    category: "الدراسة"
  },
  {
    title: "مقارنة الأداء مع الزملاء",
    description: "كيفية استخدام ميزة مقارنة الأداء لتحفيز التعلم",
    duration: "7:45",
    views: "1,320",
    thumbnail: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=225&fit=crop&crop=center",
    category: "المقارنة"
  }
];

const VideoTutorials = () => {
  return (
    <section id="tutorials" className="pt-20 pb-20 bg-gradient-to-br from-background via-background to-medical-teal/5" dir="rtl">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            <span className="text-medical-green">دروس فيديو</span> تعليمية
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            تعلم كيفية استخدام منصة McQology بكفاءة من خلال دروسنا التعليمية المفصلة
          </p>
        </div>

        {/* Featured Video */}
        <div className="mb-16">
          <Card className="overflow-hidden shadow-glow border-border/50">
            <div className="grid lg:grid-cols-2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=center"
                  alt="درس مميز"
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <Button size="lg" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30">
                    <Play className="w-6 h-6 mr-2" />
                    شاهد الآن
                  </Button>
                </div>
                <div className="absolute top-4 right-4 bg-medical-green text-white px-3 py-1 rounded-full text-sm font-medium">
                  الأكثر مشاهدة
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  دليل شامل لاستخدام منصة McQology
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  في هذا الفيديو الشامل، ستتعلم جميع أساسيات استخدام منصة McQology من التسجيل 
                  وحتى الحصول على أفضل النتائج في امتحاناتك.
                </p>
                <div className="flex items-center space-x-6 space-x-reverse text-sm text-muted-foreground mb-6">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Clock className="w-4 h-4" />
                    <span>25:45</span>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Users className="w-4 h-4" />
                    <span>12,500 مشاهدة</span>
                  </div>
                </div>
                <Button variant="medical" size="lg" className="w-fit">
                  ابدأ المشاهدة
                  <Play className="w-5 h-5 mr-2" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Tutorial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial, index) => (
            <Card key={index} className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border-border/50 overflow-hidden">
              <div className="relative">
                <img 
                  src={tutorial.thumbnail}
                  alt={tutorial.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30">
                    <Play className="w-4 h-4 mr-2" />
                    شاهد
                  </Button>
                </div>
                <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs">
                  {tutorial.duration}
                </div>
                <div className="absolute top-3 left-3 bg-medical-green text-white px-2 py-1 rounded text-xs">
                  {tutorial.category}
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-foreground group-hover:text-medical-green transition-colors text-right line-clamp-2">
                  {tutorial.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3 text-right">
                  {tutorial.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center space-x-1 space-x-reverse">
                    <Users className="w-3 h-3" />
                    <span>{tutorial.views}</span>
                  </div>
                  <Button variant="outline" size="sm">
                    <BookOpen className="w-3 h-3 mr-1" />
                    مشاهدة
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-medical rounded-2xl p-8 text-primary-foreground">
            <h3 className="text-2xl font-bold mb-4">هل تحتاج مساعدة إضافية؟</h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              فريق الدعم الفني متاح لمساعدتك في أي وقت. تواصل معنا للحصول على دعم شخصي
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                تواصل مع الدعم
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                جدولة جلسة تدريب
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTutorials;
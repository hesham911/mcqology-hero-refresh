import { Stethoscope, BookOpen, Users, Award } from "lucide-react";

const AboutUsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-medical-teal/5" dir="rtl">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-medical-teal mb-6 font-cairo">
            من نحن؟
          </h2>
          <div className="w-24 h-1 bg-medical-green mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-medical-teal font-cairo">
                منصة McQology للتعليم الطبي
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                نحن منصة تعليمية متخصصة في مجال الطب، نهدف إلى تقديم محتوى تعليمي عالي الجودة 
                للطلاب والمهنيين في المجال الطبي. منصتنا تجمع بين أحدث التقنيات التعليمية والمحتوى 
                الأكاديمي المتميز لضمان تجربة تعليمية فعالة ومثمرة.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                نؤمن بأن التعليم الطبي يجب أن يكون متاحاً وسهل الوصول للجميع، ولذلك قمنا بتطوير 
                منصة شاملة تحتوي على آلاف الأسئلة التفاعلية، والشروحات المفصلة، والمواد التعليمية 
                المحدثة باستمرار.
              </p>
            </div>

            {/* Feature Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="w-12 h-12 bg-medical-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-medical-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-medical-teal mb-2">محتوى شامل</h4>
                  <p className="text-muted-foreground text-sm">مواد تعليمية متنوعة تغطي جميع التخصصات الطبية</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="w-12 h-12 bg-medical-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-medical-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-medical-teal mb-2">مجتمع تعليمي</h4>
                  <p className="text-muted-foreground text-sm">تفاعل مع زملائك والخبراء في المجال</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="w-12 h-12 bg-medical-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Stethoscope className="w-6 h-6 text-medical-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-medical-teal mb-2">خبرة طبية</h4>
                  <p className="text-muted-foreground text-sm">محتوى معد من قبل أطباء وخبراء متخصصين</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="w-12 h-12 bg-medical-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-medical-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-medical-teal mb-2">شهادات معتمدة</h4>
                  <p className="text-muted-foreground text-sm">احصل على شهادات إنجاز معترف بها</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Block */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img 
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="التعليم الطبي" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-medical-teal/30 to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-xl p-6 shadow-soft border border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-medical-green mb-2">15+</div>
                <div className="text-sm text-muted-foreground">سنة من الخبرة</div>
              </div>
            </div>

            {/* Floating Achievement Card */}
            <div className="absolute -top-8 -left-8 bg-medical-green text-white rounded-xl p-4 shadow-soft">
              <div className="flex items-center space-x-3 space-x-reverse">
                <Award className="w-8 h-8" />
                <div>
                  <div className="font-bold">منصة رائدة</div>
                  <div className="text-sm opacity-90">في التعليم الطبي</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
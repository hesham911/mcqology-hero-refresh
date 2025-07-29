import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-medical-teal/5" dir="rtl">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-medical-teal mb-6 font-cairo">
            تواصل معنا
          </h2>
          <div className="w-24 h-1 bg-medical-green mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            نحن هنا لمساعدتك. تواصل معنا للحصول على الدعم أو لأي استفسارات حول منصتنا التعليمية
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-medical-teal mb-6 font-cairo">
                معلومات التواصل
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-medical-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-medical-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-medical-teal">البريد الإلكتروني</h4>
                    <p className="text-muted-foreground">info@mcqology.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-medical-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-medical-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-medical-teal">رقم الهاتف</h4>
                    <p className="text-muted-foreground">+962 6 123 4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-medical-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-medical-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-medical-teal">العنوان</h4>
                    <p className="text-muted-foreground">عمان، الأردن</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <Card className="border-medical-green/20">
              <CardContent className="p-6">
                <h4 className="font-semibold text-medical-teal mb-4">ساعات العمل</h4>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>الأحد - الخميس</span>
                    <span>9:00 ص - 6:00 م</span>
                  </div>
                  <div className="flex justify-between">
                    <span>الجمعة</span>
                    <span>10:00 ص - 2:00 م</span>
                  </div>
                  <div className="flex justify-between">
                    <span>السبت</span>
                    <span>مغلق</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-medical-green/20 shadow-glow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-medical-teal mb-6 font-cairo">
                أرسل لنا رسالة
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      الاسم الأول
                    </label>
                    <Input placeholder="أدخل الاسم الأول" className="text-right" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      الاسم الأخير
                    </label>
                    <Input placeholder="أدخل الاسم الأخير" className="text-right" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    البريد الإلكتروني
                  </label>
                  <Input type="email" placeholder="أدخل بريدك الإلكتروني" className="text-right" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    الموضوع
                  </label>
                  <Input placeholder="موضوع الرسالة" className="text-right" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    الرسالة
                  </label>
                  <Textarea 
                    placeholder="اكتب رسالتك هنا..."
                    className="min-h-32 text-right"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-medical-green hover:bg-medical-green/90 text-white py-3 rounded-lg transition-all duration-300 hover:shadow-glow"
                >
                  إرسال الرسالة
                  <Send className="w-5 h-5 mr-3" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
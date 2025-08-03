import { Stethoscope, BookOpen, Users, Award } from "lucide-react";

const AboutUsSection = () => {
  return (
    <section id="about" className="py-12 md:py-20 bg-gradient-to-b from-background to-medical-teal/5">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-medical-teal mb-6">
            About Us
          </h2>
          <div className="w-24 h-1 bg-medical-green mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-medical-teal">
                McQology Medical Education Platform
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are a specialized educational platform in the medical field, aiming to provide high-quality educational content 
                for students and professionals in the medical field. Our platform combines the latest educational technologies with 
                distinguished academic content to ensure an effective and fruitful educational experience.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that medical education should be accessible and easy to reach for everyone, so we have developed 
                a comprehensive platform that contains thousands of interactive questions, detailed explanations, and educational materials 
                that are constantly updated.
              </p>
            </div>

            {/* Feature Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-medical-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-medical-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-medical-teal mb-2">Comprehensive Content</h4>
                  <p className="text-muted-foreground text-sm">Diverse educational materials covering all medical specialties</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-medical-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-medical-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-medical-teal mb-2">Learning Community</h4>
                  <p className="text-muted-foreground text-sm">Interact with your peers and experts in the field</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-medical-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Stethoscope className="w-6 h-6 text-medical-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-medical-teal mb-2">Medical Expertise</h4>
                  <p className="text-muted-foreground text-sm">Content prepared by specialized doctors and experts</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-medical-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-medical-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-medical-teal mb-2">Certified Achievements</h4>
                  <p className="text-muted-foreground text-sm">Get recognized certificates of completion</p>
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
                <div className="text-sm text-muted-foreground">Years of Experience</div>
              </div>
            </div>

            {/* Floating Achievement Card */}
            <div className="absolute -top-8 -left-8 bg-medical-green text-white rounded-xl p-4 shadow-soft">
              <div className="flex items-center space-x-3">
                <Award className="w-8 h-8" />
                <div>
                  <div className="font-bold">Leading Platform</div>
                  <div className="text-sm opacity-90">In Medical Education</div>
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
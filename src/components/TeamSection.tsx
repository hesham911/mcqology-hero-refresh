import { Linkedin, Mail, Globe } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "د. أحمد محمد",
      title: "استشاري طب القلب",
      description: "خبرة 15 سنة في التعليم الطبي",
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      specialization: "طب القلب والأوعية الدموية"
    },
    {
      id: 2,
      name: "د. فاطمة الزهراء",
      title: "أستاذة الطب الباطني",
      description: "رائدة في التعليم الطبي الرقمي",
      avatar: "https://images.unsplash.com/photo-1594824694996-de824b3e4bb8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      specialization: "الطب الباطني والغدد الصماء"
    },
    {
      id: 3,
      name: "د. محمد العلي",
      title: "استشاري الجراحة العامة",
      description: "متخصص في تقنيات التعليم الحديثة",
      avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      specialization: "الجراحة العامة والمناظير"
    },
    {
      id: 4,
      name: "د. سارة أحمد",
      title: "أستاذة طب الأطفال",
      description: "خبيرة في المناهج التعليمية",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      specialization: "طب الأطفال والمراهقين"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-medical-teal/5 to-background" dir="rtl">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-medical-teal mb-6 font-cairo">
            فريق الخبراء
          </h2>
          <div className="w-24 h-1 bg-medical-green mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            نخبة من أفضل الأطباء والمتخصصين في المجال الطبي، ملتزمون بتقديم تعليم طبي متميز
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-medical-teal/5 to-medical-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative p-6 text-center">
                {/* Avatar */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-medical-green/20 group-hover:ring-medical-green/40 transition-all duration-300">
                    <img 
                      src={member.avatar} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Status Indicator */}
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-medical-green rounded-full border-4 border-card flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-medical-teal font-cairo">
                    {member.name}
                  </h3>
                  
                  <div className="space-y-2">
                    <p className="text-medical-green font-semibold">
                      {member.title}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.specialization}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {member.description}
                    </p>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4 space-x-reverse pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-8 h-8 bg-medical-teal/10 hover:bg-medical-teal hover:text-white rounded-full flex items-center justify-center transition-colors duration-200">
                      <Linkedin className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 bg-medical-teal/10 hover:bg-medical-teal hover:text-white rounded-full flex items-center justify-center transition-colors duration-200">
                      <Mail className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 bg-medical-teal/10 hover:bg-medical-teal hover:text-white rounded-full flex items-center justify-center transition-colors duration-200">
                      <Globe className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-medical-teal to-medical-green rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4 font-cairo">
              انضم إلى فريق التميز
            </h3>
            <p className="text-white/90 mb-6">
              هل تريد أن تكون جزءاً من رحلة التعليم الطبي؟ تواصل معنا اليوم
            </p>
            <button className="bg-white text-medical-teal px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors duration-200">
              تواصل معنا
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
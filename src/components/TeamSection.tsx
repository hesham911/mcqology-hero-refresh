import { Linkedin, Mail, Globe } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Ahmed Mohammed",
      title: "Cardiology Consultant",
      description: "15 years of experience in medical education",
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      specialization: "Cardiology and Vascular Medicine"
    },
    {
      id: 2,
      name: "Dr. Fatima Al-Zahra",
      title: "Internal Medicine Professor",
      description: "Pioneer in digital medical education",
      avatar: "https://images.unsplash.com/photo-1594824694996-de824b3e4bb8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      specialization: "Internal Medicine and Endocrinology"
    },
    {
      id: 3,
      name: "Dr. Mohammed Al-Ali",
      title: "General Surgery Consultant",
      description: "Specialist in modern teaching techniques",
      avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      specialization: "General Surgery and Laparoscopy"
    },
    {
      id: 4,
      name: "Dr. Sarah Ahmed",
      title: "Pediatrics Professor",
      description: "Expert in educational curricula",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      specialization: "Pediatrics and Adolescent Medicine"
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-medical-teal/5 to-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-medical-teal mb-6">
            Expert Team
          </h2>
          <div className="w-24 h-1 bg-medical-green mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A team of the best doctors and specialists in the medical field, committed to providing excellent medical education
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
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
                  <h3 className="text-xl font-bold text-medical-teal">
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
                  <div className="flex justify-center space-x-4 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
            <h3 className="text-2xl font-bold mb-4">
              Join the Excellence Team
            </h3>
            <p className="text-white/90 mb-6">
              Want to be part of the medical education journey? Contact us today
            </p>
            <button className="bg-white text-medical-teal px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
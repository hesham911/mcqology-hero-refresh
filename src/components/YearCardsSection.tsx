import { GraduationCap, BookOpen, Users, Trophy } from "lucide-react";

const YearCardsSection = () => {
  const yearData = [
    {
      id: 1,
      title: "First Year",
      subtitle: "Foundation Year",
      description: "Medical fundamentals and basic sciences",
      subjects: ["Anatomy", "Physiology", "Biochemistry", "Histology"],
      students: 1250,
      questions: 2500,
      icon: BookOpen,
      gradient: "from-medical-teal to-medical-blue"
    },
    {
      id: 2,
      title: "Second Year",
      subtitle: "Basic Medical Sciences",
      description: "Advanced medical and pathological sciences",
      subjects: ["Pathology", "Microbiology", "Pharmacology", "Forensic Medicine"],
      students: 980,
      questions: 3200,
      icon: GraduationCap,
      gradient: "from-medical-green to-green-600"
    },
    {
      id: 3,
      title: "Third Year",
      subtitle: "Basic Clinical Medicine",
      description: "Introduction to clinical medical practice",
      subjects: ["Internal Medicine", "General Surgery", "Pediatrics", "Obstetrics & Gynecology"],
      students: 850,
      questions: 4100,
      icon: Users,
      gradient: "from-blue-600 to-medical-teal"
    },
    {
      id: 4,
      title: "Fourth Year",
      subtitle: "Advanced Clinical Medicine",
      description: "Advanced medical specialties",
      subjects: ["Emergency Medicine", "Psychiatry", "Community Medicine", "Radiology"],
      students: 720,
      questions: 3800,
      icon: Trophy,
      gradient: "from-purple-600 to-medical-green"
    },
    {
      id: 5,
      title: "Fifth Year",
      subtitle: "Practical Training",
      description: "Clinical training and practical application",
      subjects: ["Internship", "Clinical Training", "Complex Cases", "Medical Research"],
      students: 650,
      questions: 2900,
      icon: GraduationCap,
      gradient: "from-medical-teal to-medical-green"
    },
    {
      id: 6,
      title: "Graduate Studies",
      subtitle: "Specialization & Fellowship",
      description: "Medical specialization and fellowship programs",
      subjects: ["Advanced Specialties", "Scientific Research", "Academic Publishing", "Teaching"],
      students: 400,
      questions: 2200,
      icon: Trophy,
      gradient: "from-indigo-600 to-medical-teal"
    }
  ];

  return (
    <section id="years" className="py-12 md:py-20 bg-gradient-to-b from-background to-medical-teal/5">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-medical-teal mb-6">
            Academic Years
          </h2>
          <div className="w-24 h-1 bg-medical-green mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose your academic year and start your educational journey with content tailored for each year
          </p>
        </div>

        {/* Year Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {yearData.map((year) => {
            const IconComponent = year.icon;
            return (
              <div 
                key={year.id}
                className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-glow transition-all duration-500 hover:-translate-y-3 cursor-pointer"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${year.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative p-4 md:p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-medical-teal mb-2 group-hover:text-medical-green transition-colors duration-300">
                        {year.title}
                      </h3>
                      <p className="text-medical-green font-semibold text-sm">
                        {year.subtitle}
                      </p>
                    </div>
                    
                    <div className={`w-16 h-16 bg-gradient-to-br ${year.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {year.description}
                  </p>

                  {/* Subjects */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-medical-teal mb-3">Subjects:</h4>
                    <div className="flex flex-wrap gap-2">
                      {year.subjects.map((subject, index) => (
                        <span 
                          key={index}
                          className="inline-block bg-medical-teal/10 text-medical-teal px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-medical-green/5 rounded-xl">
                      <div className="text-xl font-bold text-medical-green">{year.students.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">Active Students</div>
                    </div>
                    <div className="text-center p-3 bg-medical-teal/5 rounded-xl">
                      <div className="text-xl font-bold text-medical-teal">{year.questions.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">Questions Available</div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full bg-gradient-to-r ${year.gradient} text-white py-3 px-6 rounded-xl font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 hover:scale-105`}>
                    Enter {year.title}
                  </button>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${year.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 md:mt-16">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-medical-teal to-medical-green rounded-2xl p-6 text-white">
            <GraduationCap className="w-8 h-8" />
            <div className="text-left">
              <h3 className="text-xl font-bold mb-1">Not sure about your year?</h3>
              <p className="text-white/90 text-sm">Contact us for free consultation</p>
            </div>
            <button className="bg-white text-medical-teal px-6 py-2 rounded-full font-semibold hover:bg-white/90 transition-colors duration-200 whitespace-nowrap">
              Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YearCardsSection;
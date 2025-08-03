import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Users, BookOpen, Award } from "lucide-react";

const universities = [
  {
    id: 1,
    name: "Harvard Medical School",
    location: "Boston, MA",
    students: "10K+",
    programs: "25+",
    ranking: "#1",
    image: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=400&h=300&fit=crop",
    description: "Leading medical education institution with cutting-edge research facilities"
  },
  {
    id: 2,
    name: "Johns Hopkins School of Medicine",
    location: "Baltimore, MD",
    students: "8.5K+",
    programs: "22+",
    ranking: "#2",
    image: "/lovable-uploads/7bfbfef7-3da9-447c-80c5-b6b4691b8917.png",
    description: "Renowned for innovative medical research and clinical excellence"
  },
  {
    id: 3,
    name: "Stanford Medicine",
    location: "Stanford, CA",
    students: "7.2K+",
    programs: "20+",
    ranking: "#3",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=400&h=300&fit=crop",
    description: "Pioneer in translational medicine and biomedical innovation"
  },
  {
    id: 4,
    name: "Mayo Clinic College of Medicine",
    location: "Rochester, MN",
    students: "6.8K+",
    programs: "18+",
    ranking: "#4",
    image: "https://images.unsplash.com/photo-1491336477066-31156b5e4f35?w=400&h=300&fit=crop",
    description: "Excellence in patient care education and medical training"
  }
];

const UniversitiesSection = () => {
  return (
    <section id="universities" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Partner Universities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We collaborate with top-tier medical institutions worldwide to provide the best educational experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {universities.map((university) => (
            <Card key={university.id} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-border bg-card relative overflow-hidden">
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold z-10">
                {university.ranking}
              </div>
              
              <div className="relative overflow-hidden">
                <img 
                  src={university.image} 
                  alt={university.name}
                  className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-bold line-clamp-2">{university.name}</CardTitle>
                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4" />
                  {university.location}
                </div>
              </CardHeader>
              
              <CardContent className="pt-2">
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {university.description}
                </p>
                
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="flex flex-col items-center">
                    <Users className="w-4 h-4 text-primary mb-1" />
                    <span className="text-xs font-semibold">{university.students}</span>
                    <span className="text-xs text-muted-foreground">Students</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <BookOpen className="w-4 h-4 text-primary mb-1" />
                    <span className="text-xs font-semibold">{university.programs}</span>
                    <span className="text-xs text-muted-foreground">Programs</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Award className="w-4 h-4 text-primary mb-1" />
                    <span className="text-xs font-semibold">Top</span>
                    <span className="text-xs text-muted-foreground">Ranked</span>
                  </div>
                </div>
                
                <button className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground py-2 rounded-lg font-semibold transition-colors text-sm">
                  Learn More
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniversitiesSection;
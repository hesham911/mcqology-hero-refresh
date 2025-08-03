import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Users, BookOpen, Award, Star, Globe, GraduationCap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const allUniversities = [
  {
    id: 1,
    name: "Harvard Medical School",
    location: "Boston, MA",
    students: "10K+",
    programs: "25+",
    ranking: "#1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Harvard_University_coat_of_arms.svg/240px-Harvard_University_coat_of_arms.svg.png",
    description: "Leading medical education institution with cutting-edge research facilities",
    rating: 4.9,
    founded: "1782",
    type: "Private"
  },
  {
    id: 2,
    name: "Johns Hopkins School of Medicine",
    location: "Baltimore, MD",
    students: "8.5K+",
    programs: "22+",
    ranking: "#2",
    image: "/lovable-uploads/7bfbfef7-3da9-447c-80c5-b6b4691b8917.png",
    description: "Renowned for innovative medical research and clinical excellence",
    rating: 4.8,
    founded: "1893",
    type: "Private"
  },
  {
    id: 3,
    name: "Stanford Medicine",
    location: "Stanford, CA",
    students: "7.2K+",
    programs: "20+",
    ranking: "#3",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Stanford_University_coat_of_arms.svg/200px-Stanford_University_coat_of_arms.svg.png",
    description: "Pioneer in translational medicine and biomedical innovation",
    rating: 4.8,
    founded: "1908",
    type: "Private"
  },
  {
    id: 4,
    name: "Mayo Clinic College of Medicine",
    location: "Rochester, MN",
    students: "6.8K+",
    programs: "18+",
    ranking: "#4",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Mayo_Clinic_logo.svg/240px-Mayo_Clinic_logo.svg.png",
    description: "Excellence in patient care education and medical training",
    rating: 4.7,
    founded: "1972",
    type: "Private"
  },
  {
    id: 5,
    name: "University of Pennsylvania",
    location: "Philadelphia, PA",
    students: "9.2K+",
    programs: "24+",
    ranking: "#5",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop",
    description: "Prestigious Ivy League medical school with world-class facilities",
    rating: 4.6,
    founded: "1765",
    type: "Private"
  },
  {
    id: 6,
    name: "Yale School of Medicine",
    location: "New Haven, CT",
    students: "6.5K+",
    programs: "19+",
    ranking: "#6",
    image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=400&h=300&fit=crop",
    description: "Historic medical institution known for medical research and education",
    rating: 4.7,
    founded: "1813",
    type: "Private"
  }
];

const UniversitiesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Partner Universities
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore our network of world-renowned medical institutions and find the perfect university for your medical education journey
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-primary" />
                <span>Global Network</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-primary" />
                <span>Top Ranked</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-primary" />
                <span>Accredited</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Universities Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allUniversities.map((university) => (
              <Card key={university.id} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-border bg-card relative overflow-hidden h-full flex flex-col">
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold z-10">
                  {university.ranking}
                </div>
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 z-10">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-semibold">{university.rating}</span>
                </div>
                
                <div className="relative overflow-hidden">
                  <img 
                    src={university.image} 
                    alt={university.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-bold line-clamp-2">{university.name}</CardTitle>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <MapPin className="w-4 h-4" />
                    {university.location}
                  </div>
                </CardHeader>
                
                <CardContent className="pt-2 flex-grow flex flex-col">
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {university.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <Users className="w-4 h-4 text-primary mb-1 mx-auto" />
                      <span className="text-xs font-semibold block">{university.students}</span>
                      <span className="text-xs text-muted-foreground">Students</span>
                    </div>
                    <div className="text-center">
                      <BookOpen className="w-4 h-4 text-primary mb-1 mx-auto" />
                      <span className="text-xs font-semibold block">{university.programs}</span>
                      <span className="text-xs text-muted-foreground">Programs</span>
                    </div>
                  </div>

                  <div className="flex justify-between text-xs text-muted-foreground mb-4">
                    <span>Founded: {university.founded}</span>
                    <span>Type: {university.type}</span>
                  </div>
                  
                  <button className="w-full mt-auto bg-primary hover:bg-primary/90 text-primary-foreground py-2 rounded-lg font-semibold transition-colors text-sm">
                    Learn More
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UniversitiesPage;
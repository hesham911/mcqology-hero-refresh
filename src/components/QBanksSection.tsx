import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, BookOpen, Users, Star } from "lucide-react";

const universities = [
  {
    name: "Jordan University",
    description: "Comprehensive MCQ collection for medical students at Jordan University",
    questions: "2,500+",
    students: "1,200+",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&crop=center",
    subjects: ["Anatomy", "Physiology", "Pathology", "Pharmacology"]
  },
  {
    name: "Yarmouk University", 
    description: "Tailored question banks specifically designed for Yarmouk University curriculum",
    questions: "2,200+",
    students: "980+", 
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop&crop=center",
    subjects: ["Internal Medicine", "Surgery", "Pediatrics", "Obstetrics"]
  },
  {
    name: "Jordan University of Science and Technology",
    description: "Advanced MCQs covering JUST's medical program requirements",
    questions: "2,800+",
    students: "1,500+",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center",
    subjects: ["Biochemistry", "Microbiology", "Immunology", "Genetics"]
  },
  {
    name: "Mutah University",
    description: "Specialized question banks aligned with Mutah University's medical curriculum",
    questions: "1,800+",
    students: "750+",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop&crop=center",
    subjects: ["Cardiology", "Neurology", "Dermatology", "Psychiatry"]
  },
  {
    name: "Hashemite University",
    description: "Complete MCQ solutions for Hashemite University medical students",
    questions: "2,100+",
    students: "900+",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=400&h=300&fit=crop&crop=center",
    subjects: ["Emergency Medicine", "Radiology", "Laboratory Medicine", "Public Health"]
  },
  {
    name: "Al-Balqa' University",
    description: "Comprehensive medical MCQs for Al-Balqa' University programs",
    questions: "1,600+",
    students: "650+",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop&crop=center",
    subjects: ["Family Medicine", "Orthopedics", "Ophthalmology", "ENT"]
  }
];

const QBanksSection = () => {
  return (
    <section id="qbanks" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Explore <span className="text-medical-green">QBanks</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access thousands of high-quality medical MCQs designed to help you ace your exams. 
            With detailed explanations and personalized performance tracking.
          </p>
        </div>

        {/* University Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {universities.map((university, index) => (
            <Card key={index} className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border-border/50">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={university.image} 
                    alt={university.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-background/90 text-foreground">
                      {university.rating} ⭐
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-3 text-foreground group-hover:text-medical-green transition-colors">
                  {university.name}
                </CardTitle>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {university.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <BookOpen className="w-4 h-4 text-medical-green" />
                      <span className="font-semibold">{university.questions}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4 text-medical-green" />
                      <span className="font-semibold">{university.students}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {university.subjects.slice(0, 3).map((subject, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {subject}
                    </Badge>
                  ))}
                  {university.subjects.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{university.subjects.length - 3} more
                    </Badge>
                  )}
                </div>
              </CardContent>
              
              <CardFooter className="p-6 pt-0 flex gap-3">
                <Button variant="outline" size="sm" className="flex-1">
                  Preview
                </Button>
                <Button variant="medical" size="sm" className="flex-1">
                  Start Now
                  <ExternalLink className="w-4 h-4 ml-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Button variant="accent" size="lg">
            See All QBanks
            <ExternalLink className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default QBanksSection;
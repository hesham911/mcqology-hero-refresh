import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Brain, 
  BarChart3, 
  Clock, 
  Shield, 
  Users, 
  Award,
  BookOpen,
  Target,
  Zap
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Smart Learning",
    description: "AI-powered recommendations and adaptive learning paths tailored to your progress and weak areas."
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Detailed insights into your performance with comprehensive charts and progress tracking."
  },
  {
    icon: Clock,
    title: "Timed Practice",
    description: "Simulate real exam conditions with customizable time limits and instant feedback."
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "All questions are reviewed by medical professionals and updated regularly for accuracy."
  },
  {
    icon: Users,
    title: "Peer Comparison",
    description: "Compare your performance with peers and see where you stand in your class."
  },
  {
    icon: Award,
    title: "Achievement System",
    description: "Earn badges and certificates as you master different medical subjects and topics."
  },
  {
    icon: BookOpen,
    title: "Detailed Explanations",
    description: "Comprehensive explanations for every question with references to standard medical textbooks."
  },
  {
    icon: Target,
    title: "Focused Practice",
    description: "Target specific subjects, topics, or difficulty levels based on your study needs."
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "Get immediate feedback and scoring with instant access to correct answers and explanations."
  }
];

const FeaturesSection = () => {
  return (
    <section id="why-choose" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Why Choose <span className="text-medical-green">McQology</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the powerful features that make McQology the preferred choice 
            for medical students across Jordan's top universities.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border-border/50">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-medical rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-medical-green transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-medical rounded-2xl p-8 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-primary-foreground">
              <div className="text-3xl font-bold mb-2">10,000+</div>
              <div className="text-primary-foreground/80">Questions</div>
            </div>
            <div className="text-primary-foreground">
              <div className="text-3xl font-bold mb-2">5,000+</div>
              <div className="text-primary-foreground/80">Students</div>
            </div>
            <div className="text-primary-foreground">
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-primary-foreground/80">Success Rate</div>
            </div>
            <div className="text-primary-foreground">
              <div className="text-3xl font-bold mb-2">6</div>
              <div className="text-primary-foreground/80">Universities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
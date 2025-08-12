import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Users, BookOpen, Check } from "lucide-react";

const CoursePage = () => {
  const { id } = useParams();
  const [selectedPlan, setSelectedPlan] = useState("premium");

  // Mock course data - in real app, this would come from API/database
  const course = {
    id: id || "1",
    title: "Advanced Medical Pathology",
    description: "Comprehensive course covering advanced pathological concepts, disease mechanisms, and diagnostic techniques. This course provides in-depth knowledge essential for medical students and practicing physicians.",
    image: "/lovable-uploads/540413e5-ab8a-41ea-815e-0c2ea9f5d421.png",
    rating: 4.8,
    duration: "12 weeks",
    students: 2547,
    instructor: "Dr. Sarah Johnson",
    level: "Advanced",
    subjects: [
      "Cellular Pathology",
      "Neoplasia & Cancer Biology",
      "Cardiovascular Pathology",
      "Respiratory Pathology",
      "Gastrointestinal Pathology",
      "Neurological Pathology",
      "Endocrine Pathology",
      "Immunopathology"
    ],
    universities: [
      { name: "Harvard Medical School", logo: "/lovable-uploads/7bfbfef7-3da9-447c-80c5-b6b4691b8917.png" },
      { name: "Johns Hopkins University", logo: "/lovable-uploads/7fee58d2-510d-45f7-9b20-fa94ba74047b.png" },
      { name: "Stanford Medicine", logo: "/lovable-uploads/540413e5-ab8a-41ea-815e-0c2ea9f5d421.png" },
      { name: "Mayo Clinic College", logo: "/lovable-uploads/7bfbfef7-3da9-447c-80c5-b6b4691b8917.png" }
    ]
  };

  const subscriptionPlans = [
    {
      id: "basic",
      name: "Basic Access",
      price: 49,
      duration: "1 month",
      features: [
        "Access to course videos",
        "Basic study materials",
        "Community forum access",
        "Mobile app access"
      ]
    },
    {
      id: "premium",
      name: "Premium Package",
      price: 129,
      duration: "3 months",
      features: [
        "Full course access",
        "Premium study materials",
        "Live Q&A sessions",
        "Practice exams",
        "Certificate of completion",
        "Priority support"
      ],
      popular: true
    },
    {
      id: "pro",
      name: "Professional",
      price: 199,
      duration: "6 months",
      features: [
        "Everything in Premium",
        "One-on-one mentoring",
        "Advanced case studies",
        "Research paper access",
        "Career guidance",
        "Lifetime updates"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                {course.level} Level
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                {course.title}
              </h1>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {course.description}
              </p>
              
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{course.rating}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                Instructor: <span className="font-semibold text-foreground">{course.instructor}</span>
              </p>
            </div>

            <div className="relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Universities Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Recognized by Top Universities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {course.universities.map((university, index) => (
              <div key={index} className="flex flex-col items-center p-6 bg-card rounded-xl hover:shadow-lg transition-shadow">
                <img
                  src={university.logo}
                  alt={university.name}
                  className="w-16 h-16 object-contain mb-4"
                />
                <p className="text-sm font-medium text-center">{university.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Course Subjects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive curriculum covering all essential topics in medical pathology
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {course.subjects.map((subject, index) => (
              <Card key={index} className="border-l-4 border-l-primary hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-primary" />
                    <span className="font-medium">{subject}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Plan</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Select the perfect subscription package for your learning journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {subscriptionPlans.map((plan) => (
              <Card 
                key={plan.id} 
                className={`relative hover:shadow-lg transition-all cursor-pointer ${
                  plan.popular ? 'border-primary shadow-lg scale-105' : ''
                } ${selectedPlan === plan.id ? 'ring-2 ring-primary' : ''}`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-muted-foreground">/{plan.duration}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </CardContent>

                <CardFooter>
                  <Button 
                    className="w-full" 
                    variant={selectedPlan === plan.id ? "default" : "outline"}
                  >
                    {selectedPlan === plan.id ? "Selected" : "Choose Plan"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="px-12">
              Enroll Now - ${subscriptionPlans.find(p => p.id === selectedPlan)?.price}
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              30-day money-back guarantee • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CoursePage;
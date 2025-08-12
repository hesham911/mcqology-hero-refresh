import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Dr. Ahmed Hassan",
    title: "Medical Student, Cairo University",
    content: "This platform completely transformed my preparation for medical exams. The question bank is comprehensive and the explanations are incredibly detailed. I improved my scores by 40%!",
    rating: 5,
    avatar: "/lovable-uploads/540413e5-ab8a-41ea-815e-0c2ea9f5d421.png",
    university: "Cairo University"
  },
  {
    id: 2,
    name: "Dr. Fatima Al-Zahra",
    title: "Medical Student, Alexandria University",
    content: "The quality of questions and the detailed explanations helped me understand complex medical concepts easily. I couldn't have passed my exams without this platform.",
    rating: 5,
    avatar: "/lovable-uploads/7bfbfef7-3da9-447c-80c5-b6b4691b8917.png",
    university: "Alexandria University"
  },
  {
    id: 3,
    name: "Dr. Omar Mahmoud",
    title: "Medical Student, Ain Shams University",
    content: "Outstanding platform! The user interface is intuitive and the content is always up-to-date. This is exactly what medical students need for effective preparation.",
    rating: 5,
    avatar: "/lovable-uploads/7fee58d2-510d-45f7-9b20-fa94ba74047b.png",
    university: "Ain Shams University"
  },
  {
    id: 4,
    name: "Dr. Sara Mohamed",
    title: "Medical Student, Mansoura University",
    content: "I've tried many platforms, but this one stands out. The explanations are clear, questions are challenging, and the progress tracking helps me stay motivated.",
    rating: 5,
    avatar: "/lovable-uploads/540413e5-ab8a-41ea-815e-0c2ea9f5d421.png",
    university: "Mansoura University"
  },
  {
    id: 5,
    name: "Dr. Youssef Ali",
    title: "Medical Student, Assiut University",
    content: "Excellent question quality and fantastic explanations. This platform has been instrumental in my medical education journey. Highly recommended!",
    rating: 5,
    avatar: "/lovable-uploads/7bfbfef7-3da9-447c-80c5-b6b4691b8917.png",
    university: "Assiut University"
  },
  {
    id: 6,
    name: "Dr. Nour Hassan",
    title: "Medical Student, Tanta University",
    content: "The best medical education platform I've used. The content is comprehensive, well-organized, and the support team is very responsive.",
    rating: 5,
    avatar: "/lovable-uploads/7fee58d2-510d-45f7-9b20-fa94ba74047b.png",
    university: "Tanta University"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-background/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.3)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Quote className="w-4 h-4" />
            <span className="text-sm font-medium">Client Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            What Our Students Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover how our platform has helped thousands of medical students achieve their goals and excel in their studies.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
            <div className="text-muted-foreground">Happy Students</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">95%</div>
            <div className="text-muted-foreground">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="text-primary/20 mb-4">
                  <Quote className="w-8 h-8" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 line-clamp-4 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center overflow-hidden">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        (e.target as HTMLImageElement).parentElement!.innerHTML = testimonial.name.charAt(0);
                      }}
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.university}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors">
              Join Our Students
            </button>
            <button className="px-8 py-3 border border-border rounded-xl font-semibold hover:bg-accent hover:text-accent-foreground transition-colors">
              Read More Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
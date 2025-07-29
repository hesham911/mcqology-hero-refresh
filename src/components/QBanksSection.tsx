import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, BookOpen, Users, Star } from "lucide-react";
const universities = [{
  name: "Jordan University",
  description: "Comprehensive MCQ collection for medical students at Jordan University",
  questions: "2,500+",
  students: "1,200+",
  rating: 4.8,
  image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&crop=center",
  subjects: ["Anatomy", "Physiology", "Pathology", "Pharmacology"]
}, {
  name: "Yarmouk University",
  description: "Tailored question banks specifically designed for Yarmouk University curriculum",
  questions: "2,200+",
  students: "980+",
  rating: 4.7,
  image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop&crop=center",
  subjects: ["Internal Medicine", "Surgery", "Pediatrics", "Obstetrics"]
}, {
  name: "Jordan University of Science and Technology",
  description: "Advanced MCQs covering JUST's medical program requirements",
  questions: "2,800+",
  students: "1,500+",
  rating: 4.9,
  image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center",
  subjects: ["Biochemistry", "Microbiology", "Immunology", "Genetics"]
}, {
  name: "Mutah University",
  description: "Specialized question banks aligned with Mutah University's medical curriculum",
  questions: "1,800+",
  students: "750+",
  rating: 4.6,
  image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop&crop=center",
  subjects: ["Cardiology", "Neurology", "Dermatology", "Psychiatry"]
}, {
  name: "Hashemite University",
  description: "Complete MCQ solutions for Hashemite University medical students",
  questions: "2,100+",
  students: "900+",
  rating: 4.7,
  image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=400&h=300&fit=crop&crop=center",
  subjects: ["Emergency Medicine", "Radiology", "Laboratory Medicine", "Public Health"]
}, {
  name: "Al-Balqa' University",
  description: "Comprehensive medical MCQs for Al-Balqa' University programs",
  questions: "1,600+",
  students: "650+",
  rating: 4.5,
  image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop&crop=center",
  subjects: ["Family Medicine", "Orthopedics", "Ophthalmology", "ENT"]
}];
const QBanksSection = () => {
  return <section id="qbanks" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4" dir="rtl">
            الجامعات التي <span className="text-medical-green">ندعمها</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" dir="rtl">
            ندعم العديد من الجامعات الطبية الرائدة ونقدم محتوى تعليمي مخصص لكل جامعة
          </p>
        </div>

        {/* University Logos Slider */}
        <div className="relative overflow-hidden py-8" onMouseEnter={e => {
        const track = e.currentTarget.querySelector('.slider-track') as HTMLElement;
        if (track) track.style.animationPlayState = 'paused';
      }} onMouseLeave={e => {
        const track = e.currentTarget.querySelector('.slider-track') as HTMLElement;
        if (track) track.style.animationPlayState = 'running';
      }}>
          <div className="flex animate-scroll space-x-8 slider-track">
            {/* First set of logos */}
            
            <div className="flex-shrink-0 w-32 h-32 bg-white rounded-lg shadow-md flex items-center justify-center border mx-4">
              <div className="text-center">
                <div className="text-sm font-bold text-medical-teal">Yarmouk</div>
                <div className="text-xs text-muted-foreground">University</div>
              </div>
            </div>
            <div className="flex-shrink-0 w-32 h-32 bg-white rounded-lg shadow-md flex items-center justify-center border mx-4">
              <div className="text-center">
                <div className="text-sm font-bold text-medical-teal">JUST</div>
                <div className="text-xs text-muted-foreground">University</div>
              </div>
            </div>
            <div className="flex-shrink-0 w-32 h-32 bg-white rounded-lg shadow-md flex items-center justify-center border mx-4">
              <div className="text-center">
                <div className="text-sm font-bold text-medical-teal">Mutah</div>
                <div className="text-xs text-muted-foreground">University</div>
              </div>
            </div>
            <div className="flex-shrink-0 w-32 h-32 bg-white rounded-lg shadow-md flex items-center justify-center border mx-4">
              <div className="text-center">
                <div className="text-sm font-bold text-medical-teal">Hashemite</div>
                <div className="text-xs text-muted-foreground">University</div>
              </div>
            </div>
            <div className="flex-shrink-0 w-32 h-32 bg-white rounded-lg shadow-md flex items-center justify-center border mx-4">
              <div className="text-center">
                <div className="text-sm font-bold text-medical-teal">Al-Balqa</div>
                <div className="text-xs text-muted-foreground">University</div>
              </div>
            </div>
            
            {/* Duplicate set for seamless scroll */}
            <div className="flex-shrink-0 w-32 h-32 bg-white rounded-lg shadow-md flex items-center justify-center border mx-4">
              <img src="/lovable-uploads/540413e5-ab8a-41ea-815e-0c2ea9f5d421.png" alt="Jordan University" className="w-20 h-20 object-contain" />
            </div>
            <div className="flex-shrink-0 w-32 h-32 bg-white rounded-lg shadow-md flex items-center justify-center border mx-4">
              <div className="text-center">
                <div className="text-sm font-bold text-medical-teal">Yarmouk</div>
                <div className="text-xs text-muted-foreground">University</div>
              </div>
            </div>
            <div className="flex-shrink-0 w-32 h-32 bg-white rounded-lg shadow-md flex items-center justify-center border mx-4">
              <div className="text-center">
                <div className="text-sm font-bold text-medical-teal">JUST</div>
                <div className="text-xs text-muted-foreground">University</div>
              </div>
            </div>
            <div className="flex-shrink-0 w-32 h-32 bg-white rounded-lg shadow-md flex items-center justify-center border mx-4">
              <div className="text-center">
                <div className="text-sm font-bold text-medical-teal">Mutah</div>
                <div className="text-xs text-muted-foreground">University</div>
              </div>
            </div>
            <div className="flex-shrink-0 w-32 h-32 bg-white rounded-lg shadow-md flex items-center justify-center border mx-4">
              <div className="text-center">
                <div className="text-sm font-bold text-medical-teal">Hashemite</div>
                <div className="text-xs text-muted-foreground">University</div>
              </div>
            </div>
            <div className="flex-shrink-0 w-32 h-32 bg-white rounded-lg shadow-md flex items-center justify-center border mx-4">
              <div className="text-center">
                <div className="text-sm font-bold text-medical-teal">Al-Balqa</div>
                <div className="text-xs text-muted-foreground">University</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default QBanksSection;
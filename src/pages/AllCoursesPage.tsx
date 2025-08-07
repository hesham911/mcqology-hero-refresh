import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { BookOpen, Clock, Users, Star, Search } from "lucide-react";

const allCourses = [
  {
    id: 1,
    title: "General Medicine",
    description: "Comprehensive medical fundamentals and clinical practice",
    duration: "12 weeks",
    students: "2.5K",
    rating: 4.8,
    year: "1st Year",
    university: "Harvard Medical School",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    title: "Surgery Fundamentals",
    description: "Essential surgical techniques and procedures",
    duration: "16 weeks",
    students: "1.8K",
    rating: 4.9,
    year: "2nd Year",
    university: "Johns Hopkins University",
    image: "/lovable-uploads/7bfbfef7-3da9-447c-80c5-b6b4691b8917.png"
  },
  {
    id: 3,
    title: "Cardiology",
    description: "Heart and cardiovascular system specialization",
    duration: "14 weeks",
    students: "1.2K",
    rating: 4.7,
    year: "3rd Year",
    university: "Stanford Medical School",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    title: "Neurology",
    description: "Brain and nervous system medical practice",
    duration: "18 weeks",
    students: "980",
    rating: 4.8,
    year: "4th Year",
    university: "Mayo Clinic Alix School",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    title: "Pediatrics",
    description: "Specialized care for children and adolescents",
    duration: "15 weeks",
    students: "1.5K",
    rating: 4.9,
    year: "3rd Year",
    university: "Harvard Medical School",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop"
  },
  {
    id: 6,
    title: "Emergency Medicine",
    description: "Critical care and emergency response training",
    duration: "10 weeks",
    students: "2.1K",
    rating: 4.6,
    year: "4th Year",
    university: "Johns Hopkins University",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop"
  },
  {
    id: 7,
    title: "Anatomy & Physiology",
    description: "Foundational knowledge of human body systems",
    duration: "20 weeks",
    students: "3.2K",
    rating: 4.5,
    year: "1st Year",
    university: "Stanford Medical School",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
  },
  {
    id: 8,
    title: "Pharmacology",
    description: "Drug interactions and therapeutic applications",
    duration: "12 weeks",
    students: "1.7K",
    rating: 4.6,
    year: "2nd Year",
    university: "Mayo Clinic Alix School",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  }
];

const years = ["All Years", "1st Year", "2nd Year", "3rd Year", "4th Year"];
const universities = [
  "All Universities",
  "Harvard Medical School",
  "Johns Hopkins University", 
  "Stanford Medical School",
  "Mayo Clinic Alix School"
];

const AllCoursesPage = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("All Years");
  const [selectedUniversity, setSelectedUniversity] = useState("All Universities");

  // Set default filters from URL parameters
  useEffect(() => {
    const yearParam = searchParams.get("year");
    const universityParam = searchParams.get("university");
    
    if (yearParam && years.includes(yearParam)) {
      setSelectedYear(yearParam);
    }
    
    if (universityParam && universities.includes(universityParam)) {
      setSelectedUniversity(universityParam);
    }
  }, [searchParams]);

  const filteredCourses = allCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = selectedYear === "All Years" || course.year === selectedYear;
    const matchesUniversity = selectedUniversity === "All Universities" || course.university === selectedUniversity;
    
    return matchesSearch && matchesYear && matchesUniversity;
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              All Medical Courses
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our comprehensive collection of medical courses from top universities worldwide
            </p>
          </div>
          
          {/* Filters */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              {/* Year Filter */}
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Year" />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem key={year} value={year}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              {/* University Filter */}
              <Select value={selectedUniversity} onValueChange={setSelectedUniversity}>
                <SelectTrigger>
                  <SelectValue placeholder="Select University" />
                </SelectTrigger>
                <SelectContent>
                  {universities.map((university) => (
                    <SelectItem key={university} value={university}>
                      {university}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              {/* Results Count */}
              <div className="flex items-center justify-center bg-muted rounded-lg px-4 py-2">
                <span className="text-sm font-medium">
                  {filteredCourses.length} courses found
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border bg-card h-full flex flex-col">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold">{course.rating}</span>
                  </div>
                </div>
                
                <CardHeader className="flex-grow">
                  <CardTitle className="text-xl font-bold">{course.title}</CardTitle>
                  <p className="text-muted-foreground">{course.description}</p>
                  <div className="text-sm text-primary font-medium">
                    {course.year} • {course.university}
                  </div>
                </CardHeader>
                
                <CardContent className="mt-auto">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {course.students}
                    </div>
                  </div>
                  
                  <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Start Course
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold mb-4">No courses found</h3>
              <p className="text-muted-foreground">
                Try adjusting your filters or search term to find more courses.
              </p>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AllCoursesPage;
<template>
  <section id="courses-section" class="py-20 bg-background">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Featured Medical Courses
        </h2>
        <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore our comprehensive medical courses designed by experts to enhance your knowledge and skills
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div 
          v-for="course in courses" 
          :key="course.id"
          class="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border bg-card h-full flex flex-col rounded-lg overflow-hidden"
        >
          <div class="relative overflow-hidden">
            <img 
              :src="course.image" 
              :alt="course.title"
              class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div class="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
              <Star class="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span class="text-sm font-semibold">{{ course.rating }}</span>
            </div>
          </div>
          
          <div class="p-6 flex-grow flex flex-col">
            <h3 class="text-xl font-bold mb-2">{{ course.title }}</h3>
            <p class="text-muted-foreground mb-4">{{ course.description }}</p>
            
            <div class="flex items-center justify-between text-sm text-muted-foreground mb-4">
              <div class="flex items-center gap-1">
                <Clock class="w-4 h-4" />
                {{ course.duration }}
              </div>
              <div class="flex items-center gap-1">
                <Users class="w-4 h-4" />
                {{ course.students }}
              </div>
            </div>
            
            <button class="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 mt-auto">
              <BookOpen class="w-4 h-4" />
              Start Course
            </button>
          </div>
        </div>
      </div>
      
      <div class="text-center">
        <router-link 
          to="/courses"
          class="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-block"
        >
          View All Courses
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { BookOpen, Clock, Users, Star } from 'lucide-vue-next';

const courses = [
  {
    id: 1,
    title: "General Medicine",
    description: "Comprehensive medical fundamentals and clinical practice",
    duration: "12 weeks",
    students: "2.5K",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    title: "Surgery Fundamentals",
    description: "Essential surgical techniques and procedures",
    duration: "16 weeks",
    students: "1.8K",
    rating: 4.9,
    image: "/lovable-uploads/7bfbfef7-3da9-447c-80c5-b6b4691b8917.png"
  },
  {
    id: 3,
    title: "Cardiology",
    description: "Heart and cardiovascular system specialization",
    duration: "14 weeks",
    students: "1.2K",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    title: "Neurology",
    description: "Brain and nervous system medical practice",
    duration: "18 weeks",
    students: "980",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    title: "Pediatrics",
    description: "Specialized care for children and adolescents",
    duration: "15 weeks",
    students: "1.5K",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop"
  },
  {
    id: 6,
    title: "Emergency Medicine",
    description: "Critical care and emergency response training",
    duration: "10 weeks",
    students: "2.1K",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop"
  }
];
</script> 
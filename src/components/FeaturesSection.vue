<template>
  <section id="why-choose" class="py-20 bg-background">
    <div class="container mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-foreground mb-4">
          Why Choose <span class="text-medical-green">McQology</span>?
        </h2>
        <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover the powerful features that make McQology the preferred choice 
          for medical students across Jordan's top universities.
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(feature, index) in features" 
          :key="index" 
          class="group bg-card rounded-xl p-6 shadow-soft border border-border/50 hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
        >
          <div class="text-center">
            <div class="mx-auto w-16 h-16 bg-gradient-medical rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <component :is="feature.icon" class="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 class="text-xl font-bold text-foreground group-hover:text-medical-green transition-colors mb-3">
              {{ feature.title }}
            </h3>
            <p class="text-muted-foreground leading-relaxed">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="mt-20 bg-gradient-medical rounded-2xl p-8 text-center">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-primary-foreground">
            <div class="text-3xl font-bold mb-2">10,000+</div>
            <div class="text-primary-foreground/80">Questions</div>
          </div>
          <div class="text-primary-foreground">
            <div class="text-3xl font-bold mb-2">5,000+</div>
            <div class="text-primary-foreground/80">Students</div>
          </div>
          <div class="text-primary-foreground">
            <div class="text-3xl font-bold mb-2">95%</div>
            <div class="text-primary-foreground/80">Success Rate</div>
          </div>
          <div class="text-primary-foreground">
            <div class="text-3xl font-bold mb-2">6</div>
            <div class="text-primary-foreground/80">Universities</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
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
} from 'lucide-vue-next'

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
]
</script> 
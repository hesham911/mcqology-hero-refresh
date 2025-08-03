<template>
  <section id="home" class="relative h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Video Placeholder -->
    <div class="absolute inset-0 z-0">
      <div class="relative w-full h-full bg-gradient-to-br from-medical-teal via-medical-blue to-medical-teal/80">
        <!-- Video placeholder - replace with actual video -->
        <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-40"></div>
        <div class="absolute inset-0 bg-medical-teal/60"></div>
      </div>
    </div>

    <!-- Content -->
    <div class="relative z-10 container mx-auto px-4 md:px-6 text-center text-white h-full flex items-center justify-center pt-16 md:pt-0">
      <div class="max-w-4xl mx-auto space-y-4 md:space-y-8">
        <!-- Main Headline -->
        <h1 class="text-3xl sm:text-4xl md:text-7xl font-bold leading-tight">
          Leading Medical Education
          <br />
          <span class="text-medical-green">Platform</span>
        </h1>

        <!-- Subtitle -->
        <p class="text-base sm:text-lg md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
          We provide the latest educational methods and specialized medical content to help you achieve your academic and professional goals
        </p>

        <!-- CTA Buttons - Hidden on mobile, shown on desktop -->
        <div class="hidden md:flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
          <button 
            class="h-11 rounded-md px-8 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-medical-green hover:bg-medical-green/90 text-white py-4 text-xl font-semibold rounded-full shadow-glow transition-all duration-300 hover:scale-105"
            @click="scrollToYears"
          >
            Start Your Journey
            <ArrowLeft class="w-6 h-6 ml-3" />
          </button>
          
          <button 
            class="h-11 rounded-md px-8 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-2 border-white bg-transparent text-white hover:bg-white hover:text-medical-teal py-4 text-xl font-semibold rounded-full backdrop-blur-sm transition-all duration-300 group"
          >
            <Play class="w-6 h-6 mr-3 text-white group-hover:text-medical-teal" />
            <span class="text-white group-hover:text-medical-teal">Watch Intro Video</span>
          </button>
        </div>

        <!-- Mobile CTA - Single button -->
        <div class="md:hidden pt-4">
          <button 
            class="h-11 rounded-md px-8 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-medical-green hover:bg-medical-green/90 text-white py-3 text-lg font-semibold rounded-full shadow-glow transition-all duration-300 w-full max-w-xs"
            @click="scrollToYears"
          >
            Start Your Journey
            <ArrowLeft class="w-5 h-5 ml-2" />
          </button>
        </div>

        <!-- Stats -->
        <div class="flex flex-wrap justify-center gap-4 md:gap-8 pt-6 md:pt-12">
          <div class="text-center">
            <div class="text-xl md:text-3xl font-bold text-medical-green">10,000+</div>
            <div class="text-white/80 text-sm md:text-base">Interactive Questions</div>
          </div>
          <div class="text-center">
            <div class="text-xl md:text-3xl font-bold text-medical-green">5,000+</div>
            <div class="text-white/80 text-sm md:text-base">Active Students</div>
          </div>
          <div class="text-center">
            <div class="text-xl md:text-3xl font-bold text-medical-green">95%</div>
            <div class="text-white/80 text-sm md:text-base">Success Rate</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <button 
      class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce cursor-pointer hover:text-white/80 transition-colors z-20"
      @click="scrollToAbout"
      aria-label="Scroll to next section"
    >
      <div class="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center hover:border-white/60 transition-colors">
        <div class="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
      </div>
    </button>
  </section>
</template>

<script setup lang="ts">
import { Play, ArrowLeft } from 'lucide-vue-next'

const scrollToYears = () => {
  const yearsSection = document.getElementById('years')
  if (yearsSection) {
    yearsSection.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToAbout = () => {
  console.log('Scroll button clicked')
  const aboutSection = document.getElementById('about')
  console.log('About section found:', aboutSection)
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: 'smooth' })
  } else {
    // Fallback: scroll to next section
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }
}
</script> 
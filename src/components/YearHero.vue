<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
    <!-- Video Background -->
    <div class="absolute inset-0 z-0">
      <iframe 
        class="absolute top-1/2 left-1/2 w-[177.77vh] h-[56.25vw] min-w-full min-h-full" 
        style="transform: translate(-50%, -50%); pointer-events: none;"
        src="https://www.youtube.com/embed/bBzfI3CbOvY?autoplay=1&mute=1&loop=1&playlist=bBzfI3CbOvY&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen 
        title="Background Video" 
      />
      <div class="absolute inset-0 bg-black/40" />
    </div>
    
    <!-- Content -->
    <div class="relative z-10 container mx-auto px-4 text-center">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-foreground to-secondary bg-clip-text text-transparent">
          Welcome to Your
          <span class="block text-[#d8ffd8]"> Medical Journey</span>
        </h1>
        
        <p class="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md">
          Learn how to master medical education with our comprehensive platform. 
          Watch our tutorial to get started with interactive learning.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button class="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Start Learning Now
          </button>
          
          <button class="group flex items-center gap-3 bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
            <Play class="w-5 h-5 group-hover:scale-110 transition-transform" />
            Watch Platform Tutorial
          </button>
        </div>
        
        <!-- Platform Stats -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">50K+</div>
            <div class="text-white/80 drop-shadow-md">Practice Questions</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">25+</div>
            <div class="text-white/80 drop-shadow-md">Medical Courses</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">95%</div>
            <div class="text-white/80 drop-shadow-md">Success Rate</div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Scroll Indicator -->
    <div 
      class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" 
      @click="scrollToNextSection"
    >
      <div class="w-6 h-10 border-2 border-white rounded-full flex justify-center hover:bg-white/10 transition-colors">
        <div class="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Play } from 'lucide-vue-next';

const scrollToNextSection = () => {
  const nextSection = document.querySelector('#courses-section');
  nextSection?.scrollIntoView({
    behavior: 'smooth'
  });
};
</script> 
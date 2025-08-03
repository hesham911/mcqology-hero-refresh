<template>
  <section id="qbanks" class="py-20 bg-secondary/30">
    <div class="container mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-foreground mb-4">
          Universities We <span class="text-medical-green">Support</span>
        </h2>
        <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
          We support many leading medical universities and provide educational content tailored for each university
        </p>
      </div>

      <!-- University Logos Slider -->
      <div class="relative overflow-hidden py-8">
        <div 
          class="flex animate-infinite-scroll" 
          @mouseenter="pauseAnimation"
          @mouseleave="resumeAnimation"
        >
          <!-- First set of universities -->
          <div class="flex-shrink-0 w-32 h-32 bg-white rounded-lg shadow-md flex items-center justify-center border mr-8">
            <img src="/lovable-uploads/540413e5-ab8a-41ea-815e-0c2ea9f5d421.png" alt="Jordan University" class="w-20 h-20 object-contain" />
          </div>
          <div class="flex-shrink-0 w-32 h-32 bg-white rounded-lg shadow-md flex items-center justify-center border mr-8">
            <div class="text-center">
              <div class="text-sm font-bold text-medical-teal">Yarmouk</div>
              <div class="text-xs text-muted-foreground">University</div>
            </div>
          </div>
          <div class="flex-shrink-0 w-32 h-32 bg-white rounded-lg shadow-md flex items-center justify-center border mr-8">
            <div class="text-center">
              <div class="text-sm font-bold text-medical-teal">JUST</div>
              <div class="text-xs text-muted-foreground">University</div>
            </div>
          </div>
          <div class="flex-shrink-0 w-32 h-32 bg-white rounded-lg shadow-md flex items-center justify-center border mr-8">
            <div class="text-center">
              <div class="text-sm font-bold text-medical-teal">Mutah</div>
              <div class="text-xs text-muted-foreground">University</div>
            </div>
          </div>
          <div class="flex-shrink-0 w-32 h-32 bg-white rounded-lg shadow-md flex items-center justify-center border mr-8">
            <div class="text-center">
              <div class="text-sm font-bold text-medical-teal">Hashemite</div>
              <div class="text-xs text-muted-foreground">University</div>
            </div>
          </div>
          <div class="flex-shrink-0 w-32 h-32 bg-white rounded-lg shadow-md flex items-center justify-center border mr-8">
            <div class="text-center">
              <div class="text-sm font-bold text-medical-teal">Al-Balqa</div>
              <div class="text-xs text-muted-foreground">University</div>
            </div>
          </div>
          
          <!-- Duplicate set for seamless infinite loop -->
          <div class="flex-shrink-0 w-32 h-32 bg-white rounded-lg shadow-md flex items-center justify-center border mr-8">
            <img src="/lovable-uploads/540413e5-ab8a-41ea-815e-0c2ea9f5d421.png" alt="Jordan University" class="w-20 h-20 object-contain" />
          </div>
          <div class="flex-shrink-0 w-32 h-32 bg-white rounded-lg shadow-md flex items-center justify-center border mr-8">
            <div class="text-center">
              <div class="text-sm font-bold text-medical-teal">Yarmouk</div>
              <div class="text-xs text-muted-foreground">University</div>
            </div>
          </div>
          <div class="flex-shrink-0 w-32 h-32 bg-white rounded-lg shadow-md flex items-center justify-center border mr-8">
            <div class="text-center">
              <div class="text-sm font-bold text-medical-teal">JUST</div>
              <div class="text-xs text-muted-foreground">University</div>
            </div>
          </div>
          <div class="flex-shrink-0 w-32 h-32 bg-white rounded-lg shadow-md flex items-center justify-center border mr-8">
            <div class="text-center">
              <div class="text-sm font-bold text-medical-teal">Mutah</div>
              <div class="text-xs text-muted-foreground">University</div>
            </div>
          </div>
          <div class="flex-shrink-0 w-32 h-32 bg-white rounded-lg shadow-md flex items-center justify-center border mr-8">
            <div class="text-center">
              <div class="text-sm font-bold text-medical-teal">Hashemite</div>
              <div class="text-xs text-muted-foreground">University</div>
            </div>
          </div>
          <div class="flex-shrink-0 w-32 h-32 bg-white rounded-lg shadow-md flex items-center justify-center border mr-8">
            <div class="text-center">
              <div class="text-sm font-bold text-medical-teal">Al-Balqa</div>
              <div class="text-xs text-muted-foreground">University</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const pauseAnimation = (event: Event) => {
  const target = event.target as HTMLElement
  target.style.animationPlayState = 'paused'
}

const resumeAnimation = (event: Event) => {
  const target = event.target as HTMLElement
  target.style.animationPlayState = 'running'
}
</script> 
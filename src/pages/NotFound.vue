<template>
  <div class="min-h-screen bg-gradient-medical flex items-center justify-center p-4">
    <div class="text-center text-white">
      <div class="mb-8">
        <router-link to="/" class="inline-block bg-white rounded-lg p-3 shadow-soft hover:shadow-md transition-shadow">
          <img 
            src="/lovable-uploads/7fee58d2-510d-45f7-9b20-fa94ba74047b.png" 
            alt="McQology Logo" 
            class="h-12 w-auto"
          />
        </router-link>
      </div>
      
      <h1 class="text-6xl font-bold mb-4">404</h1>
      <h2 class="text-3xl font-bold mb-4">Page Not Found</h2>
      <p class="text-xl text-white/80 mb-8 max-w-md mx-auto">
        The page you're looking for doesn't exist. Please check the URL or navigate back to the homepage.
      </p>
      
      <router-link 
        to="/" 
        class="bg-medical-green hover:bg-medical-green/90 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-block"
      >
        Go Home
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
// NotFound component
</script> 
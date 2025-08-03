<template>
  <div class="min-h-screen">
    <Header />
    <div class="pt-20 pb-12 bg-gradient-medical">
      <div class="container mx-auto px-4 md:px-6 text-center text-white">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
          Partner
          <span class="text-medical-green">Universities</span>
        </h1>
        <p class="text-xl text-white/90 max-w-3xl mx-auto mb-8">
          We collaborate with leading medical universities across Jordan
        </p>
      </div>
    </div>
    <UniversitiesSection />
    <ContactSection />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
import UniversitiesSection from "@/components/UniversitiesSection.vue";
import ContactSection from "@/components/ContactSection.vue";
import Footer from "@/components/Footer.vue";
</script> 
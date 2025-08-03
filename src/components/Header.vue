<template>
  <header class="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
    <div class="container mx-auto px-4 md:px-6 py-2 md:py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center">
          <img src="/lovable-uploads/7fee58d2-510d-45f7-9b20-fa94ba74047b.png" alt="McQology Logo" class="h-6 md:h-10 w-auto" />
        </div>
        
        <!-- Navigation Links - Desktop -->
        <nav class="hidden md:flex items-center space-x-8">
          <a :href="isYearPage ? '/year' : '/'" class="text-foreground hover:text-primary transition-colors font-medium">Home</a>
          <a v-if="!isYearPage" href="#about" class="text-foreground hover:text-primary transition-colors font-medium" @click.prevent="scrollToSection('about')">
            About Us
          </a>
          <a v-if="!isYearPage" href="#why-choose" class="text-foreground hover:text-primary transition-colors font-medium" @click.prevent="scrollToSection('why-choose')">
            Why MCQology
          </a>
          <div v-if="isYearPage" class="relative group">
            <a href="#universities" class="text-foreground hover:text-primary transition-colors font-medium" @click.prevent="scrollToSection('universities')">
              Universities
            </a>
            
            <!-- Dropdown on hover -->
            <div class="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div class="p-4">
                <div class="space-y-2">
                  <a href="#" class="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded-md transition-colors">University of Cairo</a>
                  <a href="#" class="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded-md transition-colors">Alexandria University</a>
                  <a href="#" class="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded-md transition-colors">Ain Shams University</a>
                  <a href="#" class="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded-md transition-colors">Assiut University</a>
                  <a href="#" class="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded-md transition-colors">Mansoura University</a>
                  <a href="#" class="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded-md transition-colors">Zagazig University</a>
                </div>
              </div>
            </div>
          </div>
          <a v-if="!isYearPage" href="#team" class="text-foreground hover:text-primary transition-colors font-medium" @click.prevent="scrollToSection('team')">
            Team
          </a>
          <a v-if="!isYearPage" href="#years" class="text-foreground hover:text-primary transition-colors font-medium" @click.prevent="scrollToSection('years')">
            Cohort
          </a>
        </nav>

        <!-- CTA Buttons - Desktop -->
        <div class="hidden md:flex items-center space-x-4">
          <router-link to="/signin" class="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
            Sign In
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="isMenuOpen = !isMenuOpen" class="md:hidden p-2 text-foreground hover:text-primary transition-colors relative z-10" aria-label="Navigation menu">
          <X v-if="isMenuOpen" size="20" />
          <Menu v-else size="20" />
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMenuOpen" class="md:hidden mt-4 pb-4 border-t border-border">
        <nav class="flex flex-col space-y-6 mb-8">
          <a :href="isYearPage ? '/year' : '/'" class="text-foreground hover:text-primary transition-colors font-medium text-lg" @click="isMenuOpen = false">
            Home
          </a>
          <a v-if="!isYearPage" href="#about" class="text-foreground hover:text-primary transition-colors font-medium text-lg" @click.prevent="scrollToSection('about'); isMenuOpen = false">
            About Us
          </a>
          <a v-if="!isYearPage" href="#why-choose" class="text-foreground hover:text-primary transition-colors font-medium text-lg" @click.prevent="scrollToSection('why-choose'); isMenuOpen = false">
            Why MCQology
          </a>
          <a v-if="isYearPage" href="#universities" class="text-foreground hover:text-primary transition-colors font-medium text-lg" @click.prevent="scrollToSection('universities'); isMenuOpen = false">
            Universities
          </a>
          <a v-if="!isYearPage" href="#team" class="text-foreground hover:text-primary transition-colors font-medium text-lg" @click.prevent="scrollToSection('team'); isMenuOpen = false">
            Team
          </a>
          <a v-if="!isYearPage" href="#years" class="text-foreground hover:text-primary transition-colors font-medium text-lg" @click.prevent="scrollToSection('years'); isMenuOpen = false">
            Cohort
          </a>
          <a href="#contact" class="text-foreground hover:text-primary transition-colors font-medium text-lg" @click.prevent="scrollToSection('contact'); isMenuOpen = false">
            Contact
          </a>
        </nav>

        <div class="flex flex-col space-y-4">
          <router-link to="/signin" class="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors text-center" @click="isMenuOpen = false">
            Sign In
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Menu, X } from 'lucide-vue-next'

interface Props {
  isYearPage?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isYearPage: false
})

const isMenuOpen = ref(false)

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth'
    })
  }
}
</script> 
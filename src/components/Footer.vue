<template>
  <footer class="bg-primary text-primary-foreground">
    <div class="container mx-auto px-6 py-16">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Brand Section -->
        <div class="lg:col-span-2">
          <div class="mb-6">
            <img src="/lovable-uploads/540413e5-ab8a-41ea-815e-0c2ea9f5d421.png" alt="McQology Logo" class="h-8 w-auto mb-4 bg-white rounded px-2 py-1" />
            <p class="text-primary-foreground/80 leading-relaxed max-w-md">
              Empowering medical students across Jordan with comprehensive MCQ practice. 
              Master every question, excel in every exam.
            </p>
          </div>
          
          <div class="space-y-3">
            <div class="flex items-center space-x-3">
              <Mail class="w-5 h-5 text-medical-green" />
              <span class="text-primary-foreground/80">info@mcqology.com</span>
            </div>
            <div class="flex items-center space-x-3">
              <Phone class="w-5 h-5 text-medical-green" />
              <span class="text-primary-foreground/80">+962 6 XXX XXXX</span>
            </div>
            <div class="flex items-center space-x-3">
              <MapPin class="w-5 h-5 text-medical-green" />
              <span class="text-primary-foreground/80">Amman, Jordan</span>
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold mb-6 text-primary-foreground">Quick Links</h3>
          <ul class="space-y-3">
            <li>
              <a href="#home" class="text-primary-foreground/80 hover:text-medical-green transition-colors">
                Home
              </a>
            </li>
            <li>
              <router-link to="/courses" class="text-primary-foreground/80 hover:text-medical-green transition-colors">
                Courses
              </router-link>
            </li>
            <li>
              <a href="#qbanks" class="text-primary-foreground/80 hover:text-medical-green transition-colors">
                QBanks
              </a>
            </li>
            <li>
              <a href="#features" class="text-primary-foreground/80 hover:text-medical-green transition-colors">
                Features
              </a>
            </li>
            <li>
              <a href="#about" class="text-primary-foreground/80 hover:text-medical-green transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" class="text-primary-foreground/80 hover:text-medical-green transition-colors">
                Contact
              </a>
            </li>
            <li>
              <a href="#" class="text-primary-foreground/80 hover:text-medical-green transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="text-primary-foreground/80 hover:text-medical-green transition-colors">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        <!-- Universities -->
        <div>
          <h3 class="text-lg font-semibold mb-6 text-primary-foreground">Universities</h3>
          <ul class="space-y-3">
            <li>
              <a href="#" class="text-primary-foreground/80 hover:text-medical-green transition-colors">
                Jordan University
              </a>
            </li>
            <li>
              <a href="#" class="text-primary-foreground/80 hover:text-medical-green transition-colors">
                Yarmouk University
              </a>
            </li>
            <li>
              <a href="#" class="text-primary-foreground/80 hover:text-medical-green transition-colors">
                JUST
              </a>
            </li>
            <li>
              <a href="#" class="text-primary-foreground/80 hover:text-medical-green transition-colors">
                Mutah University
              </a>
            </li>
            <li>
              <a href="#" class="text-primary-foreground/80 hover:text-medical-green transition-colors">
                Hashemite University
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Social Links & Copyright -->
      <div class="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center">
        <div class="flex space-x-6 mb-4 md:mb-0">
          <a href="#" class="text-primary-foreground/80 hover:text-medical-green transition-colors">
            <Facebook class="w-5 h-5" />
          </a>
          <a href="#" class="text-primary-foreground/80 hover:text-medical-green transition-colors">
            <Twitter class="w-5 h-5" />
          </a>
          <a href="#" class="text-primary-foreground/80 hover:text-medical-green transition-colors">
            <Instagram class="w-5 h-5" />
          </a>
          <a href="#" class="text-primary-foreground/80 hover:text-medical-green transition-colors">
            <Linkedin class="w-5 h-5" />
          </a>
        </div>
        
        <div class="text-primary-foreground/60 text-sm">
          © 2024 McQology. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-vue-next'
</script> 
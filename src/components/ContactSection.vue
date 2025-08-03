<template>
  <section id="contact" class="py-20 bg-gradient-to-b from-background to-medical-teal/5">
    <div class="container mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-medical-teal mb-6">
          Contact Us
        </h2>
        <div class="w-24 h-1 bg-medical-green mx-auto mb-8"></div>
        <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
          We're here to help you. Contact us for support or any inquiries about our educational platform
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 items-start">
        <!-- Contact Information -->
        <div class="space-y-8">
          <div>
            <h3 class="text-2xl font-bold text-medical-teal mb-6">
              Contact Information
            </h3>
            <div class="space-y-6">
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-medical-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail class="w-6 h-6 text-medical-green" />
                </div>
                <div>
                  <h4 class="font-semibold text-medical-teal">Email</h4>
                  <p class="text-muted-foreground">info@mcqology.com</p>
                </div>
              </div>

              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-medical-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone class="w-6 h-6 text-medical-green" />
                </div>
                <div>
                  <h4 class="font-semibold text-medical-teal">Phone</h4>
                  <p class="text-muted-foreground">+962 6 123 4567</p>
                </div>
              </div>

              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-medical-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin class="w-6 h-6 text-medical-green" />
                </div>
                <div>
                  <h4 class="font-semibold text-medical-teal">Address</h4>
                  <p class="text-muted-foreground">Amman, Jordan</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Office Hours -->
          <div class="bg-card rounded-xl p-6 border border-medical-green/20">
            <h4 class="font-semibold text-medical-teal mb-4">Office Hours</h4>
            <div class="space-y-2 text-muted-foreground">
              <div class="flex justify-between">
                <span>Sunday - Thursday</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div class="flex justify-between">
                <span>Friday</span>
                <span>10:00 AM - 2:00 PM</span>
              </div>
              <div class="flex justify-between">
                <span>Saturday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-card rounded-xl p-8 border border-medical-green/20 shadow-glow">
          <h3 class="text-2xl font-bold text-medical-teal mb-6">
            Send us a Message
          </h3>
          <form class="space-y-6">
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-foreground mb-2">
                  First Name
                </label>
                <input 
                  type="text" 
                  placeholder="Enter first name" 
                  class="w-full px-4 py-3 border border-border rounded-lg focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-foreground mb-2">
                  Last Name
                </label>
                <input 
                  type="text" 
                  placeholder="Enter last name" 
                  class="w-full px-4 py-3 border border-border rounded-lg focus:border-primary focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input 
                type="email" 
                placeholder="Enter your email" 
                class="w-full px-4 py-3 border border-border rounded-lg focus:border-primary focus:outline-none"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-foreground mb-2">
                Subject
              </label>
              <input 
                type="text" 
                placeholder="Message subject" 
                class="w-full px-4 py-3 border border-border rounded-lg focus:border-primary focus:outline-none"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea 
                placeholder="Write your message here..."
                rows="6"
                class="w-full px-4 py-3 border border-border rounded-lg focus:border-primary focus:outline-none min-h-32"
              ></textarea>
            </div>

            <button 
              type="submit" 
              class="w-full bg-medical-green hover:bg-medical-green/90 text-white py-3 rounded-lg transition-all duration-300 hover:shadow-glow inline-flex items-center justify-center"
            >
              Send Message
              <Send class="w-5 h-5 ml-3" />
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Mail, Phone, MapPin, Send } from 'lucide-vue-next'
</script> 
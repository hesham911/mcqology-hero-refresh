<template>
  <div class="min-h-screen bg-gradient-to-b from-background to-medical-teal/5">
    <Header />
    <div class="pt-20 pb-12">
      <div class="container mx-auto px-4 md:px-6">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-4xl font-bold text-medical-teal mb-8">Profile</h1>
          
          <div class="bg-white rounded-2xl p-8 shadow-soft border border-border">
            <h2 class="text-2xl font-bold text-medical-teal mb-6">Account Information</h2>
            
            <form class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-foreground mb-2">First Name</label>
                  <input type="text" class="w-full px-4 py-3 border border-border rounded-lg focus:border-primary focus:outline-none" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-foreground mb-2">Last Name</label>
                  <input type="text" class="w-full px-4 py-3 border border-border rounded-lg focus:border-primary focus:outline-none" />
                </div>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-foreground mb-2">Email</label>
                <input type="email" class="w-full px-4 py-3 border border-border rounded-lg focus:border-primary focus:outline-none" />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-foreground mb-2">University</label>
                <select class="w-full px-4 py-3 border border-border rounded-lg focus:border-primary focus:outline-none">
                  <option>Jordan University</option>
                  <option>Yarmouk University</option>
                  <option>JUST</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-foreground mb-2">Academic Year</label>
                <select class="w-full px-4 py-3 border border-border rounded-lg focus:border-primary focus:outline-none">
                  <option>First Year</option>
                  <option>Second Year</option>
                  <option>Third Year</option>
                  <option>Fourth Year</option>
                </select>
              </div>
              
              <button type="submit" class="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Update Profile
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script> 
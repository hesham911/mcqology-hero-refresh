<template>
  <div class="min-h-screen bg-gradient-medical flex items-center justify-center p-4">
    <div class="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <!-- Left side - Welcome content -->
      <div class="text-center text-white space-y-8">
        <div class="space-y-6">
          <div class="flex justify-center">
            <router-link to="/" class="bg-white rounded-lg p-3 shadow-soft hover:shadow-md transition-shadow cursor-pointer">
              <img 
                src="/lovable-uploads/7fee58d2-510d-45f7-9b20-fa94ba74047b.png" 
                alt="McQology Logo" 
                class="h-12 w-auto"
              />
            </router-link>
          </div>
          
          <div class="space-y-4">
            <h1 class="text-5xl font-bold">
              Join McQology
            </h1>
            <p class="text-xl text-medical-green font-semibold">
              Start Your Medical Education Journey
            </p>
            <p class="text-lg text-white/80 max-w-md mx-auto leading-relaxed">
              Create your account and access thousands of medical MCQs, track your progress, and excel in your studies.
            </p>
          </div>
        </div>
      </div>

      <!-- Right side - Sign up form -->
      <div class="w-full max-w-md mx-auto">
        <div class="shadow-glow border-border/20 bg-background/95 backdrop-blur-sm rounded-lg border">
          <div class="p-6 text-center">
            <h2 class="text-3xl font-bold text-foreground">Sign Up</h2>
            <p class="text-muted-foreground mt-2">
              Create your account to get started
            </p>
          </div>
          <div class="p-6">
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="text-foreground font-medium block mb-2">First Name</label>
                  <input
                    v-model="formData.firstName"
                    type="text"
                    required
                    class="h-12 w-full bg-background border border-border focus:border-primary rounded-md px-3"
                  />
                </div>
                <div>
                  <label class="text-foreground font-medium block mb-2">Last Name</label>
                  <input
                    v-model="formData.lastName"
                    type="text"
                    required
                    class="h-12 w-full bg-background border border-border focus:border-primary rounded-md px-3"
                  />
                </div>
              </div>

              <div>
                <label class="text-foreground font-medium block mb-2">Email</label>
                <input
                  v-model="formData.email"
                  type="email"
                  required
                  class="h-12 w-full bg-background border border-border focus:border-primary rounded-md px-3"
                />
              </div>

              <div>
                <label class="text-foreground font-medium block mb-2">Password</label>
                <div class="relative">
                  <input
                    v-model="formData.password"
                    :type="showPassword ? 'text' : 'password'"
                    required
                    class="h-12 w-full bg-background border border-border focus:border-primary rounded-md px-3 pr-12"
                  />
                  <button
                    type="button"
                    @click="showPassword = !showPassword"
                    class="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <Eye v-if="!showPassword" class="w-5 h-5" />
                    <EyeOff v-else class="w-5 h-5" />
                  </button>
                </div>
              </div>

              <button
                type="submit"
                class="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Create Account
              </button>

              <div class="text-center">
                <p class="text-muted-foreground">
                  Already have an account? 
                  <router-link to="/signin" class="text-primary hover:underline font-medium">
                    Sign in
                  </router-link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Eye, EyeOff } from 'lucide-vue-next'

const showPassword = ref(false)
const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  password: ''
})

const handleSubmit = () => {
  console.log('Sign up form data:', formData.value)
}
</script> 
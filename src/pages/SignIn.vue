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
              Welcome Back
            </h1>
            <p class="text-xl text-medical-green font-semibold">
              Continue Your Learning Journey
            </p>
            <p class="text-lg text-white/80 max-w-md mx-auto leading-relaxed">
              Access your personalized dashboard, track your progress, and master thousands of medical MCQs.
            </p>
          </div>
          
          <div class="grid grid-cols-3 gap-6 max-w-sm mx-auto pt-4">
            <div class="text-center">
              <div class="text-2xl font-bold text-medical-green">98%</div>
              <div class="text-sm text-white/70">Success Rate</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-medical-green">5K+</div>
              <div class="text-sm text-white/70">Students</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-medical-green">10K+</div>
              <div class="text-sm text-white/70">Questions</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right side - Sign in form -->
      <div class="w-full max-w-md mx-auto">
        <div class="shadow-glow border-border/20 bg-background/95 backdrop-blur-sm rounded-lg border">
          <div class="p-6 text-center">
            <h2 class="text-3xl font-bold text-foreground">Sign In</h2>
            <p class="text-muted-foreground mt-2">
              Welcome back to your account
            </p>
          </div>
          <div class="p-6">
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="space-y-2">
                <label for="email" class="text-foreground font-medium block">Email</label>
                <input
                  id="email"
                  v-model="formData.email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  required
                  class="h-12 w-full bg-background border border-border focus:border-primary rounded-md px-3"
                />
              </div>

              <div class="space-y-2">
                <div class="flex items-center justify-between">
                  <label for="password" class="text-foreground font-medium block">Password</label>
                  <router-link to="/forgot-password" class="text-sm text-primary hover:underline">
                    Forgot password?
                  </router-link>
                </div>
                <div class="relative">
                  <input
                    id="password"
                    v-model="formData.password"
                    name="password"
                    :type="showPassword ? 'text' : 'password'"
                    placeholder="Enter your password"
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
                Sign In
              </button>

              <div class="text-center">
                <p class="text-muted-foreground">
                  Don't have an account? 
                  <router-link to="/signup" class="text-primary hover:underline font-medium">
                    Sign up
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
  email: '',
  password: ''
})

const handleSubmit = () => {
  // Here you would handle the form submission to your Laravel backend
  console.log('Sign in form data:', formData.value)
}
</script> 
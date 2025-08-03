<template>
  <div class="min-h-screen bg-gradient-medical flex items-center justify-center p-4">
    <div class="w-full max-w-md mx-auto">
      <div class="text-center mb-8">
        <router-link to="/" class="inline-block bg-white rounded-lg p-3 shadow-soft hover:shadow-md transition-shadow">
          <img 
            src="/lovable-uploads/7fee58d2-510d-45f7-9b20-fa94ba74047b.png" 
            alt="McQology Logo" 
            class="h-12 w-auto"
          />
        </router-link>
      </div>
      
      <div class="shadow-glow border-border/20 bg-background/95 backdrop-blur-sm rounded-lg border">
        <div class="p-6 text-center">
          <h2 class="text-3xl font-bold text-foreground">Forgot Password</h2>
          <p class="text-muted-foreground mt-2">
            Enter your email to reset your password
          </p>
        </div>
        <div class="p-6">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label class="text-foreground font-medium block mb-2">Email</label>
              <input
                v-model="email"
                type="email"
                required
                class="h-12 w-full bg-background border border-border focus:border-primary rounded-md px-3"
                placeholder="Enter your email address"
              />
            </div>

            <button
              type="submit"
              class="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Send Reset Link
            </button>

            <div class="text-center">
              <p class="text-muted-foreground">
                Remember your password? 
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
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')

const handleSubmit = () => {
  console.log('Forgot password email:', email.value)
}
</script> 
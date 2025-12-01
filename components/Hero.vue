<template>
  <!-- Hero Section: Main Landing Area with Background SVG -->
  <section 
    class="hero-section text-white py-6 md:py-12 relative overflow-visible"
  >
    <!-- Hero Content Container -->
    <div class="container mx-auto px-4 sm:px-6">
      <!-- Hero Text Content -->
      <div class="max-w-5xl mx-auto text-center mb-6 md:mb-8">
        <!-- Main Hero Heading -->
        <h1 class="text-xl sm:text-2xl md:text-4xl font-semibold mb-4 md:mb-6 leading-tight md:leading-[1.5] max-w-2xl mx-auto">
          The First 
          <!-- Highlighted Dart-Native Badge -->
          <span class="bg-[#F9A71E] px-2 py-1 md:py-1 rounded-md inline-block">
            <span class="bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent">
              Dart-Native
            </span>
          </span>
          Feature Flag With
          <span class="">DartCodeAI</span>
        </h1>
        <!-- Hero Subtitle -->
        <div class="max-w-xl mx-auto"> 
          <p class="text-base sm:text-lg md:text-xl lg:text-2xl mb-2 md:mb-3 text-white font-medium px-2">
          Feature flags built for Dart, Ship faster, roll back safely, and scale with AI-powered delivery
        </p>
        </div>
        <!-- Pricing Information -->
        <p class="text-[#F9A71E] mb-6 md:mb-8 text-lg sm:text-xl md:text-2xl font-medium">Starting at just $1/month</p>
        <!-- CTA Buttons Section -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-4">
          <!-- Primary CTA Button -->
          <div class="w-full sm:w-auto">
            <p class="text-xs sm:text-sm text-gray-300 mb-1.5 sm:mb-1 text-center sm:text-center">Valid till 15th September,2025</p>
            <button class="w-full sm:w-auto bg-[#F9A71E] hover:bg-[#F9A71E] px-6 sm:px-12 md:px-20 py-2.5 sm:py-2 md:py-1 rounded-md font-semibold text-sm sm:text-base md:text-lg transition">
              <span class="bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent">
                Get Access
              </span>
            </button>
          </div>
          <!-- Secondary CTA Button -->
          <div class="w-full sm:w-auto sm:pt-6">
            <button class="w-full sm:w-auto border border-[#F9A71E] hover:bg-[#F9A71E] px-6 sm:px-8 py-2.5 sm:py-2 md:py-1 rounded-md font-semibold text-sm sm:text-base md:text-lg transition">
              <span class="text-[#F9A71E]">
                Join AI Early Access
              </span>
            </button>
          </div>
        </div>
      </div>
      
      <!-- Hero Dashboard Image: Extends beyond background -->
      <div class="relative max-w-6xl mx-auto pt-8 sm:pt-10 md:pt-20 -mb-16 sm:-mb-12 md:-mb-20 lg:-mb-20">
        <img :src="heroImage" alt="Hero Image" class="w-full max-w-full h-auto mx-auto object-contain transform scale-100 sm:scale-105 md:scale-110 lg:scale-125">
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import heroImage from '../assets/images/hero-image.png'

</script>

<style scoped>
.hero-section {
  background-image: url('/images/hero-bg.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: visible;
  min-height: 100vh;
}

@media (max-width: 640px) {
  .hero-section {
    background-size: cover;
    background-position: top center;
    min-height: auto;
  }
}
</style>
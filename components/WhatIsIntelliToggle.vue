<template>
  <section class="py-8 sm:py-12 md:py-24 mt-8 sm:mt-12 md:mt-20">
    <div class="container mx-auto px-4 sm:px-6">
      <div class="mb-6 sm:mb-8 md:mb-10">
          <p class="text-center font-bold mb-6 sm:mb-8 md:mb-10 text-2xl sm:text-3xl md:text-4xl bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent">What is IntelliToggle?</p>
        </div>
      <div class="flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-center">
        
        <div class="w-full md:w-1/2">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-5 md:mb-6">
            Your AI Dart App's Control Panel For Feature Releases
          </h2>
          <p class="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-5 md:mb-6">
            IntelliToggle provides a powerful, Dart-native solution for managing feature flags in your applications. 
            With AI-powered insights and seamless integration, you can ship features faster and with more confidence.
          </p>
          <ul class="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600">
            <li class="flex items-start">
              <span class="text-black mr-2 flex-shrink-0">•</span>
              <span>Native Dart SDK for seamless integration</span>
            </li>
            <li class="flex items-start">
              <span class="text-black mr-2 flex-shrink-0">•</span>
              <span>AI-powered rollout optimization</span>
            </li>
            <li class="flex items-start">
              <span class="text-black mr-2 flex-shrink-0">•</span>
              <span>Real-time monitoring and analytics</span>
            </li>
            <li class="flex items-start">
              <span class="text-black mr-2 flex-shrink-0">•</span>
              <span>Team-focused role-based access control</span>
            </li>
          </ul>
        </div>
        <div class="w-full md:w-1/2 order-first md:order-last">
          <img :src="image1" alt="Image 1" class="w-full h-auto object-cover rounded-lg">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import image1 from '../assets/images/image-1.png'


</script>
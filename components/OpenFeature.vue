<template>
  <section class="bg-[#EDECF6] py-8 sm:py-12 md:py-16 lg:py-24">
    <div class="container mx-auto px-4 sm:px-6">
      <div class="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
        <div class="flex justify-center items-center order-2 md:order-1">
          <img :src="image2" alt="Image 2" class="w-full max-w-sm sm:max-w-md md:max-w-lg lg:w-auto lg:h-auto">
        </div>
        <div class="p-4 sm:p-8 md:p-12 lg:p-20 order-1 md:order-2">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-5 md:mb-6">
            Seamless Feature Management with OpenFeature
          </h2>
          <p class="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-5 md:mb-6">
            IntelliToggle is built on the OpenFeature standard, ensuring compatibility and interoperability 
            with your existing tooling and workflows. Manage your feature flags with confidence.
          </p>
          <button class="w-full sm:w-auto bg-[#F9A71E] hover:bg-[#F9A71E] px-6 py-2.5 sm:py-2 rounded-md font-medium transition">
            <span class="bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent flex items-center justify-center sm:justify-start">
              Learn More <Icon name="heroicons:arrow-right" class="ml-2 w-4 h-4 text-black" />
            </span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import image2 from '../assets/images/image-2.png'
import { Icon } from '@iconify/vue'
</script>


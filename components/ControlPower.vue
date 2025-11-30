<template>
  <section class="py-8 sm:py-12 md:py-16 lg:py-24">
    <div class="container mx-auto px-4 sm:px-6">
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8 sm:mb-10 md:mb-12">
        Control & Power-focused
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        <!-- Connect -->
        <div class="flex flex-col">
          <div class="flex items-center justify-center mb-4 sm:mb-6">
            <img :src="connectImage" alt="Connect" class="w-full h-auto">
          </div>
          <div class="pt-4 text-left">
            <h3 class="text-lg sm:text-xl font-medium text-gray-800 mb-2 ">Connect</h3>
            <p class="text-sm sm:text-base text-[#5F5F60] mb-4">Install SDK in your Dart application in 2 mins.</p>
            <button class="w-fit border border-[#F9A71E] hover:bg-[#F9A71E] px-4 py-2.5 sm:py-2 rounded-md font-normal text-[#F9A71E] hover:text-black transition text-sm">
              View Documentation
            </button>
          </div>
        </div>

        <!-- Create Flags -->
        <div class="flex flex-col">
          <div class="flex items-center justify-center mb-4 sm:mb-6">
            <img :src="createImage" alt="Create Flags" class="w-full h-auto">
          </div>
          <div class="pt-4 text-left">
            <h3 class="text-lg sm:text-xl font-medium text-gray-800 mb-2">Create Flags</h3>
            <p class="text-sm sm:text-base text-[#5F5F60] mb-4">Build new features in IntelliToggle's powerful dashboard.</p>
            <button class="w-fit border border-[#F9A71E] hover:bg-[#F9A71E] px-4 py-2.5 sm:py-2 rounded-md font-normal text-[#F9A71E] hover:text-black transition text-sm">
              View Documentation
            </button>
          </div>
        </div>

        <!-- Ship & Control -->
        <div class="flex flex-col sm:col-span-2 md:col-span-1">
          <div class="flex items-center justify-center mb-4 sm:mb-6">
            <img :src="shipImage" alt="Ship & Control" class="w-full h-auto">
          </div>
          <div class="pt-4 text-left">
            <h3 class="text-lg sm:text-xl font-medium text-gray-800 mb-2">Ship & Control</h3>
            <p class="text-sm sm:text-base text-[#5F5F60] mb-4">Ship features confidently, roll back safely, and monitor results.</p>
            <button class="w-fit border border-[#F9A71E] hover:bg-[#F9A71E] px-4 py-2.5 sm:py-2 rounded-md font-normal text-[#F9A71E] hover:text-black transition text-sm">
              View Documentation
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import connectImage from '../assets/images/connect.png'
import createImage from '../assets/images/create.png'
import shipImage from '../assets/images/ship.png'

</script>
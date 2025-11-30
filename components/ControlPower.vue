<template>
  <section class=" py-16 md:py-24">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
        Control & Power-focused
      </h2>
      <div class="grid md:grid-cols-3 gap-8">
        <!-- Connect -->
        <div class="">
          <div class=" flex items-center justify-center">
            <img :src="connectImage" alt="Connect" class="w-full h-full object-contain">
          </div>
          <div class="pt-6">
            <h3 class="text-xl font-medium text-gray-800 mb-2">Connect</h3>
            <p class="text-[#5F5F60] mb-4">Install SDK in your Dart application in 2 mins.</p>
            <button class="border border-[#F9A71E] hover:bg-[#F9A71E] px-4 py-2 rounded-md font-regular text-[#F9A71E] hover:text-black transition text-sm">
              View Documentation
            </button>
          </div>
        </div>

        <!-- Create Flags -->
        <div class="">
          <div class=" flex items-center justify-center">
            <img :src="createImage" alt="Create Flags" class="w-full h-full object-contain">
          </div>
          <div class="pt-6">
            <h3 class="text-xl font-medium text-gray-800 mb-2">Create Flags</h3>
            <p class="text-[#5F5F60] mb-4">Build new features in IntelliToggle's powerful dashboard.</p>
            <button class="border border-[#F9A71E] hover:bg-[#F9A71E] px-4 py-2 rounded-md font-regular text-[#F9A71E] hover:text-black transition text-sm">
              View Documentation
            </button>
          </div>
        </div>

        <!-- Ship & Control -->
        <div class="">
          <div class=" flex items-center justify-center">
            <img :src="shipImage" alt="Ship & Control" class="w-full h-full object-contain">
          </div>
          <div class="pt-6">
            <h3 class="text-xl font-medium text-gray-800 mb-2">Ship & Control</h3>
            <p class="text-[#5F5F60] mb-4">Ship features confidently, roll back safely, and monitor results.</p>
            <button class="border border-[#F9A71E] hover:bg-[#F9A71E] px-4 py-2 rounded-md font-regular text-[#F9A71E] hover:text-black transition text-sm">
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
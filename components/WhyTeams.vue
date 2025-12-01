<template>
  <section class="bg-white py-16 md:py-24 max-w-7xl mx-auto">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent">
          Why Teams Use IntelliToggle
        </h2>
      
      <div class="grid md:grid-cols-3 gap-x-20 mb-12">
        <!-- Safer, faster rollouts -->
        <div class="flex flex-col items-start justify-center">
          <div class="w-20 h-20 p-6 border border-black bg-[#EDECF6] rounded-lg flex items-start justify-start  mb-8 ">
              <img :src="icon1" alt="Safer, faster rollouts" class="w-full h-auto">

            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3">Safer, faster rollouts</h3>
            <p class="text-[#5F5F60] text-sm">
            Deploy features confidently with automated rollbacks and performance monitoring, reducing risk and improving reliability.
          </p>
        </div>

        <!-- Confidence to ship -->
        <div class="flex flex-col items-start justify-center">
          <div class="w-20 h-20 p-6 border border-black bg-[#EDECF6] rounded-lg flex items-start justify-start  mb-8 ">
            <img :src="icon2" alt="Confidence to ship" class="w-full h-auto">
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-3">Confidence to ship</h3>
          <p class="text-[#5F5F60] text-sm">
            Ship features with confidence, knowing that you can control who sees what, and when, with granular targeting.
          </p>
        </div>

        <!-- Future-ready with AI -->
        <div class="flex flex-col items-start justify-center">
          <div class="w-20 h-20 p-6 border border-black bg-[#EDECF6] rounded-lg flex items-start justify-start  mb-8 ">
            <img :src="icon3" alt="Future-ready with AI" class="w-full h-auto">
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-3">Future-ready with AI delivery</h3>
          <p class="text-[#5F5F60] text-sm">
            Leverage AI to optimize feature rollouts, segment users, and gain insights, ensuring your app stays ahead.
          </p>
        </div>
      </div>

      <div class="flex items-center justify-between bg-[#EDECF6] rounded-lg p-4 border border-[#EDECF6] shadow-xl">
        <p class="text-[#5F5F60] font-bold text-lg flex items-center gap-2">
          <span class="text-black">Read a 2-min case study:</span> How a sample Flutter app ships features with IntelliToggle
        </p>
        <button class="bg-[#F9A71E] hover:bg-[#F9A71E] px-8 py-2 rounded-md font-medium text-black transition">
          Read Now
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import icon1 from '../assets/images/icon-1.png'
import icon2 from '../assets/images/icon-2.png'
import icon3 from '../assets/images/icon-3.png'

</script>
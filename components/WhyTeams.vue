<template>
  <section class="bg-white py-8 sm:py-12 md:py-16 lg:py-24 max-w-7xl mx-auto">
    <div class="container mx-auto px-4 sm:px-6">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12 bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent">
          Why Teams Use IntelliToggle
        </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 md:gap-x-20 mb-8 sm:mb-10 md:mb-12">
        <!-- Safer, faster rollouts -->
        <div class="flex flex-col items-start justify-center">
          <div class="w-16 h-16 sm:w-20 sm:h-20 p-4 sm:p-6 border border-black bg-[#EDECF6] rounded-lg flex items-start justify-start mb-6 sm:mb-8">
              <img :src="icon1" alt="Safer, faster rollouts" class="w-full h-auto">

            </div>
            <h3 class="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Safer, faster rollouts</h3>
            <p class="text-[#5F5F60] text-xs sm:text-sm">
            Deploy features confidently with automated rollbacks and performance monitoring, reducing risk and improving reliability.
          </p>
        </div>

        <!-- Confidence to ship -->
        <div class="flex flex-col items-start justify-center">
          <div class="w-16 h-16 sm:w-20 sm:h-20 p-4 sm:p-6 border border-black bg-[#EDECF6] rounded-lg flex items-start justify-start mb-6 sm:mb-8">
            <img :src="icon2" alt="Confidence to ship" class="w-full h-auto">
          </div>
          <h3 class="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Confidence to ship</h3>
          <p class="text-[#5F5F60] text-xs sm:text-sm">
            Ship features with confidence, knowing that you can control who sees what, and when, with granular targeting.
          </p>
        </div>

        <!-- Future-ready with AI -->
        <div class="flex flex-col items-start justify-center">
          <div class="w-16 h-16 sm:w-20 sm:h-20 p-4 sm:p-6 border border-black bg-[#EDECF6] rounded-lg flex items-start justify-start mb-6 sm:mb-8">
            <img :src="icon3" alt="Future-ready with AI" class="w-full h-auto">
          </div>
          <h3 class="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Future-ready with AI delivery</h3>
          <p class="text-[#5F5F60] text-xs sm:text-sm">
            Leverage AI to optimize feature rollouts, segment users, and gain insights, ensuring your app stays ahead.
          </p>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 bg-[#EDECF6] rounded-lg p-4 sm:p-6 border border-[#EDECF6] shadow-xl">
        <p class="text-[#5F5F60] font-bold text-sm sm:text-base md:text-lg flex flex-col sm:flex-row items-start sm:items-center gap-2 flex-1">
          <span class="text-black">Read a 2-min case study:</span> How a sample Flutter app ships features with IntelliToggle
        </p>
        <button class="w-full sm:w-auto bg-[#F9A71E] hover:bg-[#F9A71E] px-6 sm:px-8 py-2 sm:py-2.5 rounded-md font-medium text-black transition text-sm sm:text-base">
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
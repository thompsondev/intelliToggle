<template>
    <section class="bg-gradient-to-b from-[#42389E] to-[#0F1026] py-8 sm:py-12 md:py-16 lg:py-24 relative overflow-hidden">
    <div class="container mx-auto px-4 sm:px-6 relative z-10">
      <div class="flex justify-center mb-4 sm:mb-6">
        <button class="bg-[#F9A71E] hover:bg-[#F9A71E] px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 rounded-full font-semibold text-sm sm:text-base md:text-lg text-black transition">
          Coming Soon
        </button>
      </div>
      <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center mb-8 sm:mb-10 md:mb-12">
        DartCodeAI That Actually Changes Flagging
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-16 lg:gap-28 mb-8 sm:mb-10 md:mb-12">
        <!-- IntelliFlag AI -->
        <div class="bg-white/10 backdrop-blur-md rounded-lg p-4 sm:p-5 md:p-6 flex flex-col items-center justify-center border border-white/30 shadow-lg">
          <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-lg flex items-center justify-center mb-3 sm:mb-4">
            <img :src="icon1" alt="AutoFlag AI" class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-contain">
          </div>
          <h3 class="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 text-center">AutoFlag AI (LLM-Assisted Flag Creation)</h3>
          <p class="text-gray-200 text-center text-sm sm:text-base">
            Create new flags just by typing what you need. The AI names it, sets rules, and configures targeting for you..          
          </p>
        </div>

        <!-- SmartRamp AI -->
        <div class="bg-white/10 backdrop-blur-md rounded-lg p-4 sm:p-5 md:p-6 flex flex-col items-center justify-center border border-white/30 shadow-lg">
          <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-lg flex items-center justify-center mb-3 sm:mb-4">
            <img :src="icon2" alt="SmartRamp AI" class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-contain">
          </div>
          <h3 class="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 text-center">SmartRamp AI (AI-Driven Rollout Optimization)</h3>
          <p class="text-gray-200 text-center text-sm sm:text-base">
            SmartRamp AI intelligently optimizes feature rollouts based on user behavior and performance metrics.
          </p>
        </div>

        <!-- SmartRamp AI -->
        <div class="bg-white/10 backdrop-blur-md rounded-lg p-4 sm:p-5 md:p-6 flex flex-col items-center justify-center border border-white/30 shadow-lg">
          <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-lg flex items-center justify-center mb-3 sm:mb-4">
            <img :src="icon3" alt="AutoSegment AI" class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-contain">
          </div>
          <h3 class="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 text-center">AutoSegment AI (Behavioral Segmentation)</h3>
          <p class="text-gray-200 text-center text-sm sm:text-base">
            AutoSegment AI automatically segments users based on their behavior, enabling precise targeting for feature flags.
          </p>
        </div>

        <!-- IntelliFlag AI -->
        <div class="bg-white/10 backdrop-blur-md rounded-lg p-4 sm:p-5 md:p-6 flex flex-col items-center justify-center border border-white/30 shadow-lg">
          <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-lg flex items-center justify-center mb-3 sm:mb-4">
            <img :src="icon4" alt="IntelliFlag AI" class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-contain">
          </div>
          <h3 class="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 text-center">IntelliFlag AI (AI-Assisted Flag Creation)</h3>
          <p class="text-gray-200 text-center text-sm sm:text-base">
            IntelliFlag AI quickly generates feature flags, complete with rollout rules, and test configurations, reducing manual effort.
          </p>
        </div>

      </div>

      <div class="text-center space-y-4 sm:space-y-6">
        <span class="text-[#F9A71E] text-base sm:text-lg md:text-[20px] font-bold block mb-4 sm:mb-6 md:mb-8">
          Enterprise Only
        </span>
       <div class="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 p-4 sm:p-5 md:p-6 bg-white/10 backdrop-blur-md rounded-lg border border-white/30 shadow-lg">
        <p class="text-white text-base sm:text-lg md:text-xl font-bold text-center md:text-left"><span class="text-[#F9A71E] font-bold">Be The First </span>To Try Out Our New AI Features.</p>
        <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 md:gap-6 lg:gap-20 border border-white/30 rounded-lg p-3 sm:p-2 w-full md:w-auto">
          <p class="text-[#EDECF680] text-xs sm:text-sm text-center sm:text-left">Enter email address</p>
          <button class="bg-[#F9A71E] hover:bg-[#F9A71E] px-4 sm:px-6 md:px-8 py-2 rounded-md font-semibold text-sm sm:text-base md:text-lg text-black transition w-full sm:w-auto">
          Join AI Early Access
          </button>
        </div>
       </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import frameImage from '../assets/images/Frame.svg'
import icon1 from '../assets/images/i-con-1.png'
import icon2 from '../assets/images/i-con-2.png'
import icon3 from '../assets/images/i-con-3.png'
import icon4 from '../assets/images/i-con-4.png'
</script>
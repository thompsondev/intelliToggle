<template>
  <!-- Final CTA Section: Last Call-to-Action with Pattern Background -->
  <div class="px-4 sm:px-6 md:px-8 lg:px-10 mb-8 sm:mb-12 md:mb-16 lg:mb-20">
    <section class="bg-gradient-to-b from-[#42389E] to-[#0F1026] py-8 sm:py-12 md:py-16 lg:py-24 relative overflow-hidden max-w-7xl mx-auto rounded-xl my-8 sm:my-12 md:my-16 lg:my-20">
    <!-- Background Pattern -->
    <div class="absolute inset-0 pattern-bg">
    </div>
    <!-- CTA Content Container -->
    <div class="container mx-auto px-4 sm:px-6 text-center relative z-10 max-w-lg">
      <!-- CTA Heading -->
      <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-5 md:mb-6">
        Launch Features Confidently With AI Driven Feature Flags
      </h2>
      <!-- CTA Subtitle -->
      <p class="text-sm sm:text-base md:text-lg text-gray-200 mb-6 sm:mb-7 md:mb-8 max-w-2xl mx-auto">
        Start for free, scale as your team grows
      </p>
      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
        <!-- Primary CTA Button -->
        <button class="w-full sm:w-auto bg-[#F9A71E] hover:bg-[#F9A71E] px-6 sm:px-8 py-2 sm:py-2.5 rounded-md font-semibold text-sm sm:text-base md:text-lg text-black transition">
          Start for $1/mo
        </button>
        <!-- Secondary CTA Button -->
        <button class="w-full sm:w-auto border border-[#F9A71E] hover:bg-[#F9A71E] px-6 sm:px-8 py-2 sm:py-2.5 rounded-md font-semibold text-sm sm:text-base md:text-lg text-[#F9A71E] hover:text-black transition">
          Join AI Early Access
        </button>
      </div>
    </div>
  </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.pattern-bg {
  background-image: url('/images/Background_pattern.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
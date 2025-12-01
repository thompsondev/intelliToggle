<template>
  <!-- Footer Section: Site Footer with Links & Newsletter -->
  <footer class="bg-gray-100 py-8 sm:py-10 md:py-28">
    <!-- Footer Container -->
    <div class="container mx-auto px-4 sm:px-6">
      <!-- Footer Grid: Logo, Links, Newsletter -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-6 md:gap-4 mb-8 footer-grid">
        <!-- Column 1: Logo & Company Info -->
        <div class="pr-0 md:pr-20 lg:pr-40">
          <!-- Logo -->
          <div class="flex items-center space-x-2 mb-4">
            <img :src="logoImage" alt="IntelliToggle" class="w-32 sm:w-36 md:w-40 h-auto">
          </div>
          <!-- Company Description -->
          <p class="text-sm sm:text-base text-gray-600">IntelliToggle is built by AORTEM, a company focused on powering scalable, multi-platform developer tools.</p>
        </div>

        <!-- Column 2: Resources Links -->
        <div>
          <h4 class="font-semibold text-gray-800 mb-3 sm:mb-4 text-base sm:text-lg">Resources</h4>
          <!-- Resources Links List -->
          <ul class="space-y-2 text-gray-600">
            <li><a href="#" class="bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent hover:text-[#F9A71E] transition font-bold text-sm sm:text-base">Documentation</a></li>
            <li><a href="#" class="bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent hover:text-[#F9A71E] transition font-bold text-sm sm:text-base">Blog</a></li>
            <li><a href="#" class="bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent hover:text-[#F9A71E] transition font-bold text-sm sm:text-base">Twitter</a></li>
            <li><a href="#" class="bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent hover:text-[#F9A71E] transition font-bold text-sm sm:text-base">Slack</a></li>
            <li><a href="#" class="bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent hover:text-[#F9A71E] transition font-bold text-sm sm:text-base">Privacy Policy</a></li>
          </ul>
        </div>

        <!-- Column 3: Company Links -->
        <div>
          <h4 class="font-semibold text-gray-800 mb-3 sm:mb-4 text-base sm:text-lg">Company</h4>
          <!-- Company Links List -->
          <ul class="space-y-2 text-gray-600">
            <li><a href="#" class="bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent hover:text-[#F9A71E] transition font-bold text-sm sm:text-base">About</a></li>
            <li><a href="#" class="bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent hover:text-[#F9A71E] transition font-bold text-sm sm:text-base">Awards</a></li>
            <li><a href="#" class="bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent hover:text-[#F9A71E] transition font-bold text-sm sm:text-base">Documentation</a></li>
          </ul>
        </div>

        <!-- Column 4: Newsletter Subscription -->
        <div class="pl-0 md:pl-20 lg:pl-40 flex flex-col items-start justify-center">
          <!-- Newsletter Heading -->
          <h4 class="bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent font-bold mb-3 sm:mb-4 text-base sm:text-lg">Subscribe to Newsletter</h4>
          <!-- Email Input & Subscribe Button -->
          <form class="flex flex-col sm:flex-row w-full sm:w-auto gap-2 sm:gap-0" @submit.prevent>
            <label for="newsletter-email" class="sr-only">Your email</label>
            <input
              type="email"
              id="newsletter-email"
              placeholder="Your email"
              class="w-full sm:w-auto flex-1 px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-md sm:rounded-l-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-[#4A148C]"
            />
            <button type="submit" class="w-fit bg-[#F9A71E] hover:bg-[#F9A71E] px-4 sm:px-6 py-2 rounded-md sm:rounded-l-none sm:rounded-r-md text-black transition flex items-center justify-center gap-2 font-bold text-sm sm:text-base">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import logoImage from '../assets/images/black-logo.png'
</script>

<style scoped>
@media (min-width: 768px) {
  .footer-grid {
    grid-template-columns: 2fr 1fr 1fr 2fr;
  }
}
</style>
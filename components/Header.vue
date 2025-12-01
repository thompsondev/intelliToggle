<template>
  <!-- Header Section: Sticky Navigation Bar -->
  <header class="sticky top-0 z-50 bg-[#42389E] text-white">
    <!-- Navigation Container -->
    <nav class="container mx-auto px-4 py-8">
      <!-- Main Navigation Row -->
      <div class="flex items-center justify-between">
        <!-- Logo Section -->
        <div class="flex items-center space-x-2 flex-1">
          <img :src="logoImage" alt="IntelliToggle" class="h-10 w-auto" />
        </div>

        <!-- Desktop Navigation Links - Centered -->
        <ul class="hidden md:flex items-center space-x-24 flex-1 justify-center list-none" role="list">
          <li><a href="#home" class="hover:text-orange-400 transition font-bold text-xl">Home</a></li>
          <li><a href="#about" class="hover:text-orange-400 transition font-regular text-xl">About</a></li>
          <li><a href="#pricing" class="hover:text-orange-400 transition font-regular text-xl">Pricing</a></li>
        </ul>

        <!-- Right Side Actions: Mobile Menu Toggle & CTA Button -->
        <div class="flex items-center justify-end flex-1">
          <!-- Mobile Menu Toggle Button -->
          <button
            @click="toggleMobileMenu"
            class="md:hidden p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                v-if="!isMobileMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <button class="hidden md:block bg-[#F9A71E] hover:bg-[#F9A71E] px-6 py-2 rounded-md font-medium transition">
            <span class="bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent">
              Start Sandbox
            </span>
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <transition name="slide-right">
      <nav
        v-if="isMobileMenuOpen"
        class="md:hidden fixed inset-0 bg-white h-screen w-full z-50 mobile-menu flex flex-col"
        aria-label="Mobile navigation menu"
      >
        <!-- Close Button - Top Right -->
        <div class="flex justify-end p-4">
          <button
            @click="toggleMobileMenu"
            class="p-2 focus:outline-none"
            aria-label="Close menu"
          >
            <svg
              class="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        
        <!-- Centered Content -->
        <div class="flex-1 flex flex-col items-center justify-center px-4 space-y-8">
          <!-- Logo -->
          <div class="mb-8">
            <img :src="blackLogoImage" alt="IntelliToggle" class="h-10 w-auto mx-auto" />
          </div>
          
          <!-- Navigation Links -->
          <ul class="space-y-6 text-center list-none">
            <li><a href="#home" @click="toggleMobileMenu" class="block bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent font-bold text-xl transition">Home</a></li>
            <li><a href="#about" @click="toggleMobileMenu" class="block bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent font-bold text-xl transition">About</a></li>
            <li><a href="#pricing" @click="toggleMobileMenu" class="block bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent font-bold text-xl transition">Pricing</a></li>
          </ul>
          
          <!-- Button -->
          <button class="bg-[#F9A71E] hover:bg-[#F9A71E] px-6 py-2 rounded-md font-medium transition mt-8">
            <span class="bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent">
              Start Sandbox
            </span>
          </button>
        </div>
      </nav>
    </transition>
  </header>
</template>

<script setup>
import logoImage from '~/assets/images/logo.png'
import blackLogoImage from '~/assets/images/black-logo.png'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<style scoped>
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.3s ease-in-out;
}

.slide-right-enter-from {
  transform: translateX(100%);
}

.slide-right-enter-to {
  transform: translateX(0);
}

.slide-right-leave-from {
  transform: translateX(0);
}

.slide-right-leave-to {
  transform: translateX(100%);
}
</style>


<template>
  <header class="bg-[#42389E] text-white">
    <nav class="container mx-auto px-4 py-8">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center space-x-2 flex-1">
          <img :src="logoImage" alt="IntelliToggle" class="h-10 w-auto" />
        </div>

        <!-- Desktop Navigation - Centered -->
        <div class="hidden md:flex items-center space-x-24 flex-1 justify-center">
          <a href="#home" class="hover:text-orange-400 transition font-bold text-xl">Home</a>
          <a href="#about" class="hover:text-orange-400 transition font-regular text-xl">About</a>
          <a href="#pricing" class="hover:text-orange-400 transition font-regular text-xl">Pricing</a>
        </div>

        <!-- Right Side - Button or Mobile Menu -->
        <div class="flex items-center justify-end flex-1">
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
    <div
      v-if="isMobileMenuOpen"
      class="md:hidden bg-[#4A148C] border-t border-purple-700"
    >
      <div class="container mx-auto px-4 py-4 space-y-6">
        <a href="#home" class="block hover:text-orange-400 transition">Home</a>
        <a href="#about" class="block hover:text-orange-400 transition">About</a>
        <a href="#pricing" class="block hover:text-orange-400 transition">Pricing</a>
        <button class="w-full bg-[#F9A71E] hover:bg-[#F9A71E] px-6 py-2 rounded-md font-medium transition">
          <span class="bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent">
            Start Sandbox
          </span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import logoImage from '~/assets/images/logo.png'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>


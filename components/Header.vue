<template>
  <header class="bg-[#4A148C] text-white">
    <nav class="container mx-auto px-4 py-4 flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center space-x-2">
        <div class="w-10 h-10 bg-white rounded flex items-center justify-center">
          <span class="text-[#4A148C] font-bold text-xl">IT</span>
        </div>
        <span class="text-xl font-semibold">IntelliToggle</span>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-6">
        <a href="#home" class="hover:text-orange-400 transition">Home</a>
        <button class="bg-[#FF6B35] hover:bg-[#FF8555] px-6 py-2 rounded-md font-medium transition">
          Start Sandbox
        </button>
      </div>

      <!-- Mobile Menu Button -->
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
    </nav>

    <!-- Mobile Menu -->
    <div
      v-if="isMobileMenuOpen"
      class="md:hidden bg-[#4A148C] border-t border-purple-700"
    >
      <div class="container mx-auto px-4 py-4 space-y-4">
        <a href="#home" class="block hover:text-orange-400 transition">Home</a>
        <button class="w-full bg-[#FF6B35] hover:bg-[#FF8555] px-6 py-2 rounded-md font-medium transition">
          Start Sandbox
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>


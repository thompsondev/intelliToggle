<template>
  <!-- Trusted By Section: Company Logos -->
  <section class="bg-white py-8 sm:py-10 md:py-12 mt-16 sm:mt-32 md:mt-48 lg:mt-72">
    <!-- Trusted By Container -->
    <div class="container mx-auto px-4 sm:px-6">
      <!-- Section Heading -->
      <h2 class="text-center font-bold mb-6 sm:mb-8 md:mb-10 text-lg sm:text-xl md:text-2xl">Trusted by various engineering teams</h2>
      <!-- Company Logos Grid -->
      <div class="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-20" role="list" aria-label="Trusted companies">
        <div class="flex-shrink-0">
          <img :src="googleCloud" alt="Google Cloud" class="w-16 h-auto sm:w-20 md:w-24 lg:w-auto max-h-8 sm:max-h-10 md:max-h-12 lg:max-h-none">
        </div>
        <div class="flex-shrink-0">
          <img :src="amazon" alt="AWS" class="w-16 h-auto sm:w-20 md:w-24 lg:w-auto max-h-8 sm:max-h-10 md:max-h-12 lg:max-h-none">
        </div>
        <div class="flex-shrink-0">
          <img :src="azure" alt="Azure" class="w-16 h-auto sm:w-20 md:w-24 lg:w-auto max-h-8 sm:max-h-10 md:max-h-12 lg:max-h-none">
        </div>
        <div class="flex-shrink-0">
          <img :src="ocean" alt="DigitalOcean" class="w-16 h-auto sm:w-20 md:w-24 lg:w-auto max-h-8 sm:max-h-10 md:max-h-12 lg:max-h-none">
        </div>
        <div class="flex-shrink-0">
          <img :src="ibm" alt="IBM" class="w-16 h-auto sm:w-20 md:w-24 lg:w-auto max-h-8 sm:max-h-10 md:max-h-12 lg:max-h-none">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import googleCloud from '../assets/images/google_cloud.png'
import azure from '../assets/images/azure.png'
import amazon from '../assets/images/amazon.png'
import ocean from '../assets/images/ocean.png'
import ibm from '../assets/images/ibm.png'

</script>


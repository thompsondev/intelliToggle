<template>
  <!-- Comparison Table Section: Feature Comparison -->
  <section class="bg-white py-8 sm:py-12 md:py-16 lg:py-24">
    <!-- Section Container -->
    <div class="container mx-auto px-4 sm:px-6">
      <!-- Content Wrapper -->
      <div class="max-w-7xl mx-auto">
        <!-- Section Heading -->
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-5 md:mb-6 bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent">
          Dart-Powered Feature Flag
        </h2>
        <!-- Subheading -->
        <p class="text-center mb-2 bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent font-bold text-lg sm:text-xl md:text-2xl">Not Another Generic Feature Flag Tool</p>
        <!-- Description -->
        <p class="text-center mb-8 sm:mb-10 md:mb-12 max-w-xl mx-auto text-[#5F5F60] text-xs sm:text-sm px-2">
          Most tools are built for every language, which means extra layers and slower toggles. IntelliToggle is built in Dart, for Dart — so it's faster, safer, and built for your stack.
        </p>

        <!-- Comparison Table Container -->
        <div class="overflow-x-auto -mx-4 sm:mx-0">
          <div class="inline-block min-w-full px-4 sm:px-0">
            <!-- Comparison Table -->
            <table class="w-full border-collapse rounded-xl overflow-hidden min-w-[600px] sm:min-w-full">
              <!-- Table Header -->
              <thead>
                <tr class="bg-gradient-to-b from-[#42389E] to-[#0F1026] font-bold">
                  <th class="border border-transparent px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left text-white text-sm sm:text-base md:text-lg">Features</th>
                  <th class="border border-transparent px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center text-white text-sm sm:text-base md:text-lg">IntelliToggle</th>
                  <th class="border border-transparent px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center text-white text-sm sm:text-base md:text-lg">Other Feature Flag</th>
                </tr>
              </thead>
              <!-- Table Body -->
              <tbody class="bg-[#EDECF6]">
                <tr>
                  <td class="border border-gray-300 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 text-[#1B1D22] font-medium text-xs sm:text-sm md:text-base">Dart-native SDK & Server</td>
                  <td class="border border-gray-300 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 text-center">
                    <span class="text-[#1B1D22] text-xl sm:text-2xl">✓</span>
                  </td>
                  <td class="border border-gray-300 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 text-center">
                    <span class="text-[#1B1D22] text-xl sm:text-2xl">✗</span>
                  </td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 text-[#1B1D22] font-medium text-xs sm:text-sm md:text-base">Ready-to-use type-safety</td>
                  <td class="border border-gray-300 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 text-center">
                    <span class="text-[#1B1D22] text-xl sm:text-2xl">✓</span>
                  </td>
                  <td class="border border-gray-300 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 text-center">
                    <span class="text-[#1B1D22] text-xl sm:text-2xl">✗</span>
                  </td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 text-[#1B1D22] font-medium text-xs sm:text-sm md:text-base">AI-powered roll-outs & cleanup</td>
                  <td class="border border-gray-300 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 text-center">
                    <span class="text-[#1B1D22] text-xl sm:text-2xl">✓</span>
                  </td>
                  <td class="border border-gray-300 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 text-center">
                    <span class="text-[#1B1D22] text-xl sm:text-2xl">✗</span>
                  </td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 text-[#1B1D22] font-medium text-xs sm:text-sm md:text-base">Real-time insights & A/B</td>
                  <td class="border border-gray-300 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 text-center">
                    <span class="text-[#1B1D22] text-xl sm:text-2xl">✓</span>
                  </td>
                  <td class="border border-gray-300 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 text-center">
                    <span class="text-[#1B1D22] text-xl sm:text-2xl">✗</span>
                  </td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 text-[#1B1D22] font-medium text-xs sm:text-sm md:text-base">Team-focused RBAC</td>
                  <td class="border border-gray-300 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 text-center">
                    <span class="text-[#1B1D22] text-xl sm:text-2xl">✓</span>
                  </td>
                  <td class="border border-gray-300 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 text-center">
                    <span class="text-[#1B1D22] text-xl sm:text-2xl">✗</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


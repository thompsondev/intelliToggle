<template>
  <section class="bg-[#4A148C] text-white py-16 md:py-24">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto text-center mb-12">
        <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          The First <span class="text-[#FFB84D]">Dart-Native</span> Feature Flag With
          <span class="text-[#FFB84D]">DartCodeAI</span>
        </h1>
        <p class="text-xl md:text-2xl mb-4 text-gray-200">
          Feature flags built for Dart, Ship faster, roll back safely, and scale with AI-powered delivery
        </p>
        <p class="text-gray-300 mb-8">Starting at just $1/month</p>
        <button class="bg-[#FF6B35] hover:bg-[#FF8555] px-8 py-4 rounded-md font-semibold text-lg transition">
          Join AI Early Access
        </button>
      </div>
      
      <!-- Dashboard Screenshot Placeholder -->
      <div class="relative max-w-6xl mx-auto">
        <div class="bg-white rounded-lg shadow-2xl p-4 md:p-8">
          <div class="bg-gray-50 rounded p-6">
            <div class="flex flex-col md:flex-row gap-4">
              <!-- Sidebar -->
              <div class="w-full md:w-64 bg-[#4A148C] rounded p-4 text-white">
                <div class="space-y-3">
                  <div class="font-semibold">Dashboard</div>
                  <div class="text-sm opacity-80">Feature Flags</div>
                  <div class="text-sm opacity-80">Experiments</div>
                  <div class="text-sm opacity-80">Segments</div>
                  <div class="text-sm opacity-80">Users</div>
                  <div class="text-sm opacity-80">Settings</div>
                </div>
              </div>
              <!-- Main Content -->
              <div class="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="bg-white p-4 rounded border">
                  <div class="text-2xl font-bold text-gray-800">12</div>
                  <div class="text-sm text-gray-600">Total Flags</div>
                </div>
                <div class="bg-white p-4 rounded border">
                  <div class="text-2xl font-bold text-gray-800">8</div>
                  <div class="text-sm text-gray-600">Active Flags</div>
                </div>
                <div class="bg-white p-4 rounded border">
                  <div class="text-2xl font-bold text-gray-800">4</div>
                  <div class="text-sm text-gray-600">Archived Flags</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


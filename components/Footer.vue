<template>
  <footer class="bg-gray-100 py-12">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-4 gap-8 mb-8">
        <!-- Logo & Copyright -->
        <div>
          <div class="flex items-center space-x-2 mb-4">
            <div class="w-10 h-10 bg-[#4A148C] rounded flex items-center justify-center">
              <span class="text-white font-bold text-xl">IT</span>
            </div>
            <span class="text-xl font-semibold text-gray-800">IntelliToggle</span>
          </div>
          <p class="text-sm text-gray-600">© 2024 IntelliToggle. All rights reserved.</p>
        </div>

        <!-- Company Links -->
        <div>
          <h4 class="font-semibold text-gray-800 mb-4">Company</h4>
          <ul class="space-y-2 text-gray-600">
            <li><a href="#" class="hover:text-[#FF6B35] transition">About</a></li>
            <li><a href="#" class="hover:text-[#FF6B35] transition">Awards</a></li>
            <li><a href="#" class="hover:text-[#FF6B35] transition">Documentation</a></li>
          </ul>
        </div>

        <!-- Resources Links -->
        <div>
          <h4 class="font-semibold text-gray-800 mb-4">Resources</h4>
          <ul class="space-y-2 text-gray-600">
            <li><a href="#" class="hover:text-[#FF6B35] transition">Why IntelliToggle is different</a></li>
            <li><a href="#" class="hover:text-[#FF6B35] transition">Customer Support</a></li>
            <li><a href="#" class="hover:text-[#FF6B35] transition">Twitter</a></li>
            <li><a href="#" class="hover:text-[#FF6B35] transition">Slack</a></li>
            <li><a href="#" class="hover:text-[#FF6B35] transition">Privacy Policy</a></li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h4 class="font-semibold text-gray-800 mb-4">Subscribe to Newsletter</h4>
          <div class="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              class="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A148C]"
            />
            <button class="bg-[#FF6B35] hover:bg-[#FF8555] px-4 py-2 rounded-md text-white transition">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>


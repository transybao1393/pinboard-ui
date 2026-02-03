<script setup lang="ts">
const productLinks = [
  { label: 'Features', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'Roadmap', href: '#' },
  { label: 'Changelog', href: '#' },
  { label: 'Download', href: '#' },
]

const resourceLinks = [
  { label: 'Documentation', href: '#' },
  { label: 'Tutorials', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Community', href: '#' },
  { label: 'Support', href: '#' },
]

const companyLinks = [
  { label: 'About', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
  { label: 'Contact', href: '#' },
]

const socialLinks = [
  { icon: 'fa-brands fa-twitter', href: '#' },
  { icon: 'fa-brands fa-github', href: '#' },
  { icon: 'fa-brands fa-discord', href: '#' },
  { icon: 'fa-brands fa-youtube', href: '#' },
]
</script>

<template>
  <footer id="footer" class="bg-white py-16 px-8 border-t border-macos-border">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-5 gap-12 mb-12">
        <!-- Brand Column -->
        <div class="col-span-2">
          <div class="flex items-center gap-3 mb-4">
            <img src="/logo.png" alt="Pinboard" class="w-10 h-10 object-contain" />
            <span class="text-xl font-bold text-macos-text">Pinboard</span>
          </div>
          <p class="text-sm text-macos-secondary leading-relaxed mb-6">
            Your intelligent productivity companion for macOS. Work faster, smarter, and more efficiently.
          </p>
          <div class="flex items-center gap-3">
            <a
              v-for="social in socialLinks"
              :key="social.icon"
              :href="social.href"
              class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <i :class="[social.icon, 'text-gray-600']"></i>
            </a>
          </div>
        </div>

        <!-- Product Links -->
        <div>
          <h3 class="text-sm font-semibold text-macos-text mb-4">Product</h3>
          <ul class="space-y-3 text-sm text-macos-secondary">
            <li v-for="link in productLinks" :key="link.label">
              <a :href="link.href" class="hover:text-macos-accent transition-colors">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Resources Links -->
        <div>
          <h3 class="text-sm font-semibold text-macos-text mb-4">Resources</h3>
          <ul class="space-y-3 text-sm text-macos-secondary">
            <li v-for="link in resourceLinks" :key="link.label">
              <a :href="link.href" class="hover:text-macos-accent transition-colors">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Company Links -->
        <div>
          <h3 class="text-sm font-semibold text-macos-text mb-4">Company</h3>
          <ul class="space-y-3 text-sm text-macos-secondary">
            <li v-for="link in companyLinks" :key="link.label">
              <a :href="link.href" class="hover:text-macos-accent transition-colors">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-macos-border flex items-center justify-between">
        <p class="text-sm text-macos-secondary">&copy; 2026 Pinboard. All rights reserved.</p>
        <div class="flex items-center gap-6 text-sm text-macos-secondary">
          <span>Made with <i class="fa-solid fa-heart text-red-500"></i> for Mac users</span>
        </div>
      </div>
    </div>
  </footer>
</template>

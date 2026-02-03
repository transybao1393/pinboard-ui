<script setup lang="ts">
defineProps<{
  headerRef?: HTMLElement | null
}>()

const emit = defineEmits<{
  (e: 'navigate', target: string): void
}>()

const handleNavigate = (target: string) => {
  emit('navigate', target)
}
</script>

<template>
  <header
    id="header"
    class="glass-effect fixed top-0 left-0 right-0 z-50 border-b border-macos-border transition-transform duration-300"
  >
    <nav class="max-w-7xl mx-auto px-8 py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <img src="/logo.png" alt="Pinboard" class="w-10 h-10 object-contain" />
          <span class="text-xl font-bold text-macos-text">Pinboard</span>
        </div>

        <div class="flex items-center gap-8">
          <a
            href="#features"
            class="nav-link text-sm font-medium text-macos-text hover:text-macos-accent"
            @click.prevent="handleNavigate('#features')"
          >
            Features
          </a>
          <a
            href="#workflow"
            class="nav-link text-sm font-medium text-macos-text hover:text-macos-accent"
            @click.prevent="handleNavigate('#workflow')"
          >
            How It Works
          </a>
          <a
            href="#testimonials"
            class="nav-link text-sm font-medium text-macos-text hover:text-macos-accent"
            @click.prevent="handleNavigate('#testimonials')"
          >
            Testimonials
          </a>
          <a
            href="#pricing"
            class="nav-link text-sm font-medium text-macos-text hover:text-macos-accent"
            @click.prevent="handleNavigate('#pricing')"
          >
            Pricing
          </a>
          <a
            href="#faq"
            class="nav-link text-sm font-medium text-macos-text hover:text-macos-accent"
            @click.prevent="handleNavigate('#faq')"
          >
            FAQ
          </a>
        </div>

        <div class="flex items-center gap-3">
          <button class="btn-secondary px-5 py-2 rounded-lg text-sm font-semibold text-macos-text">
            Sign In
          </button>
          <a href="/Pinboard-3.0.dmg" download class="btn-primary px-5 py-2 rounded-lg text-sm font-semibold text-white">
            Download Free
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

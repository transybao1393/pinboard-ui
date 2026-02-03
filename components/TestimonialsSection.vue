<script setup lang="ts">
const testimonials = [
  {
    quote: "Pinboard has completely changed how I work. The keyboard shortcuts are incredibly intuitive, and I can't imagine coding without it now.",
    name: 'Alex Chen',
    role: 'Senior Developer @ Stripe',
    avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg',
  },
  {
    quote: "The floating window feature is genius. I keep it on my second monitor and access files instantly. Saves me hours every week.",
    name: 'Sarah Johnson',
    role: 'Product Designer @ Figma',
    avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg',
  },
  {
    quote: "Privacy-focused and lightning fast. Finally, a clipboard manager I can trust with sensitive client information.",
    name: 'Marcus Rodriguez',
    role: 'Security Engineer @ Apple',
    avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg',
  },
  {
    quote: "The best $10 I've spent on software. The Pro version's sync feature works flawlessly across my MacBook and iMac.",
    name: 'Emily Watson',
    role: 'Content Creator',
    avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg',
  },
  {
    quote: "Incredibly polished UI. Feels like it was designed by Apple themselves. The attention to detail is remarkable.",
    name: 'David Kim',
    role: 'UI/UX Lead @ Airbnb',
    avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg',
  },
  {
    quote: "Game changer for my workflow. I use it dozens of times per day. Can't recommend it enough to fellow developers.",
    name: 'James Miller',
    role: 'Tech Lead @ GitHub',
    avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-9.jpg',
  },
]
</script>

<template>
  <section id="testimonials" class="py-24 px-8 bg-white">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16 anime-fade-in">
        <h2 class="text-5xl font-bold text-macos-text mb-4">Loved by Professionals</h2>
        <p class="text-xl text-macos-secondary max-w-2xl mx-auto">
          Join thousands of developers, designers, and power users
        </p>
      </div>

      <div class="grid grid-cols-3 gap-8 anime-stagger-container">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="testimonial-card glass-effect rounded-3xl p-8 macos-shadow anime-stagger-item"
        >
          <div class="flex items-center gap-1 mb-4">
            <i class="fa-solid fa-star text-yellow-500"></i>
            <i class="fa-solid fa-star text-yellow-500"></i>
            <i class="fa-solid fa-star text-yellow-500"></i>
            <i class="fa-solid fa-star text-yellow-500"></i>
            <i class="fa-solid fa-star text-yellow-500"></i>
          </div>
          <p class="text-macos-text mb-6 leading-relaxed">"{{ testimonial.quote }}"</p>
          <div class="flex items-center gap-3">
            <img
              :src="testimonial.avatar"
              :alt="testimonial.name"
              class="w-12 h-12 rounded-full"
            >
            <div>
              <div class="font-semibold text-macos-text">{{ testimonial.name }}</div>
              <div class="text-sm text-macos-secondary">{{ testimonial.role }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const faqs = [
  {
    question: 'Is my data safe?',
    answer: 'Absolutely. All data is stored locally on your device with end-to-end encryption. We never have access to your clipboard or files.',
    icon: 'fa-solid fa-shield-halved',
    iconColor: 'text-green-600',
  },
  {
    question: 'Which macOS versions are supported?',
    answer: 'Smart Scratchpad works on macOS 12.0 (Monterey) and later, including macOS 13 (Ventura) and macOS 14 (Sonoma).',
    icon: 'fa-brands fa-apple',
    iconColor: 'text-gray-600',
  },
  // {
  //   question: 'Can I customize keyboard shortcuts?',
  //   answer: 'Yes! All keyboard shortcuts are fully customizable in Settings. Set them to whatever feels most natural for your workflow.',
  //   icon: 'fa-solid fa-keyboard',
  //   iconColor: 'text-blue-600',
  // },
  {
    question: 'Does it work offline?',
    answer: 'Yes, Smart Scratchpad works completely offline. Cloud sync will be provided in the future and also is optional.',
    icon: 'fa-solid fa-wifi',
    iconColor: 'text-purple-600',
  },
  // {
  //   question: "What's the difference between Free and Pro?",
  //   answer: 'Free gives you 9 clipboard slots and basic features. Pro unlocks unlimited slots, iCloud sync, advanced file management, and custom themes.',
  //   icon: 'fa-solid fa-star',
  //   iconColor: 'text-yellow-500',
  // },
  // {
  //   question: 'Do you offer refunds?',
  //   answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied, contact support for a full refund, no questions asked.",
  //   icon: 'fa-solid fa-rotate-left',
  //   iconColor: 'text-green-600',
  // },
  // {
  //   question: 'How much storage does it use?',
  //   answer: 'The app itself is only 50MB. Clipboard history uses minimal space (typically under 100MB). You control file storage limits in Settings.',
  //   icon: 'fa-solid fa-hard-drive',
  //   iconColor: 'text-gray-600',
  // },
  // {
  //   question: 'Can I use it on multiple Macs?',
  //   answer: 'Yes! Pro and Teams licenses work on all your Macs. Enable iCloud sync to keep clipboard history in sync across devices.',
  //   icon: 'fa-solid fa-laptop',
  //   iconColor: 'text-blue-600',
  // },
]
</script>

<template>
  <section id="faq" class="py-24 px-8 bg-white">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-16 anime-fade-in">
        <h2 class="text-5xl font-bold text-macos-text mb-4">Frequently Asked Questions</h2>
        <p class="text-xl text-macos-secondary">Everything you need to know</p>
      </div>

      <div class="space-y-4 anime-stagger-container">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="glass-effect rounded-2xl p-6 macos-shadow anime-stagger-item"
        >
          <div class="flex items-start justify-between gap-4">
            <div class="flex-1">
              <h3 class="text-lg font-semibold text-macos-text mb-2">{{ faq.question }}</h3>
              <p class="text-macos-secondary leading-relaxed">{{ faq.answer }}</p>
            </div>
            <i :class="[faq.icon, faq.iconColor, 'text-xl']"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

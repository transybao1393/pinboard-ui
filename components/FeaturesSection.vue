<template>
  <section id="features" class="py-24 px-8">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16 anime-fade-in">
        <h2 class="text-5xl font-bold text-macos-text mb-4">Powerful Features</h2>
        <p class="text-xl text-macos-secondary max-w-2xl mx-auto">
          Everything you need to work faster, smarter, and more efficiently
        </p>
      </div>

      <div class="grid grid-cols-3 gap-8 anime-stagger-container">
        <!-- Keyboard First -->
        <div class="feature-card glass-effect rounded-3xl p-8 macos-shadow anime-stagger-item">
          <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6">
            <i class="fa-solid fa-keyboard text-white text-2xl"></i>
          </div>
          <h3 class="text-2xl font-bold text-macos-text mb-3">Keyboard First</h3>
          <p class="text-macos-secondary mb-4 leading-relaxed">
            Navigate everything with lightning-fast keyboard shortcuts. No mouse needed.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-gray-100 rounded-lg text-xs font-mono">&#8997;&#8984;S</span>
            <span class="px-3 py-1 bg-gray-100 rounded-lg text-xs font-mono">&#8963;C</span>
            <span class="px-3 py-1 bg-gray-100 rounded-lg text-xs font-mono">&#8963;V + 1-9</span>
          </div>
        </div>

        <!-- Smart Clipboard -->
        <div class="feature-card glass-effect rounded-3xl p-8 macos-shadow anime-stagger-item">
          <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mb-6">
            <i class="fa-solid fa-clipboard-list text-white text-2xl"></i>
          </div>
          <h3 class="text-2xl font-bold text-macos-text mb-3">Smart Clipboard</h3>
          <p class="text-macos-secondary mb-4 leading-relaxed">
            Never lose copied content again. Access your entire clipboard history instantly.
          </p>
          <ul class="space-y-2 text-sm text-macos-secondary">
            <li class="flex items-center gap-2">
              <i class="fa-solid fa-check text-green-600"></i>
              <span>Unlimited history</span>
            </li>
            <li class="flex items-center gap-2">
              <i class="fa-solid fa-check text-green-600"></i>
              <span>Smart search</span>
            </li>
            <li class="flex items-center gap-2">
              <i class="fa-solid fa-check text-green-600"></i>
              <span>Auto-categorization</span>
            </li>
          </ul>
        </div>

        <!-- Quick File Access -->
        <div class="feature-card glass-effect rounded-3xl p-8 macos-shadow anime-stagger-item">
          <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mb-6">
            <i class="fa-solid fa-file-arrow-up text-white text-2xl"></i>
          </div>
          <h3 class="text-2xl font-bold text-macos-text mb-3">Quick File Access</h3>
          <p class="text-macos-secondary mb-4 leading-relaxed">
            Drag, drop, and access files from anywhere. Your floating file manager.
          </p>
          <ul class="space-y-2 text-sm text-macos-secondary">
            <li class="flex items-center gap-2">
              <i class="fa-solid fa-check text-green-600"></i>
              <span>Instant upload</span>
            </li>
            <li class="flex items-center gap-2">
              <i class="fa-solid fa-check text-green-600"></i>
              <span>Preview support</span>
            </li>
            <li class="flex items-center gap-2">
              <i class="fa-solid fa-check text-green-600"></i>
              <span>Share links</span>
            </li>
          </ul>
        </div>

        <!-- Always On Top -->
        <div class="feature-card glass-effect rounded-3xl p-8 macos-shadow anime-stagger-item">
          <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl mb-6">
            <i class="fa-solid fa-window-restore text-white text-2xl"></i>
          </div>
          <h3 class="text-2xl font-bold text-macos-text mb-3">Always On Top</h3>
          <p class="text-macos-secondary leading-relaxed">
            Floating window that stays accessible while you work in any app.
          </p>
        </div>

        <!-- Privacy First -->
        <div class="feature-card glass-effect rounded-3xl p-8 macos-shadow anime-stagger-item">
          <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl mb-6">
            <i class="fa-solid fa-lock text-white text-2xl"></i>
          </div>
          <h3 class="text-2xl font-bold text-macos-text mb-3">Privacy First</h3>
          <p class="text-macos-secondary leading-relaxed">
            All data stored locally. End-to-end encryption. No tracking, ever.
          </p>
        </div>

        <!-- Optional Sync -->
        <div class="feature-card glass-effect rounded-3xl p-8 macos-shadow anime-stagger-item">
          <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl mb-6">
            <i class="fa-solid fa-sync text-white text-2xl"></i>
          </div>
          <h3 class="text-2xl font-bold text-macos-text mb-3">Optional Sync</h3>
          <p class="text-macos-secondary leading-relaxed">
            Sync across your Macs with iCloud. Completely optional and secure.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

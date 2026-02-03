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
        <!-- 9-Slot Clipboard -->
        <div class="feature-card glass-effect rounded-3xl p-8 macos-shadow anime-stagger-item">
          <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mb-6">
            <i class="fa-solid fa-clipboard-list text-white text-2xl"></i>
          </div>
          <h3 class="text-2xl font-bold text-macos-text mb-3">9-Slot Clipboard</h3>
          <p class="text-macos-secondary mb-4 leading-relaxed">
            9 independent clipboard slots with auto-classification for code, URLs, commands, emails, and API keys.
          </p>
          <ul class="space-y-2 text-sm text-macos-secondary">
            <li class="flex items-center gap-2">
              <i class="fa-solid fa-check text-green-600"></i>
              <span>Sensitive content masking</span>
            </li>
            <li class="flex items-center gap-2">
              <i class="fa-solid fa-check text-green-600"></i>
              <span>Per-slot copy, edit, clear, paste</span>
            </li>
          </ul>
        </div>

        <!-- File Staging Area -->
        <div class="feature-card glass-effect rounded-3xl p-8 macos-shadow anime-stagger-item">
          <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mb-6">
            <i class="fa-solid fa-folder-open text-white text-2xl"></i>
          </div>
          <h3 class="text-2xl font-bold text-macos-text mb-3">File Staging Area</h3>
          <p class="text-macos-secondary mb-4 leading-relaxed">
            Drag-and-drop file management with image paste from clipboard support.
          </p>
          <ul class="space-y-2 text-sm text-macos-secondary">
            <li class="flex items-center gap-2">
              <i class="fa-solid fa-check text-green-600"></i>
              <span>Thumbnail previews</span>
            </li>
            <li class="flex items-center gap-2">
              <i class="fa-solid fa-check text-green-600"></i>
              <span>Grid/List view modes</span>
            </li>
            <li class="flex items-center gap-2">
              <i class="fa-solid fa-check text-green-600"></i>
              <span>Show in Finder integration</span>
            </li>
          </ul>
        </div>

        <!-- Screenshot Auto-Capture -->
        <div class="feature-card glass-effect rounded-3xl p-8 macos-shadow anime-stagger-item">
          <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mb-6">
            <i class="fa-solid fa-camera text-white text-2xl"></i>
          </div>
          <h3 class="text-2xl font-bold text-macos-text mb-3">Screenshot Auto-Capture</h3>
          <p class="text-macos-secondary mb-4 leading-relaxed">
            Monitors macOS screenshot directory and auto-adds to your staging area.
          </p>
          <ul class="space-y-2 text-sm text-macos-secondary">
            <li class="flex items-center gap-2">
              <i class="fa-solid fa-check text-green-600"></i>
              <span>Desktop notifications</span>
            </li>
            <li class="flex items-center gap-2">
              <i class="fa-solid fa-check text-green-600"></i>
              <span>Full-screen preview</span>
            </li>
          </ul>
        </div>

        <!-- Global Shortcuts -->
        <div class="feature-card glass-effect rounded-3xl p-8 macos-shadow anime-stagger-item">
          <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6">
            <i class="fa-solid fa-keyboard text-white text-2xl"></i>
          </div>
          <h3 class="text-2xl font-bold text-macos-text mb-3">Global Shortcuts</h3>
          <p class="text-macos-secondary mb-4 leading-relaxed">
            System-wide keyboard shortcuts that work from any application.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-gray-100 rounded-lg text-xs font-mono">&#8997;&#8984;S</span>
            <span class="px-3 py-1 bg-gray-100 rounded-lg text-xs font-mono">&#8963;C</span>
            <span class="px-3 py-1 bg-gray-100 rounded-lg text-xs font-mono">&#8963;V + 1-9</span>
          </div>
        </div>

        <!-- Floating Panel -->
        <div class="feature-card glass-effect rounded-3xl p-8 macos-shadow anime-stagger-item">
          <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl mb-6">
            <i class="fa-solid fa-window-restore text-white text-2xl"></i>
          </div>
          <h3 class="text-2xl font-bold text-macos-text mb-3">Floating Panel</h3>
          <p class="text-macos-secondary mb-4 leading-relaxed">
            Always-on-top resizable window with Files & Clipboard tabs.
          </p>
          <ul class="space-y-2 text-sm text-macos-secondary">
            <li class="flex items-center gap-2">
              <i class="fa-solid fa-check text-green-600"></i>
              <span>Position persistence</span>
            </li>
            <li class="flex items-center gap-2">
              <i class="fa-solid fa-check text-green-600"></i>
              <span>Menu bar app (no dock icon)</span>
            </li>
          </ul>
        </div>

        <!-- Smart Detection -->
        <div class="feature-card glass-effect rounded-3xl p-8 macos-shadow anime-stagger-item">
          <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl mb-6">
            <i class="fa-solid fa-wand-magic-sparkles text-white text-2xl"></i>
          </div>
          <h3 class="text-2xl font-bold text-macos-text mb-3">Smart Detection</h3>
          <p class="text-macos-secondary mb-4 leading-relaxed">
            Auto-classifies clipboard content with intelligent pattern recognition.
          </p>
          <ul class="space-y-2 text-sm text-macos-secondary">
            <li class="flex items-center gap-2">
              <i class="fa-solid fa-check text-green-600"></i>
              <span>Code snippets & URLs</span>
            </li>
            <li class="flex items-center gap-2">
              <i class="fa-solid fa-check text-green-600"></i>
              <span>Emails & phone numbers</span>
            </li>
            <li class="flex items-center gap-2">
              <i class="fa-solid fa-check text-green-600"></i>
              <span>API keys (masked)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

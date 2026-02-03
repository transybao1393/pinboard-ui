<template>
  <section id="hero-section" class="pt-32 pb-20 px-8 h-[800px] flex items-center">
    <div class="max-w-7xl mx-auto w-full">
      <div class="grid grid-cols-2 gap-16 items-center">
        <div class="anime-fade-in">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
            <i class="fa-solid fa-star text-yellow-500 text-sm"></i>
            <span class="text-sm font-semibold text-blue-600">macOS Native - Privacy First</span>
          </div>

          <h1 class="text-6xl font-bold text-macos-text mb-6 leading-tight">
            Your Productivity<br>
            <span class="gradient-text">Supercharged</span>
          </h1>

          <p class="text-xl text-macos-secondary mb-8 leading-relaxed">
            The intelligent, always-on-top utility that transforms how you work. Lightning-fast clipboard management and file handling, designed for keyboard masters.
          </p>

          <div class="flex items-center gap-4 mb-8">
            <a href="/Pinboard-5.dmg" download class="btn-primary px-8 py-4 rounded-xl text-lg font-semibold text-white flex items-center gap-3">
              <i class="fa-brands fa-apple text-2xl"></i>
              <div class="text-left">
                <div class="text-xs opacity-80">Download for</div>
                <div>macOS 12+</div>
              </div>
            </a>
            <button class="btn-secondary px-8 py-4 rounded-xl text-lg font-semibold text-macos-text">
              Watch Demo
              <i class="fa-solid fa-play ml-2"></i>
            </button>
          </div>

          <div class="flex items-center gap-6 text-sm text-macos-secondary">
            <div class="flex items-center gap-2">
              <i class="fa-solid fa-check-circle text-green-600"></i>
              <span>Free</span>
            </div>
            <div class="flex items-center gap-2">
              <i class="fa-solid fa-check-circle text-green-600"></i>
              <span>No credit card required</span>
            </div>
          </div>
        </div>

        <div class="relative anime-fade-in">
          <div class="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
          <div class="relative glass-effect rounded-3xl p-8 macos-shadow floating-animation">
            <div class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 mb-4">
              <div class="flex items-center gap-3 mb-4">
                <div class="flex gap-1.5">
                  <div class="w-3 h-3 rounded-full bg-red-500"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div class="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span class="text-xs font-semibold text-gray-600">Pinboard</span>
              </div>

              <div class="bg-white rounded-xl p-4 mb-3 macos-shadow-sm">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-xs font-semibold text-gray-600">Clipboard History</span>
                  <span class="text-xs text-gray-400">&#8963;V + 1-9</span>
                </div>
                <div class="space-y-2">
                  <div class="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-500">
                    <div class="text-xs font-mono text-gray-700">const handleClick = () =&gt; {</div>
                  </div>
                  <div class="bg-gray-50 rounded-lg p-3">
                    <div class="text-xs text-gray-600">Meeting notes: Q4 planning...</div>
                  </div>
                  <div class="bg-gray-50 rounded-lg p-3">
                    <div class="text-xs text-gray-600">https://example.com/docs</div>
                  </div>
                </div>
              </div>

              <div class="bg-white rounded-xl p-4 macos-shadow-sm">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-xs font-semibold text-gray-600">Quick Files</span>
                  <span class="text-xs text-gray-400">&#8997;&#8984;S</span>
                </div>
                <div class="grid grid-cols-3 gap-2">
                  <div class="bg-purple-50 rounded-lg p-2 text-center">
                    <i class="fa-solid fa-file-pdf text-purple-600 text-xl mb-1"></i>
                    <div class="text-xs text-gray-600 truncate">Report.pdf</div>
                  </div>
                  <div class="bg-blue-50 rounded-lg p-2 text-center">
                    <i class="fa-solid fa-image text-blue-600 text-xl mb-1"></i>
                    <div class="text-xs text-gray-600 truncate">Design.png</div>
                  </div>
                  <div class="bg-green-50 rounded-lg p-2 text-center">
                    <i class="fa-solid fa-file-excel text-green-600 text-xl mb-1"></i>
                    <div class="text-xs text-gray-600 truncate">Data.xlsx</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-between text-xs text-gray-500">
              <span>Synced - 3 items</span>
              <div class="flex items-center gap-1">
                <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span>Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

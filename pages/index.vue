<script setup lang="ts">
import { onMounted } from 'vue'
import anime from 'animejs'

onMounted(() => {
  // Set initial state for animated elements
  const animatedElements = document.querySelectorAll('.anime-fade-in')
  animatedElements.forEach((el) => {
    (el as HTMLElement).style.opacity = '0'
    ;(el as HTMLElement).style.transform = 'translateY(40px)'
  })

  // Intersection Observer for scroll animations with anime.js
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target

          // Animate the element
          anime({
            targets: target,
            opacity: [0, 1],
            translateY: [40, 0],
            duration: 800,
            easing: 'easeOutCubic',
          })

          // Unobserve after animation
          observer.unobserve(target)
        }
      })
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px',
    }
  )

  animatedElements.forEach((el) => {
    observer.observe(el)
  })

  // Staggered animations for grid items
  const gridObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const container = entry.target
          const items = container.querySelectorAll('.anime-stagger-item')

          anime({
            targets: items,
            opacity: [0, 1],
            translateY: [30, 0],
            scale: [0.95, 1],
            duration: 600,
            delay: anime.stagger(100, { from: 'first' }),
            easing: 'easeOutQuad',
          })

          gridObserver.unobserve(container)
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -30px 0px',
    }
  )

  document.querySelectorAll('.anime-stagger-container').forEach((el) => {
    // Set initial state for stagger items
    const items = el.querySelectorAll('.anime-stagger-item')
    items.forEach((item) => {
      (item as HTMLElement).style.opacity = '0'
      ;(item as HTMLElement).style.transform = 'translateY(30px) scale(0.95)'
    })
    gridObserver.observe(el)
  })
})

const handleNavigate = (target: string) => {
  const header = document.getElementById('header')
  const targetElement = document.querySelector(target)

  if (targetElement && header) {
    const headerHeight = header.offsetHeight
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20

    // Smooth scroll with anime.js
    anime({
      targets: { scrollY: window.pageYOffset },
      scrollY: targetPosition,
      duration: 800,
      easing: 'easeInOutQuad',
      update: (anim) => {
        window.scrollTo(0, (anim.animations[0].currentValue as number))
      },
    })
  }
}
</script>

<template>
  <div class="bg-macos-bg">
    <AppHeader @navigate="handleNavigate" />
    <HeroSection />
    <StatsSection />
    <FeaturesSection />
    <WorkflowSection />
    <DemoSection />
    <TestimonialsSection />
    <PricingSection />
    <FaqSection />
    <CtaSection />
    <AppFooter />
  </div>
</template>

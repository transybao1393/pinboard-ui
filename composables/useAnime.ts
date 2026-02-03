import anime from 'animejs'

export const useAnime = () => {
  // Fade in from bottom animation
  const fadeInUp = (targets: string | Element | Element[], delay: number = 0) => {
    return anime({
      targets,
      opacity: [0, 1],
      translateY: [40, 0],
      duration: 800,
      delay: anime.stagger(100, { start: delay }),
      easing: 'easeOutCubic',
    })
  }

  // Fade in with scale
  const fadeInScale = (targets: string | Element | Element[], delay: number = 0) => {
    return anime({
      targets,
      opacity: [0, 1],
      scale: [0.9, 1],
      duration: 600,
      delay: anime.stagger(80, { start: delay }),
      easing: 'easeOutCubic',
    })
  }

  // Staggered fade in for grid items
  const staggerFadeIn = (targets: string | Element | Element[], delay: number = 0) => {
    return anime({
      targets,
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 600,
      delay: anime.stagger(100, { start: delay, grid: [3, 3], from: 'first' }),
      easing: 'easeOutQuad',
    })
  }

  // Slide in from left
  const slideInLeft = (targets: string | Element | Element[], delay: number = 0) => {
    return anime({
      targets,
      opacity: [0, 1],
      translateX: [-50, 0],
      duration: 700,
      delay,
      easing: 'easeOutCubic',
    })
  }

  // Slide in from right
  const slideInRight = (targets: string | Element | Element[], delay: number = 0) => {
    return anime({
      targets,
      opacity: [0, 1],
      translateX: [50, 0],
      duration: 700,
      delay,
      easing: 'easeOutCubic',
    })
  }

  // Counter animation for stats
  const animateCounter = (targets: string | Element | Element[], endValue: number) => {
    return anime({
      targets,
      innerHTML: [0, endValue],
      round: 1,
      duration: 2000,
      easing: 'easeInOutQuad',
    })
  }

  // Section reveal animation
  const revealSection = (target: Element) => {
    return anime({
      targets: target,
      opacity: [0, 1],
      translateY: [60, 0],
      duration: 1000,
      easing: 'easeOutCubic',
    })
  }

  // Create scroll observer for triggering animations
  const createScrollObserver = (
    callback: (entry: IntersectionObserverEntry) => void,
    options: IntersectionObserverInit = {}
  ) => {
    const defaultOptions: IntersectionObserverInit = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px',
      ...options,
    }

    return new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry)
        }
      })
    }, defaultOptions)
  }

  return {
    anime,
    fadeInUp,
    fadeInScale,
    staggerFadeIn,
    slideInLeft,
    slideInRight,
    animateCounter,
    revealSection,
    createScrollObserver,
  }
}

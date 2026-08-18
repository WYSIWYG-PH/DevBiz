import Lenis from 'lenis'

/**
 * Smooth "inertia" scrolling.
 *
 * Lenis intercepts the wheel/touch input and animates the page's scroll
 * position toward the target instead of jumping to it. The result is that the
 * page keeps gliding for a moment after the user stops scrolling.
 *
 * Disabled for users who ask for reduced motion.
 */
export default defineNuxtPlugin((nuxtApp) => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const lenis = new Lenis({
        // How long the glide lasts, in seconds. Higher = more drift.
        duration: 1.35,
        // Exponential ease-out: fast at first, long soft tail.
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        // How much one wheel tick moves the page.
        wheelMultiplier: 1,
        // Touch devices already have native momentum, so leave them alone.
        smoothWheel: true,
        syncTouch: false,
    })

    let frame
    const raf = (time) => {
        lenis.raf(time)
        frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    // Anchor links (#services, #team, ...) must go through Lenis, otherwise the
    // browser's native jump fights the animation loop.
    const onAnchorClick = (event) => {
        const link = event.target.closest('a[href^="#"]')
        if (!link) return
        const id = link.getAttribute('href')
        if (!id || id === '#') return
        const target = document.querySelector(id)
        if (!target) return
        event.preventDefault()
        lenis.scrollTo(target, { offset: -80 })
    }
    document.addEventListener('click', onAnchorClick)

    // Re-measure after each page render so route changes get the right height.
    nuxtApp.hook('page:finish', () => lenis.resize())

    if (import.meta.hot) {
        import.meta.hot.dispose(() => {
            cancelAnimationFrame(frame)
            document.removeEventListener('click', onAnchorClick)
            lenis.destroy()
        })
    }

    return {
        provide: { lenis }
    }
})

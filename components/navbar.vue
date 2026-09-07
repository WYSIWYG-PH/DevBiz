<template>
    <nav class="fixed top-0 left-0 right-0 z-50 w-full py-4">
        <div class="container mx-auto px-6">

            <!-- Desktop: one floating pill holding the logo, the links and the CTA -->
            <div class="hidden md:flex justify-center">
                <div class="flex items-center gap-2 rounded-full border px-2 py-2 transition-all duration-300"
                    :class="scrolled
                        ? 'border-slate-700 bg-slate-950/90 shadow-lg shadow-black/40 backdrop-blur-xl'
                        : 'border-slate-800 bg-slate-900/80 backdrop-blur-md'">

                    <button @click="scrollToSection('hero')"
                        class="logo-text ml-2 mr-3 bg-gradient-to-r from-[#00DC82] to-emerald-400 bg-clip-text text-xl font-bold text-transparent transition-opacity duration-200 hover:opacity-80">
                        DevBiz
                    </button>

                    <span class="mr-1 h-5 w-px bg-slate-700" aria-hidden="true" />

                    <button v-for="link in links" :key="link.id" @click="scrollToSection(link.id)" class="nav-item">
                        {{ link.label }}
                    </button>

                    <button @click="contactOpen = true"
                        class="ml-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-slate-950 transition-all duration-200 hover:bg-primary-400 active:scale-95">
                        Get in touch
                    </button>
                </div>
            </div>

            <!-- Mobile: logo + burger, in a matching pill -->
            <div class="md:hidden">
                <div class="flex items-center justify-between rounded-full border border-slate-800 bg-slate-950/90 py-2 pl-5 pr-2 backdrop-blur-md">
                    <button @click="scrollToSection('hero')"
                        class="logo-text bg-gradient-to-r from-[#00DC82] to-emerald-400 bg-clip-text text-lg font-bold text-transparent">
                        DevBiz
                    </button>
                    <button @click="toggleMenu" aria-label="Toggle menu" :aria-expanded="isOpen"
                        class="flex size-10 items-center justify-center rounded-full border border-slate-800 bg-slate-900/80 text-white transition-all duration-200 hover:border-primary/50 hover:text-primary active:scale-95">
                        <Icon :name="isOpen ? 'ph-x-bold' : 'ph-list-bold'" class="size-5" />
                    </button>
                </div>

                <!-- Mobile Dropdown Menu -->
                <transition name="slide-fade">
                    <div v-if="isOpen"
                        class="mt-3 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/95 shadow-xl shadow-black/40 backdrop-blur-md">
                        <nav class="flex flex-col p-2">
                            <button v-for="link in links" :key="link.id" @click="handleMobileClick(link.id)"
                                class="mobile-link">
                                <span>{{ link.label }}</span>
                                <Icon name="ph:caret-right" class="size-4 text-primary/70" />
                            </button>
                            <button @click="openContactFromMobile"
                                class="mt-1 rounded-xl bg-primary px-4 py-3 text-base font-semibold text-slate-950">
                                Get in touch
                            </button>
                        </nav>
                    </div>
                </transition>
            </div>

        </div>
    </nav>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const links = [
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'team', label: 'Our Team' },
]

const isOpen = ref(false)
const scrolled = ref(false)
const contactOpen = useContactModal()

// Dismiss the mobile menu before the modal takes over the screen.
const openContactFromMobile = () => {
    isOpen.value = false
    contactOpen.value = true
}

const toggleMenu = () => {
    isOpen.value = !isOpen.value
}

const onScroll = () => {
    scrolled.value = window.scrollY > 40
}

onMounted(() => {
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (!el) return

    // Hand the jump to Lenis when it's running, otherwise its animation loop
    // fights the browser's native smooth scroll and the page stutters.
    const { $lenis } = useNuxtApp()
    if ($lenis) {
        $lenis.scrollTo(el, { offset: -80 })
    } else {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
}

const handleMobileClick = (id) => {
    scrollToSection(id)
    isOpen.value = false
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap');

.logo-text {
    font-family: 'Orbitron', sans-serif;
    letter-spacing: 0.05em;
}

.nav-item {
    @apply relative overflow-hidden px-4 py-2 text-sm font-medium text-white transition-all duration-200;
}

/* Hidden line initially */
.nav-item::after {
    content: "";
    @apply absolute left-0 bottom-0 h-[2px] bg-primary;
    width: 0%;
    transition: width 0.25s ease;
}

/* Slide in on hover */
.nav-item:hover::after {
    width: 100%;
}


/* Mobile menu rows */
.mobile-link {
    @apply flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-gray-200 transition-colors duration-200 hover:bg-slate-800 hover:text-white active:bg-slate-800/70;
}

/* Smooth dropdown slide + fade */
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: opacity .25s ease, transform .25s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    opacity: 0;
    transform: translateY(-8px);
}
</style>

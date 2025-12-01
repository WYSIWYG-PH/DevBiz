<template>
    <nav class="fixed top-0 left-0 right-0 z-50 w-full py-4 bg-slate-950 md:bg-transparent">
        <div class="container mx-auto px-6">

            <!-- Desktop Menu -->
            <div class="hidden md:grid grid-cols-3 items-center">
                <div
                    class="logo-text text-2xl font-bold bg-gradient-to-r from-[#00DC82] to-emerald-400 bg-clip-text text-transparent">
                    DevBiz
                </div>

                <div
                    class="flex gap-2 items-center justify-center bg-slate-900/80 backdrop-blur-md rounded-full px-2 py-2 border border-slate-800">
                    <button @click="scrollToSection('services')" class="nav-item">Services</button>
                    <button @click="scrollToSection('projects')" class="nav-item">Projects</button>
                    <button @click="scrollToSection('testimonials')" class="nav-item">Testimonials</button>
                    <button @click="scrollToSection('team')" class="nav-item">Our Team</button>
                </div>
            </div>

            <!-- Mobile Menu -->
            <div class="flex justify-between items-center md:hidden">
                <div
                    class="logo-text text-xl font-bold bg-gradient-to-r from-[#00DC82] to-emerald-400 bg-clip-text text-transparent">
                    DevBiz
                </div>
                <button @click="toggleMenu" class="focus:outline-none">
                    <Icon :name="isOpen ? 'ph-x' : 'ph-list'" class="size-6 text-white" />
                </button>
            </div>

            <!-- Mobile Dropdown Menu -->
            <transition name="fade">
                <div v-if="isOpen"
                    class="mt-4 md:hidden flex flex-col gap-4 pb-4 rounded-xl px-4 py-4 bg-slate-900/90 backdrop-blur-md border border-slate-800">
                    <button @click="handleMobileClick('services')" class="nav-item text-left">Services</button>
                    <button @click="handleMobileClick('projects')" class="nav-item text-left">Projects</button>
                    <button @click="handleMobileClick('testimonials')" class="nav-item text-left">Testimonials</button>
                    <button @click="handleMobileClick('team')" class="nav-item text-left">Our Team</button>
                </div>
            </transition>

        </div>
    </nav>
</template>


<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const toggleMenu = () => {
    isOpen.value = !isOpen.value
}

const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
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
    @apply px-5 py-2 text-sm font-medium text-white relative overflow-hidden transition-all duration-200;
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


/* Smooth dropdown fade */
.fade-enter-active,
.fade-leave-active {
    transition: opacity .25s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>

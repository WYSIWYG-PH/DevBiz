<template>
    <section class="section-texture bg-slate-950 py-16 border-t border-b border-primary">
        <div class="container mx-auto px-4">
            <div class="mb-12 text-center">
                <h2 class="text-3xl font-bold text-white mb-4">Our Projects</h2>
                <p class="text-gray-400 max-w-2xl mx-auto">Explore our portfolio of successful projects that showcase
                    our expertise and commitment to excellence.</p>
            </div>

            <div class="relative">
                <!-- Carousel Container -->
                <div class="overflow-hidden">
                    <div class="flex transition-transform duration-500 ease-out"
                        :style="{ transform: `translateX(-${currentIndex * 100}%)` }" @mouseenter="pauseAutoSlide"
                        @mouseleave="resumeAutoSlide">
                        <div v-for="(project, index) in projects" :key="index" class="w-full flex-shrink-0 px-2">
                            <div class="bg-slate-900 rounded-lg overflow-hidden max-w-2xl mx-auto">
                                <div class="h-64 overflow-hidden">
                                    <img :src="project.image" :alt="project.title" class="w-full h-full object-cover">
                                </div>
                                <div class="p-6">
                                    <span
                                        class="inline-block px-3 py-1 text-xs font-medium bg-primary bg-opacity-20 text-primary rounded-full mb-4">
                                        {{ project.category }}
                                    </span>
                                    <h3 class="text-xl font-semibold text-white mb-3">
                                        {{ project.title }}
                                    </h3>
                                    <p class="text-gray-400 mb-4">
                                        {{ project.description }}
                                    </p>
                                    <div v-if="project.link">
                                        <a :href="project.link" target="_blank"
                                            class="inline-block mt-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-90 transition">
                                            Visit Website
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Close -->
                <button @click="closeLightbox"
                    class="absolute top-4 right-4 z-20 text-gray-300 hover:text-white transition text-2xl">
                    ✕
                </button>

                <!-- Prev / Next -->
                <button @click.stop="prevImage"
                    class="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-slate-800/80 hover:bg-slate-700 text-white w-11 h-11 rounded-full flex items-center justify-center transition">
                    <Icon name="ph:caret-left" class="size-6 text-primary" />
                </button>
                <button @click.stop="nextImage"
                    class="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-slate-800/80 hover:bg-slate-700 text-white w-11 h-11 rounded-full flex items-center justify-center transition">
                    <Icon name="ph:caret-right" class="size-6 text-primary" />
                </button>
            </div>
        </transition>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import projects from '~/data/projects';

const lightboxIndex = ref(null);

const openLightbox = (index) => {
    lightboxIndex.value = index;
};

const closeLightbox = () => {
    lightboxIndex.value = null;
};

const nextImage = () => {
    lightboxIndex.value = (lightboxIndex.value + 1) % projects.length;
};

const prevImage = () => {
    lightboxIndex.value = (lightboxIndex.value - 1 + projects.length) % projects.length;
};

const goToSlide = (index) => {
    currentIndex.value = index;
};

const startAutoSlide = () => {
    autoSlideInterval = setInterval(() => {
        nextSlide();
    }, 5000); // Auto-slide every 5 seconds
};

const stopAutoSlide = () => {
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
    }
};

const pauseAutoSlide = () => {
    stopAutoSlide();
};

const resumeAutoSlide = () => {
    startAutoSlide();
};

onMounted(() => window.addEventListener('keydown', handleKey));
onUnmounted(() => window.removeEventListener('keydown', handleKey));
</script>

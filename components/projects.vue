<template>
    <section class="section-texture bg-slate-950 py-16 border-t border-b border-primary">
        <div class="container mx-auto px-4">
            <div class="mb-12 text-center">
                <h2 class="text-3xl font-bold text-white mb-4">Our Projects</h2>
                <p class="text-gray-400 max-w-2xl mx-auto">Explore our portfolio of successful projects that showcase
                    our expertise and commitment to excellence.</p>
            </div>

            <!-- Responsive Project Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div v-for="(project, index) in projects" :key="index"
                    class="group flex flex-col rounded-2xl overflow-hidden bg-slate-900 ring-1 ring-white/5 shadow-lg
                           transition-all duration-300 hover:ring-primary/60 hover:shadow-[0_0_30px_-6px_rgba(0,220,130,0.45)] hover:-translate-y-1.5"
                    v-motion :initial="{ opacity: 0, y: 30 }" :visible-once="{
                        opacity: 1,
                        y: 0,
                        transition: { delay: (index % 3) * 120, duration: 600 }
                    }">

                    <!-- Full image (no crop) -->
                    <button type="button" @click="openLightbox(index)"
                        class="block w-full bg-slate-800/40 p-3 cursor-zoom-in">
                        <img :src="project.image" :alt="project.title" loading="lazy"
                            class="w-full h-auto object-contain rounded-lg transition-transform duration-500 group-hover:scale-[1.02]" />
                    </button>

                    <!-- Info panel -->
                    <div class="flex flex-col flex-1 p-6 pt-3">
                        <span
                            class="self-start inline-block px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full mb-3">
                            {{ project.category }}
                        </span>
                        <h3 class="text-lg font-semibold text-white">{{ project.title }}</h3>
                        <p class="text-sm text-gray-400 mt-2 flex-1">{{ project.description }}</p>
                        <a v-if="project.link" :href="project.link" target="_blank" rel="noopener"
                            class="self-start mt-4 inline-flex items-center gap-1 px-4 py-2 text-sm font-medium
                                   bg-primary text-gray-900 rounded-md hover:bg-primary-400 transition">
                            Visit Website
                            <Icon name="ph:arrow-up-right" class="size-4" />
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Lightbox -->
        <transition enter-active-class="transition duration-300 ease-out" enter-from-class="opacity-0"
            enter-to-class="opacity-100" leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100" leave-to-class="opacity-0">
            <div v-if="lightboxIndex !== null" class="fixed inset-0 z-50 flex items-center justify-center p-4"
                @click="closeLightbox">
                <div class="absolute inset-0 bg-black/85 backdrop-blur-sm"></div>

                <div class="relative z-10 max-w-3xl w-full max-h-[90vh] overflow-y-auto" @click.stop>
                    <img :src="projects[lightboxIndex].image" :alt="projects[lightboxIndex].title"
                        class="w-full h-auto max-h-[70vh] object-contain mx-auto rounded-xl shadow-2xl ring-1 ring-white/10" />

                    <div class="mt-4 text-center">
                        <h3 class="text-xl font-semibold text-white">{{ projects[lightboxIndex].title }}</h3>
                        <p class="text-gray-300 mt-1">{{ projects[lightboxIndex].description }}</p>
                        <a v-if="projects[lightboxIndex].link" :href="projects[lightboxIndex].link" target="_blank"
                            rel="noopener"
                            class="inline-flex items-center gap-1 mt-4 px-5 py-2 bg-primary text-gray-900 rounded-md font-medium hover:bg-primary-400 transition">
                            Visit Website
                            <Icon name="ph:arrow-up-right" class="size-4" />
                        </a>
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

const handleKey = (e) => {
    if (lightboxIndex.value === null) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
};

onMounted(() => window.addEventListener('keydown', handleKey));
onUnmounted(() => window.removeEventListener('keydown', handleKey));
</script>

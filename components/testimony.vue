<template>
    <section class="section-texture relative overflow-hidden bg-slate-950 py-24 sm:py-32">
        <!-- Decorative background glows -->
        <div class="pointer-events-none absolute inset-0">
            <div class="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl"></div>
            <div class="absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl"></div>
        </div>

        <div class="relative mx-auto max-w-[1440px] px-6 lg:px-8">
            <!-- Header -->
            <div class="mx-auto max-w-2xl text-center mb-14" v-motion :initial="{ opacity: 0, y: 30 }"
                :visible-once="{ opacity: 1, y: 0, transition: { duration: 800 } }">
                <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-white flex flex-wrap items-center justify-center gap-x-3">
                    Our trusted
                    <span
                        class="inline-block rounded-xl bg-gradient-to-r from-primary to-emerald-400 px-3 py-1 text-gray-900">
                        Clients
                    </span>
                </h2>
                <p class="mt-5 text-base/7 text-gray-400">
                    Our mission is to drive progress and enhance the lives of our customers by delivering superior
                    products and services that exceed expectations.
                </p>
            </div>

            <!-- Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <article v-for="(testimonial, index) in testimonials" :key="testimonial.id"
                    class="group relative flex flex-col overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2"
                    :class="index === 0
                        ? 'bg-gradient-to-b from-slate-800/90 to-slate-900/80 ring-1 ring-primary/50 shadow-[0_8px_40px_-12px_rgba(0,220,130,0.55)]'
                        : 'bg-gradient-to-b from-slate-900/80 to-slate-900/40 ring-1 ring-white/10 hover:ring-primary/40 hover:shadow-[0_8px_36px_-14px_rgba(0,220,130,0.5)]'"
                    v-motion :initial="{ opacity: 0, y: 24 }"
                    :visible-once="{ opacity: 1, y: 0, transition: { delay: (index % 4) * 100, duration: 600, ease: 'easeOut' } }">

                    <!-- Top accent line -->
                    <span
                        class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        :class="{ 'opacity-100': index === 0 }"></span>

                    <!-- Decorative quote glyph -->
                    <svg class="pointer-events-none absolute -bottom-2 right-3 h-20 w-20 text-primary/[0.07] transition-colors duration-300 group-hover:text-primary/[0.12]"
                        viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path
                            d="M9.13 8.6c.51.18.87.66.87 1.21v6.69A2.5 2.5 0 0 1 7.5 19h-3A2.5 2.5 0 0 1 2 16.5v-3.66c0-4.2 2.2-7.1 5.93-8.32a1 1 0 0 1 .62 1.9C6.3 7.16 4.9 8.7 4.4 10.6c.36-.07.73-.1 1.1-.1H7.5c.56 0 1.1.08 1.63.1Zm10 0c.51.18.87.66.87 1.21v6.69A2.5 2.5 0 0 1 17.5 19h-3A2.5 2.5 0 0 1 12 16.5v-3.66c0-4.2 2.2-7.1 5.93-8.32a1 1 0 0 1 .62 1.9c-2.25.74-3.65 2.28-4.15 4.18.36-.07.73-.1 1.1-.1h1.99c.56 0 1.1.08 1.64.1Z" />
                    </svg>

                    <!-- Top row: logo + rating -->
                    <div class="relative flex items-center justify-between mb-5">
                        <div class="h-12 w-12 overflow-hidden rounded-xl bg-white p-0.5 ring-1 ring-white/15 shadow-md transition-transform duration-300 group-hover:scale-105 shrink-0">
                            <img :src="testimonial.image" :alt="testimonial.name"
                                class="h-full w-full rounded-[10px] object-contain" loading="lazy">
                        </div>
                        <div class="flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-1 ring-1 ring-white/10">
                            <svg class="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.36 4.18a1 1 0 0 0 .95.69h4.4c.97 0 1.37 1.24.59 1.81l-3.56 2.59a1 1 0 0 0-.36 1.12l1.36 4.18c.3.92-.76 1.69-1.54 1.12l-3.56-2.59a1 1 0 0 0-1.18 0l-3.56 2.59c-.78.57-1.84-.2-1.54-1.12l1.36-4.18a1 1 0 0 0-.36-1.12L1.4 9.6c-.78-.57-.38-1.81.59-1.81h4.4a1 1 0 0 0 .95-.69l1.36-4.18Z" />
                            </svg>
                            <span class="text-sm font-bold text-white">
                                {{ (testimonial.rating || 5.0).toFixed(1) }}
                            </span>
                        </div>
                    </div>

                    <!-- Quote -->
                    <p class="relative text-[15px] leading-relaxed text-gray-300 flex-grow">
                        "{{ testimonial.quote }}"
                    </p>

                    <!-- Author -->
                    <div class="relative mt-6 pt-4 border-t border-white/10">
                        <h3 class="text-base font-bold tracking-tight text-white">{{ testimonial.name }}</h3>
                        <p class="mt-0.5 text-sm font-medium text-primary">{{ testimonial.company }}</p>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>

<script setup>
import testimonials from '~/data/testimony';
</script>

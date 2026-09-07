<template>
    <!-- On large screens the whole section is sized to one viewport, so all three
         members are visible at once and nothing needs to scroll or gets clipped. -->
    <div class="section-texture bg-gray-900 py-24 sm:py-32 lg:flex lg:min-h-screen lg:items-center lg:py-16">
        <div class="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <!-- Same heading treatment as the "Our trusted Clients" header in testimony.vue -->
            <h2 class="mb-8 flex flex-wrap items-center justify-center gap-x-3 text-3xl font-bold tracking-tight text-white sm:text-4xl"
                v-motion :initial="{ opacity: 0, y: 20 }"
                :visible="{ opacity: 1, y: 0, transition: { duration: 700 } }">
                The
                <span
                    class="inline-block rounded-xl bg-gradient-to-r from-primary to-emerald-400 px-3 py-1 text-gray-900">
                    Team
                </span>
            </h2>

            <div
                class="border border-white/15 bg-white/[0.02] lg:grid lg:h-[calc(100vh-14rem)] lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]">

                <!-- Left panel: intro, centred against the full height of the card -->
                <div class="relative overflow-hidden p-8 sm:p-10 lg:flex lg:flex-col lg:justify-center" v-motion
                    :initial="{ opacity: 0, y: 30 }" :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }">
                    <!-- What we build, etched into the four corners of the panel.
                         Decorative only, so they sit behind the copy and take no pointer events. -->
                    <Icon v-for="mark in cornerMarks" :key="mark.icon" :name="mark.icon" :class="mark.position"
                        class="pointer-events-none absolute z-0 hidden size-32 text-primary/[0.18] lg:block xl:size-40" aria-hidden="true" />

                    <h3 class="relative z-10 text-2xl font-bold leading-[1.5] tracking-tight text-pretty text-white xl:text-3xl">
                        The <span
                            class="inline-block rounded-xl bg-gradient-to-r from-primary to-emerald-400 px-3 py-1 text-gray-900">people</span>
                        behind the work
                    </h3>
                    <div class="relative z-10 mt-6 h-px w-16 bg-primary" />
                    <p class="relative z-10 mt-6 text-base/7 text-gray-300 xl:text-lg/8">
                        We're a dynamic group of individuals who are passionate about what we do and dedicated to
                        delivering the best results for our clients.
                    </p>
                </div>

                <!-- Right panel: the three rows split the card height evenly -->
                <ul role="list" class="border-white/15 lg:grid lg:h-full lg:grid-rows-3 lg:border-l">
                    <li v-for="(member, index) in teamMembers" :key="index"
                        class="member-row group relative block border-white/15 p-5 transition-colors duration-500 after:block after:clear-both after:content-[''] hover:bg-white/[0.03] [&:not(:last-child)]:border-b sm:grid sm:min-h-[22rem] sm:grid-cols-[minmax(0,13rem)_minmax(0,1fr)] sm:items-stretch sm:p-0 sm:after:hidden lg:min-h-0"
                        v-motion :initial="{ opacity: 0, y: 30 }" :visible="{
                            opacity: 1,
                            y: 0,
                            transition: { delay: index * 200, duration: 800 }
                        }">

                        <!-- Expertise mark, watermarked into the row's top-right corner -->
                        <Icon :name="member.icon"
                            class="pointer-events-none absolute right-4 top-4 z-10 size-6 text-primary/60 transition-colors duration-500 group-hover:text-primary sm:right-5 sm:top-5 sm:size-8 lg:size-10"
                            aria-hidden="true" />

                        <div
                            class="member-photo relative float-left mb-2 mr-4 w-[5.5rem] overflow-hidden rounded-xl ring-1 ring-white/10 sm:float-none sm:mb-0 sm:mr-0 sm:w-auto sm:self-stretch sm:rounded-none sm:ring-0">
                            <img class="aspect-square w-full object-cover object-top transition-transform duration-700 group-hover:scale-105 sm:absolute sm:inset-0 sm:aspect-auto sm:h-full"
                                :src="member.image" :alt="member.name">
                        </div>

                        <div class="member-copy min-w-0 pr-8 sm:flex sm:flex-col sm:justify-center sm:px-8 sm:py-8 lg:py-5">
                            <h3 class="text-xl font-bold uppercase leading-tight tracking-tight text-white lg:text-lg xl:text-xl">
                                {{ member.name }}
                            </h3>
                            <p class="mt-1 text-sm font-medium text-primary">
                                {{ member.position }}
                            </p>
                            <!-- Clamped only where the row height is fixed, so a long bio
                                 can never push the section past one screen. -->
                            <p class="mt-2.5 text-sm leading-relaxed text-gray-400 lg:line-clamp-4 xl:line-clamp-5">
                                {{ member.description }}
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>


<script setup>
import teamMembers from '~/data/team';

// The four things we build, one per corner of the intro panel.
// Negative offsets push each mark past its corner, so the panel's
// `overflow-hidden` crops it and only part of the shape shows.
const cornerMarks = [
    { icon: 'ph:globe-simple', position: '-left-10 -top-10 xl:-left-12 xl:-top-12' },        // websites
    { icon: 'ph:cpu', position: '-right-10 -top-10 xl:-right-12 xl:-top-12' },               // IoT
    { icon: 'ph:android-logo', position: '-left-10 -bottom-10 xl:-left-12 xl:-bottom-12' },  // android
    { icon: 'ph:stack-simple', position: '-right-10 -bottom-10 xl:-right-12 xl:-bottom-12' },// systems
];
</script>

<template>
    <div class="section-texture bg-slate-900 py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:text-center" v-motion :initial="{ opacity: 0, y: 30 }"
                :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }">
                <p
                    class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">
                    Our Services</p>
                <p class="mt-6 text-lg/8 text-gray-400">We provide a range of digital solutions to help businesses grow
                    and succeed.</p>
            </div>

            <div class="mt-16 sm:mt-20 lg:mt-24">
                <a v-for="(service, index) in services" :key="index" href="#contact"
                    class="service-row group relative grid grid-cols-[3rem_minmax(0,1fr)] items-start gap-x-5 gap-y-4 border-t border-white/10 py-10 last:border-b lg:grid-cols-[5rem_3.5rem_minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center lg:gap-x-10 lg:py-12"
                    v-motion :initial="{ opacity: 0, y: 40 }" :visible="{
                        opacity: 1,
                        y: 0,
                        transition: { delay: index * 120, duration: 700 }
                    }">
                    <!-- Soft highlight that fades in behind the row on hover -->
                    <span
                        class="pointer-events-none absolute inset-x-[-1.5rem] inset-y-0 -z-10 rounded-2xl bg-gradient-to-r from-primary/[0.07] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        aria-hidden="true" />

                    <span class="font-mono text-sm tracking-widest text-gray-500 transition-colors duration-300 group-hover:text-primary">
                        ({{ String(index + 1).padStart(2, '0') }})
                    </span>

                    <Icon :name="service.icon"
                        class="hidden size-9 flex-none text-gray-400 transition-colors duration-300 group-hover:text-primary lg:block"
                        aria-hidden="true" />

                    <h3
                        class="service-title text-4xl font-black lowercase leading-[0.95] tracking-tight text-white transition-transform duration-500 will-change-transform group-hover:translate-x-1 sm:text-5xl lg:text-[3.25rem]">
                        <!-- `displayTitle` opts a service out of the all-lowercase treatment,
                             so acronyms like IoT keep their proper casing. -->
                        <span v-if="service.displayTitle" class="normal-case">{{ service.displayTitle }}</span>
                        <template v-else>{{ service.title }}</template><span v-if="service.tag"
                            class="ml-3 inline-flex translate-y-[-0.15em] items-center rounded-full border border-primary/40 bg-primary/10 px-3 py-1 align-middle text-[0.65rem] font-bold uppercase tracking-[0.2em] leading-none text-primary transition-colors duration-300 group-hover:border-primary/70 group-hover:bg-primary/20">{{
                                service.tag }}</span>
                    </h3>

                    <p class="col-start-2 text-base italic leading-relaxed text-gray-400 lg:col-start-auto">
                        {{ service.description }}
                    </p>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import services from '~/data/services';
</script>

<style scoped>
/* Montserrat's tightest tracking still reads a little wide at display sizes,
   so pull the letters in a touch further for the big titles only. */
.service-title {
    letter-spacing: -0.03em;
}
</style>

<template>
    <section class="tile-bg bg-slate-950 py-16 sm:py-20 border-b border-slate-800 overflow-hidden">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <!-- Heading -->
            <div class="mb-12 text-center" v-motion :initial="{ opacity: 0, y: 30 }"
                :visible-once="{ opacity: 1, y: 0, transition: { duration: 800 } }">
                <h2 class="text-3xl font-bold text-white mb-4">Trusted by local businesses</h2>
                <p class="text-gray-400 max-w-2xl mx-auto">
                    Proudly partnering with growing brands across the Philippines.
                </p>
            </div>

            <!-- Marquee -->
            <div class="marquee">
                <div class="marquee-track">
                    <div v-for="(client, index) in loopClients" :key="index"
                        class="chip" :title="client.name">
                        <img :src="client.logo" :alt="client.name"
                            class="h-full w-full object-cover" loading="lazy" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue';

const clients = [
    { name: 'UniLux', logo: '/images/logos/unilux_logo.jpg' },
    { name: 'XNY Events & Food Services', logo: '/images/logos/xny_logo.jpg' },
    { name: "DC's & Cake Creations", logo: '/images/logos/dccakes_logo.jpg' },
    { name: 'Home Meals by Raf & Nika', logo: '/images/logos/homemeals-logo.jpg' },
    { name: 'Urban Fragrance', logo: '/images/logos/urbanfrags-logo.jpg' },
    { name: 'Laagan Gear Rental Davao', logo: '/images/logos/laagan-gear-rental-davao-logo.jpg' },
    { name: 'GAB Matcha Bar', logo: '/images/logos/gab-matcha-bar-logo.jpg' },
    { name: 'Chade Inanag', logo: '/images/logos/chade-inanag-logo.png' },
    { name: 'Halal Food Package Davao', logo: '/images/logos/halal-logo.jpg' },
];

// Duplicate the list so the marquee can loop seamlessly.
const loopClients = computed(() => [...clients, ...clients]);
</script>

<style scoped>
/* Tiled grid texture */
.tile-bg {
    background-image:
        linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
    background-size: 48px 48px;
    background-position: center;
}

.marquee {
    position: relative;
    width: 100%;
    overflow: hidden;
    /* Fade the edges */
    -webkit-mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
    mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
}

.marquee-track {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    width: max-content;
    animation: marquee-scroll 35s linear infinite;
}

.chip {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 8rem;
    width: 8rem;
    border-radius: 9999px;
    overflow: hidden;
    box-shadow: 0 6px 22px -8px rgba(0, 0, 0, 0.6);
}

@keyframes marquee-scroll {
    from {
        transform: translateX(0);
    }

    to {
        /* Move by half the track (one full set of logos) for a seamless loop */
        transform: translateX(-50%);
    }
}
</style>

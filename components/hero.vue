<template>
    <!-- Mobile view: Absolute positioning with centered text -->
    <div class="flex min-h-[500px] h-screen bg-gray-900 relative overflow-hidden">

        <div class="absolute inset-0 md:hidden w-full h-full">
            <img src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Code editor showing development environment" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gray-900 bg-opacity-70"></div>
        </div>


        <div class="absolute inset-0 flex items-center justify-center md:hidden">
            <div class="w-full px-6 py-12 text-center flex flex-col items-center">
                <h1 class="text-4xl font-extrabold text-white leading-tight mb-6">
                    <span v-motion :initial="{ opacity: 0, y: 20 }"
                        :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }">
                        Driving business success with
                    </span>
                    <span class="text-primary" v-motion :initial="{ opacity: 0, scale: 0.9 }" :enter="{
                        opacity: 1,
                        scale: 1,
                        transition: {
                            delay: 400,
                            duration: 800,
                            ease: 'easeOut'
                        }
                    }">
                        innovative solutions.
                    </span>
                </h1>
                <p class="text-gray-300 text-lg mb-8 max-w-lg mx-auto" v-motion :initial="{ opacity: 0 }" :enter="{
                    opacity: 1,
                    transition: {
                        delay: 800,
                        duration: 800
                    }
                }">
                    We partner with ambitious businesses to build websites, mobile apps, and software that drive
                    success.
                </p>
                <div class="flex justify-center space-x-4" v-motion :initial="{ opacity: 0, y: 20 }" :enter="{
                    opacity: 1,
                    y: 0,
                    transition: {
                        delay: 1200,
                        duration: 600
                    }
                }">
                    <button
                        class="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-emerald-400 px-7 py-3.5 font-semibold text-gray-900 shadow-lg shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_4px_rgba(0,220,130,0.55)] active:translate-y-0"
                        onclick="window.location.href='https://www.facebook.com/profile.php?id=61586726650291'">
                        <Icon name="mdi:facebook" class="size-5" />
                        Visit Us
                    </button>
                    <button @click="openContact = true"
                        class="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary/70 px-7 py-3.5 font-semibold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-gray-900 active:translate-y-0">
                        <Icon name="mdi:email-outline" class="size-5" />
                        Contact Us
                    </button>
                </div>
            </div>
        </div>

        <!-- Desktop view: Exactly as in the original -->
        <div class="hidden md:flex w-full flex-row items-center h-screen">
            <div class="w-2/3 px-8 lg:px-12 xl:px-16 py-12 text-left">
                <h1 class="text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                    <span v-motion :initial="{ opacity: 0, y: 20 }"
                        :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }">
                        Driving business success with
                    </span>
                    <span class="text-primary" v-motion :initial="{ opacity: 0, scale: 0.9 }" :enter="{
                        opacity: 1,
                        scale: 1,
                        transition: {
                            delay: 400,
                            duration: 800,
                            ease: 'easeOut'
                        }
                    }">
                        innovative solutions.
                    </span>
                </h1>
                <p class="text-gray-300 text-lg mb-8 max-w-lg" v-motion :initial="{ opacity: 0 }" :enter="{
                    opacity: 1,
                    transition: {
                        delay: 800,
                        duration: 800
                    }
                }">
                    We partner with ambitious businesses to build websites, mobile apps, and software that drive
                    success.
                </p>
                <div class="flex justify-start space-x-4" v-motion :initial="{ opacity: 0, y: 20 }" :enter="{
                    opacity: 1,
                    y: 0,
                    transition: {
                        delay: 1200,
                        duration: 600
                    }
                }">
                    <button
                        class="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-emerald-400 px-7 py-3.5 font-semibold text-gray-900 shadow-lg shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_4px_rgba(0,220,130,0.55)] active:translate-y-0"
                        onclick="window.location.href='https://www.facebook.com/profile.php?id=61586726650291'">
                        <Icon name="mdi:facebook" class="size-5" />
                        Visit Us
                    </button>
                    <button @click="openContact = true"
                        class="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary/70 px-7 py-3.5 font-semibold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-gray-900 active:translate-y-0">
                        <Icon name="mdi:email-outline" class="size-5" />
                        Contact Us
                    </button>
                </div>
            </div>
            <div class="w-1/2 h-auto relative" v-motion :initial="{ opacity: 0, x: 50 }" :enter="{
                opacity: 1,
                x: 0,
                transition: {
                    delay: 0,
                    duration: 1000
                }
            }">
                <img src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Code editor showing development environment" class="w-full h-full object-cover" />
                <div class="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent"></div>
            </div>
        </div>
    </div>
    <!-- Contact Modal -->
    <transition enter-active-class="transition duration-300 ease-out" enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100" leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
        <div v-if="openContact" class="fixed inset-0 z-50 flex items-center justify-center">
            <!-- Backdrop -->
            <div class="absolute inset-0 bg-black/70 backdrop-blur-sm" @click="openContact = false"></div>

            <!-- Modal Card -->
            <div class="relative z-10 w-full max-w-md mx-4 rounded-xl
             bg-slate-900/90 backdrop-blur-md border border-white/10
             shadow-xl p-6">
                <!-- Close -->
                <button @click="openContact = false"
                    class="absolute top-3 right-3 text-gray-400 hover:text-white transition">
                    ✕
                </button>

                <h2 class="text-2xl font-semibold text-white mb-6">
                    Contact Us
                </h2>

                <div class="space-y-5 text-gray-300">
                    <!-- Email -->
                    <div class="flex items-center gap-4">
                        <Icon name="mdi:email-outline" class="size-6 text-primary" />
                        <a href="mailto:balsthedeveloper@gmail.com" class="hover:text-primary transition">
                            balsthedeveloper@gmail.com
                        </a>
                    </div>

                    <!-- Facebook -->
                    <div class="flex items-center gap-4">
                        <Icon name="mdi:facebook" class="size-6 text-primary" />
                        <a href="https://www.facebook.com/profile.php?id=61586726650291" target="_blank"
                            class="hover:text-primary transition">
                            DevBiz
                        </a>
                    </div>

                    <!-- Phone -->
                    <div class="flex items-center gap-4">
                        <Icon name="mdi:phone-outline" class="size-6 text-primary" />
                        <span class="hover:text-primary transition">
                            0975 592 9290
                        </span>
                    </div>
                </div>

                <div class="mt-8 flex justify-end">
                    <button @click="openContact = false" class="px-4 py-2 bg-primary text-gray-900 rounded-md
                 hover:bg-primary-400 transition">
                        Close
                    </button>
                </div>
            </div>
        </div>
    </transition>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const openContact = ref(false)

// Close on ESC
const handleKey = (e) => {
    if (e.key === 'Escape') openContact.value = false
}

onMounted(() => window.addEventListener('keydown', handleKey))
onUnmounted(() => window.removeEventListener('keydown', handleKey))
</script>

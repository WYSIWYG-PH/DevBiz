<template>
    <transition enter-active-class="transition duration-300 ease-out" enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100" leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
        <div v-if="open" class="fixed inset-0 z-[60] flex items-center justify-center" role="dialog" aria-modal="true"
            aria-labelledby="contact-modal-title">
            <!-- Backdrop -->
            <div class="absolute inset-0 bg-black/70 backdrop-blur-sm" @click="open = false"></div>

            <!-- Modal Card -->
            <div class="relative z-10 w-full max-w-md mx-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 shadow-xl p-6">
                <!-- Close -->
                <button @click="open = false" aria-label="Close contact details"
                    class="absolute top-3 right-3 text-gray-400 hover:text-white transition">
                    ✕
                </button>

                <h2 id="contact-modal-title" class="text-2xl font-semibold text-white mb-6">
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
                            rel="noopener" class="hover:text-primary transition">
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
                    <button @click="open = false"
                        class="px-4 py-2 bg-primary text-gray-900 rounded-md hover:bg-primary-400 transition">
                        Close
                    </button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

const open = useContactModal()

// Close on ESC
const handleKey = (e) => {
    if (e.key === 'Escape') open.value = false
}

onMounted(() => window.addEventListener('keydown', handleKey))
onUnmounted(() => window.removeEventListener('keydown', handleKey))
</script>

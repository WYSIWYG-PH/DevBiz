<template>
    <section class="bg-slate-950 py-16 border-t border-b border-slate-800">
        <div class="container mx-auto px-4">
            <!-- Header -->
            <div class="mb-16 text-center">
                <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">Our Onboarding Process</h2>
                <p class="text-gray-400 max-w-3xl mx-auto text-lg">
                    Our approach is simple: listen deeply, design smart, build fast. Here's how we bring your vision to
                    life with clarity and care.
                </p>
            </div>

            <!-- Process Steps -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
                <div v-for="(step, index) in steps" :key="index"
                    class="bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-primary transition-all duration-300 group">
                    <!-- Icon -->
                    <div
                        class="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-slate-800 group-hover:bg-primary group-hover:bg-opacity-20 transition-all duration-300">
                        <Icon :name="step.icon" class="size-8 text-primary" />
                    </div>

                    <!-- Content -->
                    <div>
                        <h3 class="text-xl font-semibold text-white mb-2">
                            {{ index + 1 }}. {{ step.title }}
                        </h3>
                        <p class="text-gray-400 text-sm">
                            {{ step.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const steps = [
    {
        icon: 'ph:users',
        title: 'Client Consultation',
        description: 'Connect and gather requirements'
    },
    {
        icon: 'ph:lightbulb',
        title: 'Planning',
        description: 'Design the implementation strategy'
    },
    {
        icon: 'ph:code',
        title: 'Execution',
        description: 'Build and implement the solution'
    },
    {
        icon: 'ph:flask',
        title: 'Beta Testing',
        description: 'Test and refine quality'
    },
    {
        icon: 'ph:rocket-launch',
        title: 'Deployment',
        description: 'Launch to production'
    }
];
</script>
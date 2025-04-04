<template>
    <div class="bg-gray-900 py-24 sm:py-32">
        <div class="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
            <div class="max-w-xl" v-motion :initial="{ opacity: 0, y: 30 }"
                :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }">
                <h2 class="text-3xl font-semibold tracking-tight text-pretty text-white sm:text-4xl">Meet our team</h2>
                <p class="mt-6 text-lg/8 text-gray-300">We're a dynamic group of individuals who are passionate about
                    what
                    we
                    do and dedicated to delivering the best results for our clients.</p>
            </div>
            <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                <li v-for="(member, index) in teamMembers" :key="index" v-motion :initial="{ opacity: 0, x: 30 }"
                    :visible="{
                        opacity: 1,
                        x: 0,
                        transition: {
                            delay: index * 300,
                            duration: 800,
                            ease: 'easeOut'
                        }
                    }">
                    <div class="flex items-center gap-x-6">
                        <img class="size-16 rounded-full" :src="member.image" :alt="member.name">
                        <div>
                            <h3 class="text-base/7 font-semibold tracking-tight text-white">{{ member.name }}</h3>
                            <p class="text-sm/6 font-semibold text-primary">{{ member.position }}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>


<script setup>
import teamMembers from '~/data/team';
</script>
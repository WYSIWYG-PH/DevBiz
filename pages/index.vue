<template>
  <section class="flex min-h-[500px] bg-gray-900 relative overflow-hidden">
    <div class="w-full flex flex-col md:flex-row items-center">
      <!-- Left Content -->
      <div class="w-full md:w-1/2 px-6 md:px-8 lg:px-12 xl:px-16 py-12 text-center md:text-left">
        <!-- Main Heading -->
        <h1 class="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
          Driving business success with <span class="text-primary">innovative solutions.</span>
        </h1>

        <!-- Description -->
        <p class="text-gray-300 text-lg mb-8 max-w-lg mx-auto md:mx-0">
          We partner with ambitious businesses to build websites, mobile apps, and software that drive success.
        </p>

        <!-- CTA Buttons -->
        <div class="flex justify-center md:justify-start space-x-4">
          <button
            class="bg-primary hover:bg-primary-400 text-gray-900 px-6 py-3 rounded-md font-medium transition duration-200">
            Discover more
          </button>
        </div>
      </div>
      <!-- Image (Now visible on mobile) -->
      <div class="w-full md:w-1/2 h-[300px] md:h-auto relative">
        <img
          src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Code editor showing development environment" class="w-full h-full object-cover" />
        <!-- Dark gradient overlay -->
        <div class="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-gray-900 to-transparent"></div>
      </div>
    </div>
  </section>

  <section class="bg-gray-900 py-16 px-6 md:px-12 relative">
    <!-- Inner Gradient Shadow (top part) -->
    <div class="absolute opacity-55 inset-x-0 top-0 h-12 bg-gradient-to-b from-primary-500 to-transparent shadow-lg"></div>

    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-4xl font-extrabold text-white mb-6">Our Services</h2>
      <p class="text-gray-300 text-lg mb-12">We provide a range of digital solutions to help businesses grow and
        succeed.</p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Service 1 -->
        <div class="bg-transparent p-6 rounded-lg text-start">
          <div class="flex justify-start mb-4">
            <span class="text-[#00DC82] text-4xl">
              <Icon name="ph-desktop" class="size-7 flex-shrink-0 leading-none" />
            </span>
          </div>
          <h3 class="text-2xl font-bold text-white mb-3">Web Development</h3>
          <p class="text-gray-400">Custom websites built with the latest technologies to ensure performance and
            scalability.</p>
        </div>

        <!-- Service 2 -->
        <div class="bg-transparent p-6 rounded-lg text-start">
          <div class="flex justify-start mb-4">
            <span class="text-[#00DC82] text-4xl">
              <Icon name="ph-android-logo" class="size-7 flex-shrink-0 leading-none" />
            </span>
          </div>
          <h3 class="text-2xl font-bold text-white mb-3">Mobile App Development</h3>
          <p class="text-gray-400">High-quality mobile applications tailored to your business needs.</p>
        </div>

        <!-- Service 3 -->
        <div class="bg-transparent p-6 rounded-lg text-start">
          <div class="flex justify-start mb-4">
            <span class="text-[#00DC82] text-4xl">
              <Icon name="ph-code" class="size-7 flex-shrink-0 leading-none" />
            </span>
          </div>
          <h3 class="text-2xl font-bold text-white mb-3">Software Solutions</h3>
          <p class="text-gray-400">Robust and scalable software solutions to enhance business operations.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>
<template>
    <title>DevBiz</title>
    <Navbar />

    <div id="hero">
        <Hero />
    </div>

    <div id="trusted">
        <TrustedBy />
    </div>

    <div id="services">
        <Services />
    </div>

    <div id="projects">
        <Projects />
    </div>

    <div id="testimonials">
        <Testimony />
    </div>

    <div id="team">
        <Team />
    </div>

    <div id="process">
        <Process />
    </div>

    <Footer />

    <!-- Single shared instance, opened from the hero and the navbar CTA -->
    <ContactModal />
</template>

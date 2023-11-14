<script lang="ts">
import NavBar from "./components/navigation/NavBar.vue";
import Home from "./components/pages/Home.vue";
import About from "./components/pages/About.vue";
import Projects from "./components/pages/Projects.vue";
import Experience from "./components/pages/Experience.vue";
import Item from "./components/Item.vue";

export default {
    name: "Portfolio",
    components: {
        NavBar,
        Home,
        About,
        Projects,
        Experience,
        Item,
    },
};
</script>

<template>
    <section class="font-serif h-screen text-platinum w-8/12 mx-auto flex gap-40 overflow-y-hidden">
        <NavBar />
        <div id="home" class="grid place-items-center h-screen w-full text-platinum-500 overflow-y-auto ">
            <Home />
            <About />
            <Projects />
            <Experience />
        </div>  
    </section>
</template>
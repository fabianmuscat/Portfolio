<script lang="ts">
import NavItem from "./NavItem.vue";

export default {
    components: {
        NavItem,
    },
};
</script>

<template>
    <nav class="flex flex-col gap-10 uppercase items-center justify-center">
        <NavItem title="Home" location="#home" />
        <NavItem title="About" location="#about" />
        <NavItem title="Projects" location="#projects" />
        <NavItem title="Experience" location="#experience" />
    </nav>
</template>
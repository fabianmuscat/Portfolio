<script setup lang="ts">
defineProps({
    title: String,
    location: String
});
</script>

<template>
    <p class="relative group cursor-pointer w-full px-4 py-2 text-center">
        <router-link 
            :to="location"     
            class="text-platinum-400 transition-all ease-in-out duration-500 group-hover:text-platinum-900">
            {{ title }}
        </router-link>
        <span
            class="absolute -top-0.5 left-0 w-full h-0.5 bg-tangerine-500 duration-500 transition-all group-hover:h-full ease-in-out -z-10"></span>
        <span
            class="absolute -bottom-0.5 left-0 w-full h-0.5 bg-tangerine-500 duration-500 transition-all group-hover:h-full ease-in-out -z-10"></span>
    </p>
</template>
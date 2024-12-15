<script setup>
import { RouterLink, RouterView } from "vue-router";
import AppFooter from "@/components/AppFooter.vue";
import AppHeader from "@/components/AppHeader.vue";
</script>

<template>
  <body class="min-h-screen flex flex-col bg-gray-100 text-gray-800 font-sans">
    <AppHeader />
    <RouterView />
    <AppFooter />
  </body>
</template>

<style scoped></style>

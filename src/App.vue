<script setup lang="ts">
// import { RouterLink, RouterView } from "vue-router";
import TheHeader from "./components/layout/TheHeader.vue";
import TheAside from "./components/layout/TheAside.vue";
import TheFooterVue from "./components/layout/TheFooter.vue";
</script>

<template>
  <div class="grid min-h-screen grid-rows-base text-stone-800">
    <div>
      <TheHeader />
    </div>

    <div class="flex">
      <div class="w-32 border-r-2 border-stone-200 py-4 px-6">
        <TheAside />
      </div>
      <div class="p-8">
        <RouterView />
      </div>
    </div>

    <div>
      <TheFooterVue />
    </div>
  </div>
</template>

<style scoped></style>

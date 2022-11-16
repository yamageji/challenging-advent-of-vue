<script setup lang="ts">
// import { RouterLink, RouterView } from "vue-router";
import TheHeader from "./components/layout/TheHeader.vue";
import TheAside from "./components/layout/TheAside.vue";
import TheFooterVue from "./components/layout/TheFooter.vue";
</script>

<template>
  <div class="grid min-h-screen grid-rows-base">
    <div>
      <TheHeader />
    </div>

    <div class="flex gap-10">
      <div class="p-4">
        <TheAside />
      </div>
      <div class="p-4">
        <RouterView />
      </div>
    </div>

    <div>
      <TheFooterVue />
    </div>
  </div>
</template>

<style scoped></style>

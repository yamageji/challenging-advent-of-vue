<script setup lang="ts">
import TopHeading from "@/components/UI/TopHeading.vue";
import PageDay11 from "@/components/day-11/PageDay11.vue";
</script>

<template>
  <main>
    <TopHeading>
      <template v-slot:day> Day 11 </template>
      Xmas Tree Lights
    </TopHeading>
    <div class="mt-10">
      <PageDay11 />
    </div>
  </main>
</template>

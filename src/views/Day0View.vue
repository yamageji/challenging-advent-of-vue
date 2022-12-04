<script setup lang="ts">
import TopHeading from "@/components/UI/TopHeading.vue";
import PageDay0 from "@/components/day-0/PageDay0.vue";
</script>

<template>
  <main>
    <TopHeading>
      <template v-slot:day> Day 0 </template>
      tic-tac-toe
    </TopHeading>
    <PageDay0 />
  </main>
</template>

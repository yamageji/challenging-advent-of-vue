<script setup lang="ts">
import TopHeading from "@/components/UI/TopHeading.vue";
import PageDay6 from "@/components/day-6/PageDay6.vue";
</script>

<template>
  <main>
    <TopHeading>
      <template v-slot:day> Day 6 </template>
      x items for single y
    </TopHeading>
    <div class="mt-10">
      <PageDay6 />
    </div>
  </main>
</template>

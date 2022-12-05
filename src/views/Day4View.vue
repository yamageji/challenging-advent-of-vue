<script setup lang="ts">
import TopHeading from "@/components/UI/TopHeading.vue";
import PageDay4 from "@/components/day-4/PageDay4.vue";
</script>

<template>
  <main>
    <TopHeading>
      <template v-slot:day> Day 4 </template>
      Recursive tree
    </TopHeading>
    <div class="mt-10">
      <PageDay4 />
    </div>
  </main>
</template>

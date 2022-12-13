<script setup lang="ts">
import TopHeading from "@/components/UI/TopHeading.vue";
import PageDay12 from "@/components/day-12/PageDay12.vue";
</script>

<template>
  <main>
    <TopHeading>
      <template v-slot:day> Day 12 </template>
      find josephs gift
    </TopHeading>
    <div class="mt-10">
      <PageDay12 />
    </div>
  </main>
</template>

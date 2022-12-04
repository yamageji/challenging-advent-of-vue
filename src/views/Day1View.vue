<script setup lang="ts">
import TopHeading from "@/components/UI/TopHeading.vue";
import PageDay1 from "@/components/day-1/PageDay1.vue";
</script>

<template>
  <main>
    <TopHeading>
      <template v-slot:day> Day 1 </template>
      debounced search bar
    </TopHeading>
    <PageDay1 class="mt-10" />
  </main>
</template>

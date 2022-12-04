<script setup lang="ts">
import TopHeading from "@/components/UI/TopHeading.vue";
import PageDay3 from "@/components/day-3/PageDay3.vue";
</script>

<template>
  <main>
    <TopHeading>
      <template v-slot:day> Day 3 </template>
      Countdown timer to Christmas
    </TopHeading>
    <div class="mt-10">
      <PageDay3 />
    </div>
  </main>
</template>

<script setup lang="ts">
import TopHeading from "@/components/UI/TopHeading.vue";
import PageDay5 from "@/components/day-5/PageDay5.vue";
</script>

<template>
  <main>
    <TopHeading>
      <template v-slot:day> Day 5 </template>
      Gift Labels
    </TopHeading>
    <div class="mt-10">
      <PageDay5 />
    </div>
  </main>
</template>

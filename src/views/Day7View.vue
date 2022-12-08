<script setup lang="ts">
import TopHeading from "@/components/UI/TopHeading.vue";
import PageDay7 from "@/components/day-7/PageDay7.vue";
</script>

<template>
  <main>
    <TopHeading>
      <template v-slot:day> Day 7 </template>
      drag and drop presents
    </TopHeading>
    <div class="">
      <PageDay7 />
    </div>
  </main>
</template>

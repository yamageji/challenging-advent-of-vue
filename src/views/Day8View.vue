<script setup lang="ts">
import TopHeading from "@/components/UI/TopHeading.vue";
import PageDay8 from "@/components/day-8/PageDay8.vue";
</script>

<template>
  <main>
    <TopHeading>
      <template v-slot:day> Day 8 </template>
      i18n happy holidays
    </TopHeading>
    <div class="mt-10">
      <PageDay8 />
    </div>
  </main>
</template>

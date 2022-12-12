<script setup lang="ts">
import TopHeading from "@/components/UI/TopHeading.vue";
import PageDay9 from "@/components/day-9/PageDay9.vue";
</script>

<template>
  <main>
    <TopHeading>
      <template v-slot:day> Day 9 </template>
      sort presents
    </TopHeading>
    <div class="mt-10">
      <PageDay9 />
    </div>
  </main>
</template>

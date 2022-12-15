<script setup lang="ts">
import TopHeading from "@/components/UI/TopHeading.vue";
import PageDay13 from "@/components/day-13/PageDay13.vue";
</script>

<template>
  <main>
    <TopHeading>
      <template v-slot:day> Day 13 </template>
      christmas tree ornaments
    </TopHeading>
    <div class="mt-10">
      <PageDay13 />
    </div>
  </main>
</template>

<script setup lang="ts">
import TopHeading from "@/components/UI/TopHeading.vue";
import PageDay14 from "@/components/day-14/PageDay14.vue";
</script>

<template>
  <main>
    <TopHeading>
      <template v-slot:day> Day 14 </template>
      secret santa generator
    </TopHeading>
    <div class="mt-10">
      <PageDay14 />
    </div>
  </main>
</template>

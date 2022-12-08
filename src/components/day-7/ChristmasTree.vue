<!-- You shouldn't need to update this file -->
<script setup lang="ts">
import Tree from "@/assets/day-7/tree.svg?component";
import ChristmasPresent from "./ChristmasPresent.vue";

type Props = {
  presents: string[];
};

defineProps<Props>();
</script>

<template>
  <div class="relative flex justify-center">
    <Tree class="w-28" />
    <div class="-gap-8 group absolute -bottom-8 flex items-end" v-auto-animate>
      <ChristmasPresent
        class="even:z-10 even:-mx-4 even:-mb-4"
        v-for="present in presents"
        :key="present"
        :name="present"
      />
    </div>
  </div>
</template>

<style scoped></style>

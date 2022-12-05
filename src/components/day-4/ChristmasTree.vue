<script setup lang="ts">
import { computed } from "vue";

type Props = {
  size: "sm" | "md" | "lg";
  volume: number;
};
const props = withDefaults(defineProps<Props>(), {
  size: "md",
  volume: 1,
});

const circleSize = computed(() => {
  switch (props.size) {
    case "sm":
      return "h-12 w-12 -mx-2 -my-1.5";
    case "md":
      return "h-16 w-16 -mx-3 -my-2";
    case "lg":
      return "h-20 w-20 -mx-4 -my-3";
  }
});
</script>

<template>
  <div>
    <ChristmasTree :size="props.size" v-if="volume > 1" :volume="volume - 1" />

    <div class="flex flex-row justify-center">
      <div
        v-for="i in volume"
        class="relative flex items-center justify-center rounded-full bg-green-500"
        :class="circleSize"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const AMPLIFY = 14;
const offsetY = 16 + (Math.random() * AMPLIFY - AMPLIFY / 2);
const offsetX = 16 + (Math.random() * AMPLIFY - AMPLIFY / 2);
withDefaults(
  defineProps<{
    ornament: boolean;
  }>(),
  {
    ornament: false,
  }
);

const randomColor = (isShow: boolean) => {
  if (!isShow) return "";
  const selectColor = Math.floor(Math.random() * 3);
  if (selectColor === 0) {
    return "bg-sky-500";
  } else if (selectColor === 1) {
    return "bg-rose-400";
  }
};
</script>

<template>
  <div
    class="absolute z-10 h-4 w-4 rounded-full"
    :class="randomColor(ornament)"
    :style="{
      top: `${offsetY}px`,
      left: `${offsetX}px`,
    }"
  ></div>
</template>

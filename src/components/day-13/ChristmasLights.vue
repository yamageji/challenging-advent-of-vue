<script setup lang="ts">
type Props = {
  isTwinkle: boolean;
};
const props = defineProps<Props>();

const AMPLIFY = 15;
const offsetY = Math.random() * AMPLIFY - AMPLIFY / 2;
const offsetX = Math.random() * AMPLIFY - AMPLIFY / 2;
const MAX_DELAY = 2;
const twinkleDelay = Math.random() * MAX_DELAY;
</script>

<template>
  <div
    :class="{
      'twinkle relative z-20 m-2 h-2 w-2 rounded-full bg-yellow-100 shadow-md':
        props.isTwinkle,
    }"
    :style="{
      top: `${offsetY}px`,
      left: `${offsetX}px`,
      'animation-delay': `${twinkleDelay}s`,
    }"
  ></div>
</template>

<style scoped>
.twinkle {
  animation: twinkle 2s ease-in-out infinite;
}
@keyframes twinkle {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>

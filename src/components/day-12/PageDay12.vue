<script setup lang="ts">
import { ref, computed } from "vue";
const volume = ref(10);
const boxList = computed(() => new Array(volume.value));
</script>

<template>
  <input type="range" v-model="volume" />
  {{ volume }}
  <ul class="flex flex-wrap gap-2">
    <li
      v-for="(box, index) in boxList"
      :key="index"
      class="flex h-10 w-10 items-center justify-center rounded-md bg-stone-300"
    >
      {{ index }}
    </li>
  </ul>
</template>

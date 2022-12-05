<script setup lang="ts">
import { ref } from "vue";
import ChristmasTree from "./ChristmasTree.vue";
import BaseButton from "../UI/BaseButton.vue";

const MAX_VOLUME = 5;
const volume = ref(1);
</script>

<template>
  <div class="flex items-start gap-16">
    <div
      class="flex flex-col items-center gap-3 rounded-md border border-stone-300 px-4 py-2"
    >
      <p class="text-lg font-bold text-green-700">tree size</p>
      <div class="flex gap-2">
        <BaseButton
          :type="volume > 1 ? 'primary' : 'disabled'"
          @click="volume--"
          class="flex h-10 w-10 items-center justify-center"
          >ー</BaseButton
        >
        <BaseButton
          :type="volume < MAX_VOLUME ? 'primary' : 'disabled'"
          @click="volume++"
          class="flex h-10 w-10 items-center justify-center"
          >＋</BaseButton
        >
      </div>
    </div>

    <div class="mt-4 flex flex-col items-center justify-center">
      <div class="flex h-full w-full items-center justify-center">
        <ChristmasTree size="sm" :volume="volume" />
      </div>
      <div class="-m-2 h-12 w-6 rounded-sm bg-amber-700"></div>
    </div>
  </div>
</template>

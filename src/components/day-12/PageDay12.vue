<script setup lang="ts">
import { ref } from "vue";
import EliminationVisualiser from "./EliminationVisualiser.vue";

const numberOfGifts = ref(10);
</script>

<template>
  <div>
    <div class="flex items-center gap-2">
      <label for="numberOfGifts">Number of gifts (2 to 30):</label>
      <input
        type="range"
        id="numberOfGifts"
        min="2"
        max="30"
        v-model.number="numberOfGifts"
        class="border-2 border-orange-500 p-1"
      />
    </div>
    <div class="mt-8">
      <EliminationVisualiser :number-of-gifts="numberOfGifts" />
    </div>
  </div>
</template>

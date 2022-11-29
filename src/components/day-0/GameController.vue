<script lang="ts" setup>
import { computed } from "vue";

type Player = {
  id: number;
  name: "CIRCLE" | "CROSS";
  mark: "○" | "✕";
};

type Props = {
  result: string;
  isPlaying: boolean;
  nextPlayer: Player | undefined;
};
const props = defineProps<Props>();

type Emits = {
  (e: "startGame"): void;
};
const emit = defineEmits<Emits>();
const startGame = () => {
  emit("startGame");
};

const resultClass = computed(() =>
  props.result === "○"
    ? "text-rose-500 bg-rose-100  border-rose-500"
    : props.result === "✕"
    ? "text-green-500 bg-green-100  border-green-500"
    : ""
);
</script>

<template>
  <div>
    <div
      class="w-40 rounded-md border border-stone-200 p-4"
      :class="resultClass"
    >
      <p v-if="!isPlaying && !result" class="text-lg font-bold">push start!</p>
      <p v-else-if="isPlaying && !result" class="text-lg font-bold">
        next player : {{ nextPlayer?.mark }}
      </p>
      <p v-else-if="result === 'draw'">draw!!</p>
      <p v-else-if="result" class="text-lg font-bold">
        winner is {{ result }} !
      </p>
    </div>

    <div class="mt-4">
      <button
        v-if="!isPlaying && !result"
        type="button"
        @click="startGame"
        class="rounded-full bg-rose-500 px-4 py-1 text-green-50 duration-200 hover:bg-rose-600"
      >
        start
      </button>
      <button
        v-else-if="isPlaying && !result"
        type="button"
        @click="startGame"
        class="rounded-full bg-stone-500 px-4 py-1 text-green-50 duration-200 hover:bg-stone-600"
      >
        reset
      </button>
      <button
        v-else-if="result"
        type="button"
        @click="startGame"
        class="rounded-full bg-rose-500 px-4 py-1 text-green-50 duration-200 hover:bg-rose-600"
      >
        restart
      </button>
    </div>
  </div>
</template>

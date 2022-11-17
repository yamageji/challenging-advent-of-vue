<script lang="ts" setup>
import { ref, computed } from "vue";

type Area = {
  id: number;
  state: string;
};
type Player = {
  id: number;
  name: "CIRCLE" | "CROSS";
  mark: "○" | "✕";
};

const firstPlayer: Player = {
  id: 0,
  name: "CIRCLE",
  mark: "○",
};
const secondPlayer: Player = {
  id: 1,
  name: "CROSS",
  mark: "✕",
};

const isPlaying = ref(false);
const nextPlayer = ref<Player>();
const gameArea = ref<Area[]>([]);
const result = computed(() => {
  if (gameArea.value[0].state === "○") {
    return "○";
  }
  return "";
});

const createInitialState = (length: number = 9): Area[] => {
  const initialState: Area[] = [];
  for (let i = 0; i < length; i++) {
    initialState.push({ id: 0, state: "" });
  }
  return initialState;
};
const startGame = (): void => {
  gameArea.value = createInitialState();
  isPlaying.value = true;
  nextPlayer.value = Math.floor(Math.random() * 2) ? firstPlayer : secondPlayer;
};
const resetGame = (): void => {
  gameArea.value = createInitialState();
  isPlaying.value = false;
};
const toggleTurn = (): Player =>
  (nextPlayer.value = nextPlayer.value!.id ? firstPlayer : secondPlayer);
const onMarkToArea = (index: number): void => {
  if (gameArea.value) {
    gameArea.value[index].state = nextPlayer.value!.mark;
  }
  toggleTurn();
  if (result.value !== "") isPlaying.value === false;
};

const activePanel = (index: number) =>
  gameArea.value[index].state === "○"
    ? "bg-red-500"
    : gameArea.value[index].state === "✕"
    ? "bg-green-500"
    : "";

gameArea.value = createInitialState();

const resultClass = computed(() =>
  result.value !== "" ? "text-rose-500 bg-rose-100  border-rose-500" : ""
);
</script>

<template>
  <div class="mt-8 flex gap-10">
    <div>
      <ul class="flex w-[128px] flex-wrap gap-1">
        <li v-for="(area, index) in gameArea" :key="area.id">
          <button
            type="button"
            :class="activePanel(index)"
            class="flex h-10 w-10 items-center justify-center rounded-sm bg-stone-200 font-bold text-white"
            @click="onMarkToArea(index)"
            :disabled="result !== ''"
          >
            {{ gameArea[index].state }}
          </button>
        </li>
      </ul>
    </div>

    <div>
      <div
        class="w-40 rounded-md border border-stone-200 p-4"
        :class="resultClass"
      >
        <p v-if="!isPlaying" class="text-lg font-bold">push start!</p>
        <p v-else-if="isPlaying && !result" class="text-lg font-bold">
          next player : {{ nextPlayer?.mark }}
        </p>
        <p v-else-if="result" class="text-lg font-bold">
          winner is {{ result }} !
        </p>
      </div>

      <div class="mt-4">
        <button
          v-if="!isPlaying"
          type="button"
          @click="startGame"
          class="rounded-full bg-rose-500 px-4 py-1 text-green-50"
        >
          start
        </button>
        <button
          v-else-if="isPlaying && !result"
          type="button"
          @click="resetGame"
          class="rounded-full bg-stone-500 px-4 py-1 text-green-50"
        >
          reset
        </button>
        <button
          v-else-if="result"
          type="button"
          @click="resetGame"
          class="rounded-full bg-rose-500 px-4 py-1 text-green-50"
        >
          restart
        </button>
      </div>
    </div>
  </div>
</template>

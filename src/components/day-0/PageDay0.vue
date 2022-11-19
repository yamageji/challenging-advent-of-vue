<script lang="ts" setup>
import { ref, computed } from "vue";

import GameController from "./GameController.vue";
import GamePanel from "./GamePanel.vue";
import { calculateWinLoss } from "./calculateWinLoss";

type Area = string[];
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
const gameArea = ref<Area>([""]);
const result = computed(() => calculateWinLoss(gameArea.value));

const createInitialState = (length: number = 9): Area => {
  const initialState: Area = Array(length).fill("");
  return initialState;
};
const startGame = (): void => {
  gameArea.value = createInitialState();
  isPlaying.value = true;
  nextPlayer.value = Math.floor(Math.random() * 2) ? firstPlayer : secondPlayer;
};
const toggleTurn = (): Player =>
  (nextPlayer.value = nextPlayer.value!.id ? firstPlayer : secondPlayer);
const onMarkToArea = (index: number): void => {
  if (gameArea.value[index] === "") {
    gameArea.value[index] = nextPlayer.value!.mark;
    toggleTurn();
  }
  if (result.value !== "") isPlaying.value = false;
};

gameArea.value = createInitialState();
</script>

<template>
  <div class="mt-8 flex gap-10">
    <GamePanel
      :gameArea="gameArea"
      :result="result"
      @onMarkToArea="onMarkToArea"
    />
    <GameController
      @startGame="startGame"
      :result="result"
      :isPlaying="isPlaying"
      :nextPlayer="nextPlayer"
    />
  </div>
</template>

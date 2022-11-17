<script lang="ts" setup>
import { ref } from 'vue';

type Area = {
  id: number;
  state: string;
};
type Player = {
  id: number;
  name: 'CIRCLE' | 'CROSS';
  mark: '○' | '✕';
};

const firstPlayer: Player = {
  id: 0,
  name: 'CIRCLE',
  mark: '○',
};
const secondPlayer: Player = {
  id: 1,
  name: 'CROSS',
  mark: '✕',
};

const isPlaying = ref(false);
const nextPlayer = ref<Player>();
const gameArea = ref<Area[]>([]);

const createInitialState = (length: number = 9): Area[] => {
  const initialState: Area[] = [];
  for (let i = 0; i < length; i++) {
    initialState.push({ id: 1, state: '' });
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
};
</script>

<template>
  <div class="mt-8">
    <button
      v-if="!isPlaying"
      type="button"
      @click="startGame"
      class="rounded-full bg-green-600 px-4 py-1 text-green-50"
    >
      start
    </button>
    <button
      v-else
      type="button"
      @click="resetGame"
      class="rounded-full bg-rose-600 px-4 py-1 text-green-50"
    >
      reset
    </button>

    <div v-if="isPlaying" class="mt-4">
      <p>next player: {{ nextPlayer?.mark }}</p>

      <ul class="mt-4 flex w-[128px] flex-wrap gap-1">
        <li v-for="(area, index) in gameArea" :key="area.id">
          <button
            type="button"
            class="flex h-10 w-10 items-center justify-center bg-stone-200"
            @click.once="onMarkToArea(index)"
          >
            {{ gameArea[index].state }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

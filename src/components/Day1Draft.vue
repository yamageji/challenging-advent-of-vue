<script lang="ts" setup>
import { ref } from 'vue';

type Area = {
  id: number;
  state: string;
};
type Mark = 'CIRCLE' | 'CROSS' | '';

const isPlaying = ref(false);
const nextTurn = ref<Mark>('');
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
  nextTurn.value = Math.floor(Math.random() * 2) ? 'CIRCLE' : 'CROSS';
};
const resetGame = (): void => {
  gameArea.value = createInitialState();
  isPlaying.value = false;
};
const toggleTurn = (): Mark =>
  (nextTurn.value = nextTurn.value === 'CROSS' ? 'CIRCLE' : 'CROSS');
const onMarkToArea = (index: number): void => {
  if (gameArea.value) {
    gameArea.value[index].state = nextTurn.value === 'CROSS' ? '✕' : '○';
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
      <p>next turn: {{ nextTurn }}</p>

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

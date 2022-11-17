<script lang="ts" setup>
import { ref } from 'vue';

const isPlaying = ref(false);
const nextTurn = ref('');
const initialState = () => [
  {
    id: 1,
    state: '',
  },
  {
    id: 2,
    state: '',
  },
  {
    id: 3,
    state: '',
  },
  {
    id: 4,
    state: '',
  },
  {
    id: 5,
    state: '',
  },
  {
    id: 6,
    state: '',
  },
  {
    id: 7,
    state: '',
  },
  {
    id: 8,
    state: '',
  },
  {
    id: 9,
    state: '',
  },
];
const gameArea = ref();

const startGame = () => {
  gameArea.value = initialState();
  isPlaying.value = true;
  nextTurn.value = Math.floor(Math.random() * 2) ? 'CIRCLE' : 'CROSS';
};
const changeTurn = () =>
  (nextTurn.value = nextTurn.value === 'CROSS' ? 'CIRCLE' : 'CROSS');
const onMarkToArea = (index: number) => {
  gameArea.value[index].state = nextTurn.value === 'CROSS' ? '✕' : '○';
  changeTurn();
};
const resetGame = () => {
  gameArea.value = initialState();
  isPlaying.value = false;
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

    <div v-if="isPlaying">
      <p>next turn: {{ nextTurn }}</p>

      <ul class="mt-4 flex gap-1">
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

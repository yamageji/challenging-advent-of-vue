<script setup lang="ts">
import { useItemComparison } from "../../composables/itemComparison";
const { itemsSortByPrice, numCheaperItems } = useItemComparison();
</script>

<template>
  <ol class="flex gap-12">
    <li v-for="(item, index) in itemsSortByPrice" :key="item.id">
      <div
        v-if="item"
        class="flex w-48 flex-col gap-2 rounded-lg border border-stone-300 p-2 pb-6 shadow"
      >
        <img
          :src="item.thumbnail"
          alt=""
          class="h-40 w-full rounded-md object-cover"
          height="80"
        />
        <div>
          <h2 class="text-sm font-bold">{{ item.title }}</h2>
          <p class="mt-4 text-center text-3xl font-bold text-green-700">
            {{ item.price }}<span class="ml-1 text-xl text-stone-700">$</span>
          </p>
        </div>
      </div>

      <div class="mt-4 text-center text-2xl font-bold text-stone-700">
        <div
          v-if="index === 0"
          class="w-full rounded-full bg-green-900 p-1 text-green-100"
        >
          1
        </div>
        <div v-else class="w-full rounded-full bg-green-900 p-1 text-green-100">
          {{ numCheaperItems }}
        </div>
      </div>
    </li>
  </ol>
</template>

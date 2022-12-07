<script setup lang="ts">
import { useItemComparison } from "../../composables/itemComparison";
const { itemsSortByPrice, numCheaperItems } = useItemComparison();
</script>

<template>
  <ol class="flex gap-4">
    <li v-for="(item, index) in itemsSortByPrice" :key="item.id">
      <div
        v-if="item"
        class="flex w-52 flex-col gap-4 rounded-lg border border-stone-300 p-2 shadow"
      >
        <img :src="item.thumbnail" alt="" class="h-20 rounded-md" height="80" />
        <div>
          <h2 class="text-sm font-bold">{{ item.title }}</h2>
          <p class="text-2xl font-bold">
            {{ item.price }}<span class="ml-1 text-lg">$</span>
          </p>
        </div>
      </div>
      <div v-if="index === 1">{{ numCheaperItems }}個買えますね</div>
    </li>
  </ol>
</template>

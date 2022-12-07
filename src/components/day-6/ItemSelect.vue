<script setup lang="ts">
import { ref, watch } from "vue";
import { useItemComparison } from "../../composables/itemComparison";

const { availableItems, itemsToCompare, isFetchingItems } = useItemComparison();

const selectedItem = ref();

watch(selectedItem, (newItem, prevItem) => {
  itemsToCompare.value = itemsToCompare.value.filter(
    (item) => item.id !== prevItem?.id
  );
  itemsToCompare.value.push(newItem);
});
</script>

<template>
  <p v-if="isFetchingItems">loading...</p>
  <select
    v-else
    v-model="selectedItem"
    class="rounded-md border-2 bg-stone-100 p-2"
  >
    <option disabled value="">Select an item</option>
    <option v-for="item in availableItems" :value="item" :key="item.id">
      {{ item.title }} - ${{ item.price }}
    </option>
  </select>
</template>

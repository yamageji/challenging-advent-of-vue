<script setup lang="ts">
import { ref, computed } from "vue";
import presents from "@/data/day-9/presents.json";
import BaseButton from "../UI/BaseButton.vue";

const isSortedItems = ref(false);
const defaultPresentList = presents;
const sortedItemList = presents
  .slice()
  .sort(
    (a, b) =>
      a.dimensions.height * a.dimensions.width -
      b.dimensions.height * b.dimensions.width
  );
const currentPresentList = computed(() =>
  isSortedItems.value ? sortedItemList : defaultPresentList
);
const toggleSortList = () => (isSortedItems.value = !isSortedItems.value);
</script>

<template>
  <div class="flex h-full w-full flex-col items-start gap-8">
    <BaseButton type="primary" @click="toggleSortList">toggle</BaseButton>

    <div class="max-w-md">
      <div class="mt-2">
        <TransitionGroup
          name="list"
          tag="ul"
          class="flex items-center justify-center gap-4"
        >
          <li v-for="present in currentPresentList" :key="present.id">
            <img :src="present.src" :alt="`Present ${present.id}`" />
          </li>
        </TransitionGroup>
      </div>
    </div>
  </div>
</template>

<style scoped>
.list-move {
  transition: all 0.5s ease;
}
</style>

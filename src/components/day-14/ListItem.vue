<script setup lang="ts">
import { useList } from "@/stores/secretSanta";

type Props = {
  item: {
    name: string;
    email: string;
  };
};
defineProps<Props>();

const store = useList();
</script>

<template>
  <div class="border-green my-2 flex rounded-md border-2 p-2">
    <div class="flex-1">
      <h2 class="text-lg font-bold">{{ item.name }}</h2>
      <p class="text-gray-500">{{ item.email }}</p>
    </div>
    <button @click="store.remove(item.email)">🗑</button>
  </div>
</template>

<style lang="scss" scoped></style>

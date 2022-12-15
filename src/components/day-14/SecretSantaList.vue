<script setup lang="ts">
const { matches } = defineProps({
  matches: { type: Array, default: [] },
});
</script>

<template>
  <div class="my-12 rounded-lg border-2 p-6 text-xl">
    <div v-for="{ receiver, giver } in matches" :key="receiver" class="mt-4">
      <strong>{{ giver?.name }} 🎅🏻</strong> is the secret santa of
      <strong>{{ receiver?.name }} 🎁</strong>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

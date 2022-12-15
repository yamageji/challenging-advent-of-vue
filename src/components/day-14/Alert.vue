<script setup lang="ts">
const { error } = defineProps({
  error: { type: String, default: "" },
});
</script>

<template>
  <div v-if="error" class="my-2 flex rounded-md bg-red-500 p-2 text-white">
    <p class="flex-1">{{ error }}</p>
  </div>
</template>

<style lang="scss" scoped></style>

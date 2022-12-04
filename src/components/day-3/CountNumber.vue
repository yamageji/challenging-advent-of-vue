<script setup lang="ts">
type Props = {
  count: number;
  label: string;
};
const props = defineProps<Props>();
</script>

<template>
  <div class="flex w-14 flex-col gap-2">
    <div class="relative h-14 overflow-hidden rounded-md bg-green-300">
      <Transition>
        <span
          :key="count"
          class="numbers absolute top-0 left-[50%] pt-3 font-mono text-3xl font-bold text-green-700"
        >
          {{ props.count }}
        </span>
      </Transition>
    </div>

    <span class="text-center text-sm font-bold text-green-500">
      {{ props.label }}
    </span>
  </div>
</template>

<style scoped>
.numbers {
  transform: translateX(-50%);
  font-size: 32px;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
.v-enter-from {
  transform: translateY(-100%) translateX(-50%);
}
.v-leave-to {
  transform: translateY(100%) translateX(-50%);
}
.v-enter-to,
.v-leave-from {
  transform: translateY(0px) translateX(-50%);
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

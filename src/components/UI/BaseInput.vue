<script setup lang="ts">
type Props = {
  modelValue: string;
  label: string;
};
type Emits = {
  (e: "update:modelValue", value: string): void;
};

const props = defineProps<Props>();
const emit = defineEmits<Emits>();
</script>

<template>
  <label class="flex items-center gap-2 text-lg font-bold">
    <span class="w-20"> {{ label }} : </span>
    <input
      :value="modelValue"
      @input="
        emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      class="mt-1 w-full max-w-[240px] rounded-sm border border-stone-500 p-2"
    />
  </label>
</template>

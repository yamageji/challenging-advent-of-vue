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
  <label class="flex items-center gap-2 font-bold">
    <span class="w-20"> {{ label }} : </span>
    <input
      :value="modelValue"
      @input="
        emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      class="w-[240px] rounded-sm border border-stone-500 px-2 py-1"
    />
  </label>
</template>

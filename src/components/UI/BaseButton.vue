<script setup lang="ts">
import { computed } from "vue";

type Props = {
  type: "primary" | "secondary" | "outline" | "disabled";
};
const props = withDefaults(defineProps<Props>(), {
  type: "primary",
});

type Emits = {
  (e: "click"): void;
};
const emit = defineEmits<Emits>();
const handleClick = () => {
  emit("click");
};

const styleByType = computed(() => {
  if (props.type === "primary") {
    return "bg-green-600 text-green-50 hover:bg-green-700";
  } else if (props.type === "secondary") {
    return "bg-green-200 text-green-800 hover:bg-green-300";
  } else if (props.type === "outline") {
    return "border border-green-800 text-green-800 hover:bg-green-50";
  } else if (props.type === "disabled") {
    return "bg-stone-200 text-stone-800";
  } else {
    return "";
  }
});
</script>

<template>
  <button
    @click="handleClick"
    :class="styleByType"
    class="rounded-full px-4 py-1 duration-200"
    :disabled="type === 'disabled'"
  >
    <slot />
  </button>
</template>

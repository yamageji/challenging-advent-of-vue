<script setup lang="ts">
import { computed } from "vue";

type Props = {
  type: "primary" | "secondary" | "outline";
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
    return "bg-rose-600 text-rose-50 hover:bg-rose-700";
  } else if (props.type === "secondary") {
    return "border border-stone-800 text-stone-800 hover:bg-stone-50";
  } else if (props.type === "outline") {
    return "border border-rose-800 text-rose-800 hover:bg-rose-50";
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
  >
    <slot />
  </button>
</template>

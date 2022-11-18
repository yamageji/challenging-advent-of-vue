<script lang="ts" setup>
type Area = string[];

type Props = {
  gameArea: Area;
  result: string;
};
const props = defineProps<Props>();

type Emits = {
  (e: "onMarkToArea", index: number): void;
};
const emit = defineEmits<Emits>();
const onMarkToArea = (index: number) => {
  emit("onMarkToArea", index);
};

const activePanelClass = (index: number) =>
  props.gameArea[index] === "○"
    ? "bg-red-500"
    : props.gameArea[index] === "✕"
    ? "bg-green-500"
    : "bg-stone-200";
</script>

<template>
  <div>
    <ul class="flex w-[128px] flex-wrap gap-1">
      <li v-for="(area, index) in gameArea" :key="index">
        <button
          type="button"
          :class="activePanelClass(index)"
          class="flex h-10 w-10 items-center justify-center rounded-sm font-bold text-white"
          @click.once="onMarkToArea(index)"
          :disabled="result !== ''"
        >
          {{ gameArea[index] }}
        </button>
      </li>
    </ul>
  </div>
</template>

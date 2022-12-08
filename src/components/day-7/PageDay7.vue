<script setup lang="ts">
import { ref } from "vue";
import ChristmasTree from "./ChristmasTree.vue";
import ChristmasPresent from "./ChristmasPresent.vue";

const presents = ref(["tall-red-gift", "small-red-gift", "blue-gift"]);
const presentsUnderTheTree = ref<string[]>([]);

const startDrag = (evt: DragEvent, index: string) => {
  evt.dataTransfer!.dropEffect = "move";
  evt.dataTransfer!.effectAllowed = "move";
  evt.dataTransfer!.setData("index", index);
};

const onDrop = (evt: DragEvent) => {
  const index = evt.dataTransfer!.getData("index");
  presentsUnderTheTree.value.push(presents.value[Number(index)]);
  presents.value.splice(Number(index), 1);
};
</script>

<template>
  <div class="mt-10 flex w-full flex-col">
    <ChristmasTree
      @drop="onDrop"
      :presents="presentsUnderTheTree"
      @dragover.prevent
      @dragenter.prevent
    />
    <div
      class="mt-14 flex h-28 w-[330px] items-center justify-center rounded-md bg-stone-200"
    >
      <div class="flex items-end justify-center" v-auto-animate>
        <ChristmasPresent
          v-for="(p, index) in presents"
          :key="p"
          @dragstart="startDrag($event, index.toString())"
          draggable="true"
          :name="p"
        />
      </div>
    </div>
  </div>
</template>

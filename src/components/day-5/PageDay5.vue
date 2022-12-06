<script setup lang="ts">
import { ref, computed } from "vue";
import { useToggle } from "@vueuse/core";
import BaseInput from "../UI/BaseInput.vue";
import GiftCard from "./GiftCard.vue";

const toName = ref("");
const fromName = ref("");

const [layout, toggleLayout] = useToggle();
const layoutClass = computed(() => {
  return layout.value ? "bg-blue-500" : "bg-red-500";
});
</script>

<template>
  <div class="flex flex-col gap-10">
    <div class="flex flex-col gap-2">
      <BaseInput v-model="toName" label="TO" />
      <BaseInput v-model="fromName" label="FROM" />
    </div>

    <button
      @click="toggleLayout()"
      class="rounded-md bg-green-500 px-4 py-2 text-white"
      type="button"
    >
      {{ layout ? "row" : "column" }}
    </button>

    <GiftCard :to-name="toName" :from-name="fromName"></GiftCard>
  </div>
</template>

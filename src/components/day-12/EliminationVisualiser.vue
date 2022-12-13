<script setup lang="ts">
import { ref, computed, watch } from "vue";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/solid";

type Props = {
  numberOfGifts: Number;
};

const props = defineProps<Props>();

const currentStep = ref(1);

const giftList = computed(() =>
  [...Array(props.numberOfGifts).keys()].map((i) => ++i)
);
const eliminationOrder = computed(() => {
  const gifts = giftList.value;
  let indexToEliminate = 0;
  let moveBy = 1;
  const result = [];
  while (gifts.length > 1) {
    indexToEliminate = (indexToEliminate + moveBy) % gifts.length;
    result.push(gifts[indexToEliminate]);
    gifts.splice(indexToEliminate, 1);
  }
  return result;
});
const numSteps = computed(() => eliminationOrder.value.length);
const eliminatedAfterCurrentStep = computed(() =>
  eliminationOrder.value.slice(0, currentStep.value)
);
watch(props.numberOfGifts, () => (currentStep.value = 1));
</script>

<template>
  <div class="flex flex-col items-center gap-4 text-center">
    <div class="flex items-center gap-6">
      <button
        type="button"
        class="rounded-md bg-green-700 px-4 py-2 font-bold tracking-wider text-white disabled:opacity-50"
        :disabled="currentStep === 1"
        @click="currentStep = 1"
      >
        reset
      </button>
      <div class="flex items-center gap-2">
        <button
          type="button"
          class="flex h-8 w-8 items-center justify-center rounded-md border border-green-700 text-green-700 duration-150 hover:bg-green-100 disabled:opacity-40"
          :disabled="currentStep === 1"
          @click="currentStep--"
        >
          <ChevronLeftIcon class="h-6 w-6" />
        </button>
        <button
          type="button"
          class="flex h-8 w-8 items-center justify-center rounded-md border border-green-700 text-green-700 duration-150 hover:bg-green-100 disabled:opacity-40"
          :disabled="currentStep === numSteps"
          @click="currentStep++"
        >
          <ChevronRightIcon class="h-6 w-6" />
        </button>
      </div>
      <button
        type="button"
        class="rounded-md bg-green-700 px-4 py-2 font-bold tracking-wider text-white disabled:opacity-50"
        :disabled="currentStep === numSteps"
        @click="currentStep = numSteps"
      >
        result
      </button>
    </div>
    <div class="grid auto-rows-auto grid-cols-5 gap-3">
      <div
        v-for="n in numberOfGifts"
        :key="n"
        class="flex h-[44px] w-[44px] items-center justify-center rounded-md bg-stone-800 text-2xl text-stone-50"
        :class="{
          'opacity-40': eliminatedAfterCurrentStep.includes(Number(n)),
        }"
      >
        {{ n }}
      </div>
    </div>
  </div>
</template>

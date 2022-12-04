<script lang="ts" setup>
import { useNow } from "@vueuse/core";
import { computed } from "vue";
import CountNumber from "./CountNumber.vue";

const christmas = new Date("12/25/2022 00:00:00");

const now = useNow();

const differentialTime = computed(
  () => christmas.getTime() - now.value.getTime()
);
const ONE_DAY = 1000 * 60 * 60 * 24;
const ONE_HOURS = 1000 * 60 * 60;
const ONE_MINUTE = 1000 * 60;
const ONE_SECONDS = 1000;

const days = computed(() => {
  return Math.floor(differentialTime.value / ONE_DAY);
});
const hours = computed(() => {
  return Math.floor((differentialTime.value / ONE_HOURS) % 24);
});
const minute = computed(() => {
  return Math.floor((differentialTime.value / ONE_MINUTE) % 60);
});
const seconds = computed(() => {
  return Math.floor((differentialTime.value / ONE_SECONDS) % 60);
});
</script>

<template>
  <div class="rounded-md border border-stone-200 bg-stone-50 p-4 shadow">
    <p
      class="inline-block rounded-md bg-stone-200 px-4 py-1 text-center font-bold tracking-wide text-stone-700"
    >
      Christmas Countdown
    </p>
    <div class="mt-8 flex justify-center gap-4">
      <CountNumber :count="days" label="days" />
      <CountNumber :count="hours" label="hours" />
      <CountNumber :count="minute" label="minutes" />
      <CountNumber :count="seconds" label="seconds" />
    </div>
  </div>
</template>

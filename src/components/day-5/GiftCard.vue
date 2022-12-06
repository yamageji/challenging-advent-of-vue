<script setup lang="ts">
import { computed } from "vue";

type Props = {
  toName: string;
  fromName: string;
  layout: boolean;
};

const props = defineProps<Props>();

const layoutClass = computed(() => {
  return props.layout ? "flex-col" : "flex-row gap-8";
});
</script>

<template>
  <div>
    <div
      class="relative rounded-xl bg-emerald-500 px-8 py-10 before:absolute before:left-4 before:top-4 before:h-6 before:w-6 before:rounded-full before:bg-white"
    >
      <div class="flex items-center" :class="layoutClass">
        <img
          src="/assets/santa.svg"
          alt="サンタクロースがソリに乗っているイラスト"
          class="w-40"
        />
        <div class="w-full">
          <h1
            class="mt-4 text-center text-3xl font-bold tracking-wide text-white"
          >
            Happy Holidays!
          </h1>

          <div class="mt-8 flex flex-col gap-2">
            <div
              class="rounded bg-emerald-100 px-2 py-1.5 font-bold tracking-wider text-stone-800"
            >
              <span
                class="mr-2 inline-block w-16 rounded-full bg-stone-600 py-1 text-center text-sm font-bold tracking-wide text-stone-50"
              >
                TO
              </span>
              {{ toName }}
            </div>

            <div
              class="rounded bg-emerald-100 px-2 py-1.5 font-bold tracking-wider text-stone-800"
            >
              <span
                class="mr-2 inline-block w-16 rounded-full bg-stone-600 py-1 text-center text-sm font-bold tracking-wide text-stone-50"
              >
                FROM
              </span>
              {{ fromName }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

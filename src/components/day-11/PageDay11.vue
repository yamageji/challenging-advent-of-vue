<script setup lang="ts">
import { ref } from "vue";
import ChristmasTree from "./ChristmasTree.vue";
import ChristmasLights from "./ChristmasLights.vue";
import BaseButton from "../UI/BaseButton.vue";
import { Switch } from "@headlessui/vue";

const MAX_VOLUME = 5;
const volume = ref(1);
const isTwincleOn = ref(false);
</script>

<template>
  <div class="flex items-start gap-16">
    <div class="flex flex-col justify-center">
      <div
        class="flex flex-col items-center gap-3 rounded-md border border-stone-300 px-4 py-2"
      >
        <p class="text-lg font-bold text-green-700">tree size</p>
        <div class="flex gap-2">
          <BaseButton
            :type="volume > 1 ? 'primary' : 'disabled'"
            @click="volume--"
            class="flex h-10 w-10 items-center justify-center"
            >ー</BaseButton
          >
          <BaseButton
            :type="volume < MAX_VOLUME ? 'primary' : 'disabled'"
            @click="volume++"
            class="flex h-10 w-10 items-center justify-center"
            >＋</BaseButton
          >
        </div>
      </div>

      <div
        class="mt-4 flex flex-col items-center gap-3 rounded-md border border-stone-300 px-4 py-2"
      >
        <p class="text-lg font-bold text-green-700">light switch</p>
        <Switch
          v-model="isTwincleOn"
          :class="isTwincleOn ? 'bg-green-700' : 'bg-stone-500'"
          class="relative inline-flex h-8 w-16 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent px-1 transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-opacity-75"
        >
          <span class="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            :class="isTwincleOn ? 'translate-x-7' : 'translate-x-0'"
            class="pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
          />
        </Switch>
      </div>
    </div>

    <div class="mt-4 flex flex-col items-center justify-center">
      <div class="flex h-full w-full items-center justify-center">
        <ChristmasTree size="sm" :volume="volume">
          <ChristmasLights :is-twincle="isTwincleOn" />
        </ChristmasTree>
      </div>
      <div class="-m-2 h-12 w-6 rounded-sm bg-amber-700"></div>
    </div>
  </div>
</template>

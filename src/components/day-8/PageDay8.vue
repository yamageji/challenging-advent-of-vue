<script setup lang="ts">
import { computed, watch } from "vue";
import { useCycleList } from "@vueuse/core";
import { useI18n } from "vue-i18n";

const { t, d, locale, availableLocales } = useI18n();

const list = useCycleList(availableLocales);
watch(list.state, (state) => (locale.value = state));
const christmasDate = new Date("2022/12/25");

const days = computed(() => {
  const delta = christmasDate.getTime() - new Date();
  return Math.ceil(delta / (1000 * 60 * 60 * 24));
});

const flags = {
  en: "i-twemoji-flag-united-states",
  de: "i-twemoji-flag-germany",
  "ja-JP": "i-twemoji-flag-japan",
};
</script>

<template>
  <section class="flex flex-col items-center text-center leading-loose">
    <div class="text-3xl">
      {{ t("happyHolidays") }}
    </div>

    <i18n-t keypath="christmasIsComing" tag="span">
      <template #time>
        <span class="font-medium text-green-600">
          {{ t("day", days) }}
        </span>
      </template>

      <template #date>
        {{ d(christmasDate, "long") }}
      </template>
    </i18n-t>

    <div class="w-200px flex items-center justify-between">
      <button class="rounded-md bg-green-500 px-2 py-1" @click="list.next()">
        選択ボタン
      </button>
      <div>
        <span :class="flags[locale]" />
        {{ t("language") }}
      </div>
    </div>
  </section>
</template>

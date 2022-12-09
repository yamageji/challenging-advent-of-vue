<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useI18n } from "vue-i18n";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { LanguageIcon, ChevronDownIcon } from "@heroicons/vue/24/solid";

const { t, d, locale, availableLocales } = useI18n();

const languageList = (value: string) => {
  switch (value) {
    case "en":
      return "English";
    case "de":
      return "Deutsch";
    case "ja-jp":
      return "日本語";
  }
};

const christmasDate = new Date("2022/12/25");

const days = computed(() => {
  const delta = christmasDate.getTime() - new Date();
  return Math.ceil(delta / (1000 * 60 * 60 * 24));
});
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

    <Listbox v-model="locale">
      <ListboxButton
        class="flex items-center justify-center gap-4 rounded-full border border-stone-300 px-4 py-1"
      >
        <div class="flex items-center gap-2">
          <LanguageIcon class="h-6 w-6" />
          <span>
            {{ t("language") }}
          </span>
        </div>
        <ChevronDownIcon class="h-4 w-4" />
      </ListboxButton>
      <ListboxOptions>
        <ListboxOption
          v-for="item in availableLocales"
          :key="item"
          :value="item"
        >
          {{ languageList(item) }}
        </ListboxOption>
      </ListboxOptions>
    </Listbox>
  </section>
</template>

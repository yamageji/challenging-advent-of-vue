<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import {
  LanguageIcon,
  ChevronDownIcon,
  CheckIcon,
} from "@heroicons/vue/24/solid";

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
  <section class="flex items-start gap-10 leading-loose">
    <div class="w-40">
      <Listbox v-model="locale">
        <ListboxButton
          class="flex w-full items-center justify-between gap-4 rounded-md border border-stone-300 px-4 py-1 font-bold duration-150 hover:bg-stone-100"
        >
          <div class="flex items-center gap-2">
            <LanguageIcon class="h-6 w-6" />
            <span>
              {{ t("language") }}
            </span>
          </div>
          <ChevronDownIcon class="h-4 w-4" />
        </ListboxButton>
        <ListboxOptions
          class="mt-2 flex w-full flex-col gap-2 rounded-md border border-stone-300 py-2"
        >
          <ListboxOption
            v-for="item in availableLocales"
            :key="item"
            :value="item"
            v-slot="{ active, selected }"
            class="cursor-pointer"
          >
            <li
              :class="{
                'bg-green-100': active,
                '': !active,
              }"
              class="relative flex items-center gap-2"
            >
              <span
                class="absolute inset-y-0 left-0 flex items-center pl-3 text-green-700"
              >
                <CheckIcon v-show="selected" class="h-4 w-5" />
              </span>
              <span class="ml-10">
                {{ languageList(item) }}
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </Listbox>
    </div>

    <div class="w-[424px] rounded-md border border-stone-300 p-8 text-center">
      <div class="text-3xl font-bold text-stone-800">
        🎄 {{ t("happyHolidays") }} 🎉
      </div>

      <div class="mt-8 text-lg">
        <i18n-t keypath="christmasIsComing" tag="span">
          <template #time>
            <span class="font-bold text-rose-500">
              {{ t("day", days) }}
            </span>
          </template>

          <template #date>
            {{ d(christmasDate, "long") }}
          </template>
        </i18n-t>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
type Props = {
  type: "colume" | "weekly";
};

type PageLink = {
  name: string;
  path: string;
};

const props = withDefaults(defineProps<Props>(), { type: "colume" });

const createPageLinks = (pageLength: number = 25) => {
  const pageLinks: PageLink[] = [];
  for (let i = 0; i < pageLength; i++) {
    pageLinks.push({
      name: `Day-${i}`,
      path: `/day-${i}`,
    });
  }
  return pageLinks;
};
const pageLinks = createPageLinks();

const layoutClassByType = computed(() => {
  switch (props.type) {
    case "colume":
      return "flex gap-2 flex-col";
    case "weekly":
      return "grid grid-cols-7 gap-2";
  }
});
const linkClassByType = computed(() => {
  switch (props.type) {
    case "colume":
      return "block rounded-full bg-stone-300 px-2 py-0.5 text-center ";
    case "weekly":
      return "inline-block flex items-center justify-center bg-stone-300 w-16 h-16 ";
  }
});
</script>

<template>
  <nav>
    <ul :class="layoutClassByType" class="">
      <div aria-hidden="true" class="col-span-3" />
      <li v-for="pageLink in pageLinks" :key="pageLink.name">
        <RouterLink
          :class="linkClassByType"
          class="text-sm text-stone-50 duration-100 hover:bg-stone-400"
          active-class="!bg-stone-500 !font-bold !text-stone-50"
          :to="pageLink.path"
          >{{ pageLink.name }}</RouterLink
        >
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
type PageLink = {
  name: string;
  path: string;
};

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
</script>

<template>
  <aside>
    <nav>
      <ul class="flex flex-col gap-2">
        <li v-for="pageLink in pageLinks" :key="pageLink.name">
          <RouterLink
            class="block rounded-full bg-stone-300 px-2 py-0.5 text-center text-sm text-stone-50 duration-100 hover:bg-stone-400"
            active-class="!bg-rose-100 !font-bold !text-rose-500"
            :to="pageLink.path"
            >{{ pageLink.name }}</RouterLink
          >
        </li>
      </ul>
    </nav>
  </aside>
</template>

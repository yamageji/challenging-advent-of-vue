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
      <ul class="flex flex-col gap-1">
        <li v-for="pageLink in pageLinks" :key="pageLink.name">
          <RouterLink :to="pageLink.path">{{ pageLink.name }}</RouterLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import PageNavigation from "@/components/UI/PageNavigation.vue";
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <main>
    <PageNavigation type="weekly" />
    <p class="mt-8 flex items-center text-lg">
      <span> 公式サイト： </span>
      <a
        href="https://adventofvue.com/"
        class="flex items-center gap-2 underline underline-offset-4"
        >Advent Of Vue
        <ArrowTopRightOnSquareIcon class="h-6 w-6" />
      </a>
    </p>
  </main>
</template>

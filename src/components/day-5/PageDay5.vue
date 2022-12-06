<script setup lang="ts">
import { ref } from "vue";
import { useToggle } from "@vueuse/core";
import BaseInput from "../UI/BaseInput.vue";
import GiftCard from "./GiftCard.vue";

const toName = ref("");
const fromName = ref("");

const [layout, toggleLayout] = useToggle();
</script>

<template>
  <div>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col gap-2">
        <BaseInput v-model="toName" label="TO" />
        <BaseInput v-model="fromName" label="FROM" />
      </div>

      <button
        @click="toggleLayout()"
        class="w-fit rounded-md bg-green-600 px-4 py-2 font-bold tracking-wide text-white shadow duration-150 hover:bg-green-700"
        type="button"
      >
        toggle layout
      </button>
    </div>

    <div class="mt-10">
      <GiftCard :to-name="toName" :from-name="fromName" :layout="layout" />
    </div>
  </div>
</template>

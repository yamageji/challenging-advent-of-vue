<script setup lang="ts">
import BaseInput from "../UI/BaseInput.vue";
import GiftCard from "./GiftCard.vue";

import { ref } from "vue";

const toName = ref("");
const fromName = ref("");
</script>

<template>
  <div class="flex flex-col gap-10">
    <div class="flex flex-col gap-2">
      <BaseInput v-model="toName" label="TO" />
      <BaseInput v-model="fromName" label="FROM" />
    </div>

    <GiftCard :to-name="toName" :from-name="fromName"></GiftCard>
  </div>
</template>

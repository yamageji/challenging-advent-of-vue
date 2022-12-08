<!-- You shouldn't need to update this file -->
<script setup lang="ts">
import TallRedGift from "@/assets/day-7/tall-red-gift.svg?component";
import BlueGift from "@/assets/day-7/blue-gift.svg?component";
import SmallRedGift from "@/assets/day-7/small-red-gift.svg?component";

type Props = {
  name: string;
};

defineProps<Props>();
</script>

<template>
  <div>
    <TallRedGift class="w-16" v-if="name === 'tall-red-gift'" />
    <SmallRedGift class="w-16" v-else-if="name === 'small-red-gift'" />
    <BlueGift class="w-16" v-else-if="name === 'blue-gift'" />
  </div>
</template>

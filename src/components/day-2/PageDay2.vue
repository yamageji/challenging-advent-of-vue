<script setup lang="ts">
import { ref } from "vue";
import BaseButton from "@/components/UI/BaseButton.vue";

type Joke = {
  error: boolean;
  category: string;
  type: string;
  setup: string;
  delivery: string;
  flags: {
    nsfw: boolean;
    religious: boolean;
    political: boolean;
    racist: boolean;
    sexist: boolean;
    explicit: boolean;
  };
  id: number;
  safe: boolean;
  lang: "en";
};

const apiUrl = "https://v2.jokeapi.dev/joke/christmas";
const setup = ref(null);
const delivery = ref(null);
const isDelivery = ref(false);

const getJoke = async () => {
  isDelivery.value = false;
  setup.value = null;
  delivery.value = null;

  try {
    const apiResponseBody = await (await fetch(apiUrl)).json();
    setup.value = apiResponseBody.setup;
    delivery.value = apiResponseBody.delivery;
  } catch (error) {
    console.error(error);
    alert("読み込みに失敗しました");
  }
};

const showDelivery = () => {
  isDelivery.value = true;
};

getJoke();
</script>

<template>
  <div class="flex gap-4">
    <div class="w-28">
      <div v-if="!isDelivery" class="mt-8">
        <BaseButton @click="showDelivery">tell me!</BaseButton>
      </div>
      <div v-else class="mt-8">
        <BaseButton type="secondary" @click="getJoke">another</BaseButton>
      </div>
    </div>
    <div>
      <p
        v-if="setup"
        class="rounded-lg bg-rose-100 p-8 font-bold tracking-wide text-stone-700"
      >
        {{ setup }}
      </p>
      <p
        v-if="delivery && isDelivery"
        class="mt-4 rounded-lg bg-green-100 p-8 font-bold tracking-wide text-stone-700"
      >
        {{ delivery }}
      </p>
    </div>
  </div>
</template>

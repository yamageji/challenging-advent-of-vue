<script setup lang="ts">
import { ref } from "vue";
import List from "@/components/day-14/List.vue";
import ParticipantForm from "@/components/day-14/ParticipantForm.vue";
import SecretSantaList from "@/components/day-14/SecretSantaList.vue";
import { useList } from "@/stores/secretSanta";
import { matchPeople } from "@/helpers/match";
import demoData from "@/helpers/demoData";

const store = useList();
store.init(demoData);
const secretSantaList = ref([]);
const generateList = () => (secretSantaList.value = matchPeople(store.list));
</script>

<template>
  <div class="flex h-full w-full flex-col items-center pb-48">
    <div class="flex flex-col items-center">
      <h1 class="text-green text-3xl font-bold">Secret Santa List Generator</h1>
      <div v-if="!secretSantaList.length">
        <p class="my-8 text-gray-500">
          You can add people's names to this list. Using the button
          <strong>generate</strong>, a list of matches for each other will be
          created.
        </p>
        <ParticipantForm />
        <div class="mt-12 text-center">
          <button
            class="bg-green my-2 rounded-md px-12 py-4 text-2xl font-bold text-white"
            @click="generateList"
          >
            Generate list 🎁
          </button>
          <List />
        </div>
      </div>
      <div v-else>
        <h1 class="text-center text-2xl font-bold text-red-500">Matches</h1>
        <SecretSantaList :matches="secretSantaList" />
        <button
          class="bg-green my-2 w-full rounded-md px-12 py-4 text-4xl font-bold text-white"
          @click="generateList"
        >
          Shuffle 🎲
        </button>
        <button
          class="bg-green my-2 w-full rounded-md px-12 py-4 text-4xl font-bold text-white"
          @click="secretSantaList = []"
        >
          ⬅️ Go Back
        </button>
      </div>
    </div>
  </div>
</template>

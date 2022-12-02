<script lang="ts" setup>
import { ref, watch } from "vue";
import { debounce } from "debounce";
import { MagnifyingGlassIcon } from "@heroicons/vue/24/solid";

type Product = {
  id: number;
  title: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  discountPercentage: number;
  stock: number;
  rating: number;
  thumbnail: string;
  images: string[];
};

const apiUrl = "https://dummyjson.com/products/search";

const searchTerm = ref("");
const products = ref<Product[]>([]);
const isLoading = ref(false);

const findProducts = debounce(async (term: string) => {
  try {
    if (term.length === 0) {
      return (products.value = []);
    }
    isLoading.value = true;
    const apiResponseBody = await (
      await fetch(`${apiUrl}?q=${term}&limit=5`)
    ).json();
    products.value = apiResponseBody.products;
    console.log(products.value);
  } catch (error) {
    alert("エラーです！");
  } finally {
    isLoading.value = false;
  }
}, 300);

watch(searchTerm, (newTerm) => findProducts(newTerm));
</script>

<template>
  <div class="flex h-full w-full flex-col gap-5">
    <div class="flex items-center gap-2">
      <label for="input-search-form">
        <MagnifyingGlassIcon class="h-8 w-8" />
      </label>
      <input
        type="text"
        class="rounded-md border-2 border-stone-500 p-2 disabled:opacity-40"
        v-model="searchTerm"
        placeholder="キーワードを入力 ..."
        :disabled="isLoading"
        id="input-search-form"
      />
    </div>
    <div v-if="isLoading" class="flex justify-center">
      <div
        class="h-8 w-8 animate-spin rounded-full border-4 border-green-500 border-t-transparent"
      ></div>
    </div>
    <ul v-else-if="!isLoading && products.length" class="ml-6 list-disc">
      <li v-for="product in products" :key="product.id">
        {{ product.title }}: ${{ product.price }}
      </li>
    </ul>
  </div>
</template>

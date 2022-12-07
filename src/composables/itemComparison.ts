import { ref, computed } from "vue";

export type Product = {
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

const availableItems = ref<Product[]>([]);
const itemsToCompare = ref<Product[]>([]);
const isFetchingItems = ref(true);

const itemsSortByPrice = computed(() => {
  return [...itemsToCompare.value].sort((a, b) => b.price - a.price);
});

const numCheaperItems = computed(() =>
  Math.floor(itemsSortByPrice.value[0].price / itemsSortByPrice.value[1].price)
);

export const useItemComparison = () => ({
  availableItems,
  isFetchingItems,
  itemsToCompare,
  itemsSortByPrice,
  numCheaperItems,
});

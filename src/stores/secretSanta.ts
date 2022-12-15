import { ref } from "vue";
import { defineStore } from "pinia";

type Item = {
  name: string;
  email: string;
};

const filterForEmail = (email: string) => {
  return (item: Item) => item.email !== email;
};

export const useList = defineStore("hohoho", () => {
  const list = ref<Item[]>([]);

  const init = (initData: Item[]) => (list.value = initData);
  const add = (item: Item) => list.value.push(item);
  const remove = (email: string) => {
    list.value = list.value.filter(filterForEmail(email));
  };

  return { list, init, add, remove };
});

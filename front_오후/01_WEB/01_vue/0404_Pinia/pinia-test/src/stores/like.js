import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useLikeStore = defineStore('like', () => {
  const count = ref(0);

  const fiveLike = () => {
    count.value *= 5;
  };

  const increase = () => {
    count.value++;
  };
  const reset = () => {
    count.value = 0;
  };

  return { count, fiveLike, increase, reset };
});

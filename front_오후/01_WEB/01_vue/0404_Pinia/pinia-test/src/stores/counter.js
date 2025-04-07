import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

// 피니아 스토어 정의
// defineStore : 스토어 생성하는 함수
// 첫번째 인자가 스토어의 고유 ID가 된다.
export const useCounterStore = defineStore('counter', () => {
  // state
  const count = ref(0);
  // getter
  const doubleCount = computed(() => count.value * 2);
  //action
  // 1씩 증가시키는 메서드
  function increase() {
    count.value++;
  }
  const reset = () => {
    count.value = 0;
  };

  return { count, doubleCount, increase, reset };
});

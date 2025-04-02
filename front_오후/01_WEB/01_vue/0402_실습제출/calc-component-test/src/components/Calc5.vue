<script setup>
import { ref, watch } from 'vue';
const x = ref(0);
const result = ref(0);
watch(x, (newValue, oldValue) => {
  console.log(`변경 전 = ${oldValue}, 변경 후 = ${newValue}`);
  result.value = newValue;
});
</script>

<template>
  x : <input type="text" v-model.number="x" />
  <br />
  결과 : {{ result }}
</template>

<style scoped></style>

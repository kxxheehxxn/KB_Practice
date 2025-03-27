<script setup>
import CheckboxItem from './components/CheckboxItem.vue';
import { ref } from 'vue';
const idols = ref([
  { id: 1, name: 'BTS', checked: true },
  { id: 2, name: 'BlackPink', checked: false },
  { id: 3, name: 'EXO', checked: false },
  { id: 4, name: 'ITZY', checked: false },
]);
</script>

<template>
  <h1>app 컴포넌트</h1>
  <hr />
  <CheckboxItem
    v-for="idol in idols"
    :item="idol.id"
    :name="idol.name"
    :checked="idol.checked"
  />
</template>

<style scoped></style>

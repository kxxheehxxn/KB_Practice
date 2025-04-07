<script setup>
import { useCounterStore } from '@/stores/counter';
const counter = useCounterStore();
// const {increase, reset} = useCounterStore();
</script>

<template>
  <div>
    <h3>{{ counter.count }}</h3>
    <button @click="counter.increase">+</button>
    <button @click="counter.reset">0</button>
  </div>
</template>

<style scoped></style>

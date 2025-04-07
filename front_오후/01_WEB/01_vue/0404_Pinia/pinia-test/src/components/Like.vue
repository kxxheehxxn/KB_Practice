<script setup>
import { useLikeStore } from '@/stores/like';
const like = useLikeStore();
// const {increase, reset} = useCounterStore();
</script>

<template>
  <div>
    <h3>{{ like.count }}</h3>
    <button @click="like.increase">+</button>
    <button @click="like.reset">0</button>
    <button @click="like.fiveLike">*5</button>
  </div>
</template>

<style scoped></style>

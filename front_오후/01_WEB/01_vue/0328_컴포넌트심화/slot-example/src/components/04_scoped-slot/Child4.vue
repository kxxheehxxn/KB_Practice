<script setup>
const items = [
  { id: 1, name: '사과' },
  { id: 2, name: '바나나' },
  { id: 3, name: '딸기' },
  { id: 4, name: '수박' },
];
</script>

<template>
  <div>
    <div>
      <slot
        name="item"
        v-for="item in items"
        :item="item"
        :key="item.id"
      ></slot>
    </div>
  </div>
</template>

<style scoped></style>

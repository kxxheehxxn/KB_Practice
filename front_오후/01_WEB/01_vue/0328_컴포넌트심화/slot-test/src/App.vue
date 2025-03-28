<script setup>
import NoSlotTest from './components/NoSlotTest.vue';
import SlotTest from './components/SlotTest.vue';
component: {
  NoSlotTest;
}
</script>

<template>
  <NoSlotTest />
  <SlotTest />
</template>

<style scoped></style>

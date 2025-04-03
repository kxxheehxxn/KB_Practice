<script setup>
import TheFooter from './components/TheFooter.vue'
import TheHeader from './components/TheHeader.vue'
</script>

<template>
  <TheHeader />
  <div>Contents Page</div>
  <RouterView />
  <TheFooter />
</template>

<style scoped></style>

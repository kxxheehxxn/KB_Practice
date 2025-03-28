<script setup>
import { useCssModule } from 'vue';

const styles = useCssModule();
</script>

<template>
  <div :class="styles.child">
    <h2>Child3</h2>
  </div>
</template>

<style module>
.child {
  background-color: orangered;
  border: 1px solid black;
  padding: 1em;
  margin: 1.5em;
}
</style>

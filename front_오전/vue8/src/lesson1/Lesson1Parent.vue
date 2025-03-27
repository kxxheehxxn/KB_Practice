<script>
import Checkbox from './Checkbox.vue'
export default {
  name: 'Lesson1Parent',
  data() {
    return {}
  },
  components: {
    Lesson1Child,
  },
}
</script>

<template>
  <div class="lesson1parent">
    <h1>Component 분리</h1>
    <Checkbox id="no1" labelName="name" />
    <Checkbox id="no2" labelName="password" />
    <Checkbox id="no3" labelName="email" />
    <Checkbox id="no4" labelName="seminame" />
  </div>
</template>

<style scoped>
.lesson1parent {
  border: 1px solid red;
  padding: 1rem;
}
</style>

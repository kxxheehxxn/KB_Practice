<script setup>
const emit = defineEmits(['send-message']);

function sendMessage() {
  emit('send-message', 'ㅇㄴㅇ 자매 2, 나는 자매 1이야');
}
</script>

<template>
  <div style="border: 1px solid blue; padding: 10px">
    <h3>Sibling1</h3>
    <button @click="sendMessage">Sibling2에게 보내기</button>
  </div>
</template>

<style scoped></style>

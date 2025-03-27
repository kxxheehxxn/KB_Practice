<script setup>
//defineProps
//부모 컴포넌트에서 전달받은 프로퍼티를 정의하는 함수

//validator
//Vue 공식 기능
// 부모가prop를 전달할때마다 함수가 호출됨
defineProps({
  idol: {
    type: Object,
    required: true,
    validator: (value) => {
      // vue에서 제공하는 공식 기능
      return (
        (typeof value.id === 'number' || typeof value.id === 'string') &&
        typeof value.name === 'string' &&
        typeof value.checked === 'boolean'
      );
    },
  },
});
</script>

<template>
  <li><input type="checkbox" :checked="checked" />{{ name }}</li>
</template>

<style scoped></style>

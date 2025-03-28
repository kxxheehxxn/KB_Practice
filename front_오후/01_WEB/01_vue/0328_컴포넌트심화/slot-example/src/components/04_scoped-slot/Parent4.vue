<script setup>
import Child from './Child4.vue';
import { ref } from 'vue';

const slotName = ref('header');
</script>
<!-- 
scoped-slot
- 자식이 데이터를 넘겨준걸 이용해서 부모가 콘텐츠를 제공한다.
-->
<template>
  <!-- 
     named slot
     - 부모가 자식 컴포넌트의 여러 위치에 콘텐츠 삽입 가능
     - slot에 name을 붙이면 특정 위치에 원하는 내용 전달 가능 
      -->
  <div style="border: 2px solid blue; padding: 10px">
    <Child v-slot:item="{ item }">
      <h3>{{ item.name }}</h3></Child
    >
  </div>
</template>

<style scoped></style>

<script setup>
import Child from './Child2.vue';
</script>

<template>
  <!-- 
     named slot
     - 부모가 자식 컴포넌트의 여러 위치에 콘텐츠 삽입 가능
     - slot에 name을 붙이면 특정 위치에 원하는 내용 전달 가능
      -->
  <div style="border: 2px solid blue; padding: 10px">
    <Child>
      <template #header>
        <p>I am header</p>
      </template>
      <template #default>
        <p>I am default</p>
      </template>
      <template #footer>
        <p>I am footer</p>
      </template>
    </Child>
  </div>
</template>

<style scoped></style>

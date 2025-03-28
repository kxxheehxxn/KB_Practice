<script setup>
import Child from './Child3.vue';
import { ref } from 'vue';

const slotName = ref('header');

const changeFooter = () => {
  slotName.value = 'footer';
};
const chageDefault = () => {
  slotName.value = 'default';
};
const changeHeader = () => {
  slotName.value = 'header';
};
</script>

<template>
  <!-- 
     named slot
     - 부모가 자식 컴포넌트의 여러 위치에 콘텐츠 삽입 가능
     - slot에 name을 붙이면 특정 위치에 원하는 내용 전달 가능 
      -->
  <div style="border: 2px solid blue; padding: 10px">
    <Child :slot-name="slotName">
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
  <button @click="changeFooter">슬롯 이름 footer로 변경</button>
  <button @click="chageDefault">슬롯 이름 default로 변경</button>
  <button @click="changeHeader">슬롯 이름 header로 변경</button>
</template>

<style scoped></style>

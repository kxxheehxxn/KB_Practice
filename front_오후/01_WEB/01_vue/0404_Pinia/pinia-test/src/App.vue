<script setup>
import Like from './components/Like.vue';
import Counter from './components/Counter.vue';
import { useCounterStore } from './stores/counter';
import { useLikeStore } from './stores/like';

const liker = useLikeStore();
const counter = useCounterStore();
</script>
<!-- 
likeStore 를 만들고 
like component 에서 버튼으로 좋아요를 올려서 
App Component 에서 바인딩해서 보이게 해보세요!

GETTER 함수를 만들어서 좋아요 갯수를 5배 뻥튀기 하세요
-->
<template>
  <div>
    <h1>Pinia State Management Example</h1>
    <hr />
    <h2>Like : {{ liker.count }}</h2>
    <Like />
    <Like />
    <hr />
    <h2>Counter in App : {{ counter.count }}</h2>
    <Counter />
    <Counter />
  </div>
</template>

<style scoped></style>

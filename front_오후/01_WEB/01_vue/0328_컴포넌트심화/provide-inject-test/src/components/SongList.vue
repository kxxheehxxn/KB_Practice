<script setup>
import SongListItem from './SongListItem.vue';

defineProps(['songs', 'icons', 'doneCount']);
</script>

<template>
  <ul>
    <SongListItem
      v-for="s in songs"
      :key="s.id"
      :song="s"
      :icons="icons"
      @update="updateDoneCount"
    />
  </ul>
  <div>체크된 곡 수 : {{ doneCount }}</div>
</template>

<style scoped></style>

<script setup></script>

<template>
  <article class="AboutPage">
    <h3>About Page</h3>
    <p>fullpath : {{ $route.fullPath }}</p>
    <p>path : {{ $route.path }}</p>
    <p>name : {{ $route.name }}</p>
    <p>params : {{ $route.params }}</p>
  </article>
</template>

<style scoped></style>

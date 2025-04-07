<script setup></script>

<template>
  <div class="card card-body">
    <h2>About</h2>
    <nav>
      <router-link :to="{ name: 'goal' }">목표</router-link>
      <br />
      <router-link to="/about/class">반</router-link>
    </nav>
    <hr />
    <router-view />
  </div>
</template>

<style scoped></style>

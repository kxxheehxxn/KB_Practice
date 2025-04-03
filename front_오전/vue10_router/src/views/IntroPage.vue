<script setup></script>

<template>
  <section class="IntroPage">
    <h2>Intro Page</h2>
    <nav>
      <RouterLink to="/about">Sub-Menu1</RouterLink>
      <RouterLink to="/transManagement">Sub-Menu1</RouterLink>
      <!-- <RouterLink to="">Sub-Menu1</RouterLink>
      <RouterLink to="">Sub-Menu1</RouterLink> -->
    </nav>
  </section>
  <RouterView />
</template>

<style scoped>
.IntroPage a {
  background-color: antiquewhite;
  display: inline-block;
  padding: 1em;
}
</style>

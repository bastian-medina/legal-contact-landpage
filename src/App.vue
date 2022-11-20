<template>
  <q-layout view="hHr lpR fFr">
    <navbar />

    <q-page-container>
      <router-view />
    </q-page-container>

    <footer-add/>
  </q-layout>
</template>

<script setup>
import Navbar from "./components/layouts/Navbar.vue";
import FooterAdd from "./components/layouts/FooterAdd.vue";
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

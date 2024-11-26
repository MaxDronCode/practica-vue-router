<script setup>
import data from '/data.json'
import { RouterLink, RouterView } from 'vue-router'
const url = '../country/'
// import '/public/main.css'
</script>

<template>
  <nav id="nav">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink v-for="(country, i) in data.destinations" :to="url + country.id" :key="i">{{
      country.name
    }}</RouterLink>
  </nav>
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>
nav {
  background-color: rgb(42, 42, 88);
  color: #fff;
  height: 80px;
  display: flex;
  align-items: center;
}
a {
  color: #fff;
  text-decoration: none;
  padding: 10px;
  font-size: 26px;
}
</style>

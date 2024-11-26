<script setup>
import data from '/data.json'
</script>
<template>
  <h1 class="title">All destinations</h1>
  <ul>
    <li v-for="destination in data.destinations" :key="destination.id">
      <h2>{{ destination.name }}</h2>
      <img :src="`/images/${destination.image}`" :alt="destination.description">
    </li>
  </ul>
</template>
<style scoped>
ul{
  list-style-type: none;
  display: flex;
  width: 90%;
  justify-content: space-evenly;
}
img{
  width: 400px;
  aspect-ratio: 16/9;
  border-radius: 10px;
  margin: 10px;
}
.title{
  margin: 40px;
}
</style>
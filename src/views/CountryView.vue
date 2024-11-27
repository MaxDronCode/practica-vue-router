<script setup>
import data from '/data.json'
import ExperienceView from '@/views/ExperienceView.vue'
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const expIndex = ref(0)
const receiveIndex = (index) => {
  console.log('Index desde countryView: ', index)
  expIndex.value = index
}
</script>
<template>
  <h1>{{ data.destinations[$route.params.id - 1].name }}</h1>
  <img
    :src="'/images/' + data.destinations[$route.params.id - 1].image"
    :alt="data.destinations[$route.params.id - 1].description"
  />
  <ExperienceView @sendIndex="receiveIndex" />
</template>
<style scoped>
img {
  border-radius: 5px;
}
</style>

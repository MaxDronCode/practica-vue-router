<script setup>
import data from '/data.json'
import ExperienceView from '@/views/ExperienceView.vue'
</script>
<template>
<h1>{{data.destinations[ $route.params.id - 1].name}}</h1>
<img :src="'/images/' + data.destinations[$route.params.id - 1].image" :alt="data.destinations[$route.params.id - 1].description">
<ExperienceView />
</template>
<style scoped>
img{
  border-radius: 5px;
}
</style>
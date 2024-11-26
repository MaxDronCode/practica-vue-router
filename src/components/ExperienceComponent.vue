<script setup>
import { defineProps } from 'vue'
import data from '/data.json'
const props = defineProps({
  index: Number,
  id: Number,
})
</script>
<template>
  <h3>{{ data.destinations[props.id - 1].experiences[props.index].name }}</h3>
  <img
    :src="'/images/' + data.destinations[props.id - 1].experiences[props.index].image"
    alt="imagen"
  />
  <p>{{ data.destinations[props.id - 1].experiences[props.index].description }}</p>
</template>
<style scoped></style>

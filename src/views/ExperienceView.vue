<script setup>
import ExperienceCard from '@/components/ExperienceCard.vue'
import { RouterView, RouterLink } from 'vue-router'
import { ref } from 'vue'
const expIndex = ref(0)
const recieveIndex = (index) => {
  expIndex.value = index
}
</script>
<template>
  <ExperienceCard @sendExpIndex="recieveIndex" />
  <RouterLink :to="'/' + expIndex">Ruta</RouterLink>
  <RouterView />
</template>
<style scoped></style>

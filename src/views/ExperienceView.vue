<script setup>
import ExperienceCard from '@/components/ExperienceCard.vue'
import { ref, defineEmits } from 'vue'
const expIndex = ref(0)

const emit = defineEmits(['sendIndex'])
const sendIndex = () => {
  emit('sendIndex', expIndex.value)
}
const recieveIndex = (index) => {
  expIndex.value = index
  sendIndex()
}
</script>
<template>
  <ExperienceCard @sendExpIndex="recieveIndex" />
</template>
<style scoped></style>

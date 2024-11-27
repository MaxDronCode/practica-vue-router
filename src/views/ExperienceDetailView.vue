<script setup>
import { defineProps } from 'vue'
const props = defineProps(['id'])
console.log('ID desde ExperienceDetailView: ', props.id)
</script>
<template>
<h1>Experience Detail View</h1>
</template>
<style scoped>

</style>
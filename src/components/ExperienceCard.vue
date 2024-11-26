<script setup>
import data from '/data.json'
import ExperienceComponent from '@/components/ExperienceComponent.vue'
import { ref } from 'vue'
const experienceIndex = ref(0)
const handleClickExperience = (value) => {
  experienceIndex.value = value
}
</script>
<template>
  <h1>Top experiences in {{ data.destinations[$route.params.id - 1].name }}</h1>
  <div class="general-container">
    <div
      v-for="(experience, i) in data.destinations[$route.params.id - 1].experiences"
      :key="experience.id"
      class="images"
    >
      <div class="image-and-title" @click="handleClickExperience(i)">
        <img :src="'/images/' + experience.image" alt="imagen" />
        <p>{{ experience.name }}</p>
      </div>
    </div>
  </div>
  <ExperienceComponent :index="experienceIndex" :id="Number($route.params.id)" />
</template>
<style scoped>
.general-container {
  display: flex;
}
img {
  aspect-ratio: 16/9;
  width: 300px;
  border-radius: 5px 5px 0 0;
}
.images {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.image-and-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;

  & p {
    width: 290px;
    background-color: rgb(47, 47, 121);
    color: #fff;
    margin: 0;
    padding: 5px;
  }
}
</style>

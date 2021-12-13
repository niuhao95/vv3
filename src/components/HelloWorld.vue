<script setup lang="ts">
import { ref } from 'vue'
import Scroll from './Scroll.vue'

defineProps<{ msg: string }>()

const scrollValue = ref(10)
</script>

<template>
  <h1>{{ msg }}</h1>
  <Scroll title="dy-scroll" min="-10" max="20" class="dy-scroll" id="s-scroll" data-dy="hdy" aria-label="Example slider" v-model="scrollValue" @keydown="() => true"></Scroll>
  <button type="button" @click="scrollValue++">scrollValue is: {{ scrollValue }}</button>
</template>

<style scoped>

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>

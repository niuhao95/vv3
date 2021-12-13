<script setup lang="ts">
// inheritAttrs: false
defineProps<{ 
  modelValue: number | string,
  title: string
}>()
</script>

<template>
<!-- attrs：https://labs.thisdot.co/blog/build-advanced-components-in-vue-3-using-usdattrs -->
  <div>
    <h1>{{ title }}</h1>
    <input v-bind="$attrs" type="range" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
  </div>
</template>

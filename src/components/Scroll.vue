<script lang="ts">
export default {
  inheritAttrs: false
}
</script>

<script setup lang="ts">
defineProps<{
  modelValue: number | string,
  title: string
}>()

const handleInputChange = (event: Event) => (event.target as HTMLInputElement).value
</script>

<template>
  <div>
    <!-- attrs: https://labs.thisdot.co/blog/build-advanced-components-in-vue-3-using-usdattrs -->
    <h1>{{ title }}</h1>
    <input
      v-bind="$attrs"
      type="range"
      :value="modelValue"
      @input="$emit('update:modelValue', handleInputChange($event))"
    />
  </div>
</template>

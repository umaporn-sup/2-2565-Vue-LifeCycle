<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
  >
    <path
      fill="currentColor"
      d="M8.4 12H2.8L1 15H0V5h1l1.8 3h5.6L6 0h2l4.8 8H18a2 2 0 1 1 0 4h-5.2L8 20H6l2.4-8z"
    ></path>
  </svg>
</template>
<script setup>
import { onUnmounted, onBeforeUnmount, onMounted } from 'vue'
onMounted(() => {
  console.log(`[icon component] is mounted...`)
})
onBeforeUnmount(() => {
  console.log(`[icon component] is before unmount...`)
})
onUnmounted(() => {
  console.log(`[icon component] is unmounted...`)
})
</script>

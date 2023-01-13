<template>
  <footer>
    <button @click="$emit('toggleInterval')">start</button>
  </footer>
</template>

<script setup>
  const $emit = defineEmits(["toggleInterval"])
</script>

<template>
  <footer>
    <button
      @click="$emit('toggleInterval')"
      v-text="$props.isRunning ? 'stop' : 'start'" />
  </footer>
</template>

<script setup>
  const $emit = defineEmits(["toggleInterval"])
  const $props = defineProps({
    isRunning: {
      type: Boolean,
      default: () => false,
    },
  })
</script>

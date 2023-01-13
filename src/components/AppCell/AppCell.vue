<template>
  <td
    :class="{
      'app-cell': true,
      'app-cell--alive': $props.isAlive,
    }" />
</template>

<script setup>
  import { defineProps } from "vue"

  const $props = defineProps({
    isAlive: {
      type: Boolean,
      default: false,
    },
  })
</script>

<style>
  .app-cell {
    border: 2px solid black;
    height: 32px;
    width: 32px;
    margin: 2px;
  }

  .app-cell--alive {
    background-color: black;
  }
</style>

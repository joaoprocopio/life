<template>
  <main class="app-main">
    <AppMainRow
      v-for="(row, rowIndex) in $props.grid"
      :key="rowIndex">
      <AppMainCell
        v-for="(cell, cellIndex) in row"
        :key="cellIndex"
        :is-alive="cell"
        @click="$emit('toggleCell', rowIndex, cellIndex)">
      </AppMainCell>
    </AppMainRow>
  </main>
</template>

<script setup>
  import { AppMainCell, AppMainRow } from "~/components"

  const $emit = defineEmits(["toggleCell"])

  const $props = defineProps({
    grid: {
      type: Array,
      default: () => [],
      required: true,
    },
  })
</script>

<style>
  .app-main {
    display: flex;
    flex-direction: column;
  }
</style>

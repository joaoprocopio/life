<template>
  <main class="app-main">
    <AppMainRow
      v-for="(row, rowIndex) in $gridController.grid"
      :key="rowIndex">
      <AppMainCell
        v-for="(cell, cellIndex) in row"
        :key="cellIndex"
        :is-alive="cell"
        @click="toggleCell(rowIndex, cellIndex)">
      </AppMainCell>
    </AppMainRow>
  </main>
</template>

<script setup>
  import { AppMainCell, AppMainRow } from "~/components"
  import { useGridController } from "~/stores"

  const $gridController = useGridController()

  const toggleCell = (row, cell) => {
    $gridController.grid[row][cell] = !$gridController.grid[row][cell]
  }
</script>

<style>
  .app-main {
    display: flex;
    flex-direction: column;
  }
</style>

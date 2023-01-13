<template>
  <table>
    <AppRow
      v-for="(row, rowIndex) in $gridController.grid"
      :key="rowIndex">
      <AppCell
        v-for="(cell, cellIndex) in row"
        :key="cellIndex"
        :is-alive="cell"
        @click="toggleCell(rowIndex, cellIndex)">
      </AppCell>
    </AppRow>
  </table>
</template>

<script setup>
  import { AppCell, AppRow } from "~/components"
  import { onMounted } from "vue"
  import { useGridController } from "~/stores"

  const $gridController = useGridController()

  const toggleCell = (row, cell) => {
    $gridController.grid[row][cell] = !$gridController.grid[row][cell]
  }

  onMounted(() => {
    $gridController.buildGrid()
  })
</script>

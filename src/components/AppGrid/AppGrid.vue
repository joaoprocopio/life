<template>
  <table>
    <AppRow
      v-for="(row, rowIndex) in $controller.grid"
      :key="rowIndex">
      <AppCell
        v-for="(cell, cellIndex) in row"
        :key="cellIndex"
        :is-alive="cell === 1"
        @click="setAlive(rowIndex, cellIndex)">
      </AppCell>
    </AppRow>
  </table>
  <div>{{ $controller.grid }}</div>
</template>

<script setup>
  import { AppCell, AppRow } from "~/components"
  import { useController } from "~/stores"

  const setAlive = (row, cell) => {
    $controller.grid[row][cell] = 1
  }

  const $controller = useController()
</script>

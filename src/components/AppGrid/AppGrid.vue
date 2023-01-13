<template>
  <table>
    <AppRow
      v-for="(row, rowIndex) in $controller.grid"
      :key="rowIndex">
      <AppCell
        v-for="(cell, cellIndex) in row"
        :key="cellIndex" />
    </AppRow>
  </table>
</template>

<script setup>
  import { AppCell, AppRow } from "~/components"
  import { useController } from "~/stores"

  const $controller = useController()
</script>

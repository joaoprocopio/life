<template>
  <AppGrid>
    <AppRow
      v-for="(row, rowIndex) in $controller.height"
      :key="rowIndex">
      <AppCell
        v-for="(cell, cellIndex) in $controller.width"
        :key="cellIndex" />
    </AppRow>
  </AppGrid>
</template>

<script setup>
  import { AppGrid, AppCell, AppRow } from "~/components"
  import { useController } from "~/stores"

  const $controller = useController()
</script>

<style>
  @import "~/assets/css/index.css";
</style>

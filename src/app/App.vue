<template>
  <div id="__layout">
    <AppHeader />
    <AppMain
      :grid="$gridController.grid"
      @toggle-cell="toggleCell" />
    <AppFooter @toggle-interval="toggleInterval" />
  </div>
</template>

<script setup>
  import { AppFooter, AppHeader, AppMain } from "~/components"
  import { useGridController } from "~/stores"
  import { onMounted } from "vue"

  onMounted(() => {
    $gridController.buildGrid()
  })

  const $gridController = useGridController()

  const toggleInterval = () => {
    if (!$gridController.isRunning) {
      $gridController.isRunning = true
      $gridController.interval = setInterval(() => {
        $gridController.updateGrid()
      }, $gridController.speed)
    } else {
      $gridController.isRunning = false
      clearInterval($gridController.interval)
    }
  }

  const toggleCell = (row, cell) => {
    $gridController.grid[row][cell] = !$gridController.grid[row][cell]
  }
</script>

<style>
  @import "~/assets/css/index.css";
</style>

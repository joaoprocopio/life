<template>
  <div id="__layout">
    <AppHeader />
    <AppMain />
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
</script>

<style>
  @import "~/assets/css/index.css";
</style>

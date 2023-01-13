<template>
  <footer>
    <button @click="toggleInterval">toggle game</button>
  </footer>
</template>

<script setup>
  import { useGridController } from "~/stores"

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

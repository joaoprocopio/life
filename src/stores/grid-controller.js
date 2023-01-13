import { defineStore } from "pinia"
import { ref } from "vue"

const useGridController = defineStore("gridController", () => {
  const grid = ref([])

  const gridHeight = ref(20)
  const gridWidth = ref(20)

  function buildGrid() {
    for (let i = 1; i <= gridHeight.value; i++) {
      const arr = new Array()

      arr.length = gridWidth.value
      arr.fill(0)

      grid.value.push(arr)
    }
  }

  return { grid, gridHeight, gridWidth, buildGrid }
})

export { useGridController }

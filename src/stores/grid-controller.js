import { defineStore } from "pinia"
import { ref } from "vue"

const useGridController = defineStore("gridController", () => {
  const isRunning = ref(false)
  const interval = ref(0)
  const speed = ref(500)

  const gridHeight = ref(25)
  const gridWidth = ref(25)

  const grid = ref([])

  function buildGrid() {
    for (let i = 1; i <= gridHeight.value; i++) {
      const arr = new Array()

      arr.length = gridWidth.value
      arr.fill(false)

      grid.value.push(arr)
    }
  }

  function _getAliveNeighbours(row, column) {
    const aliveNeighbours = [
      ...grid.value[row - 1].slice(column - 1, column + 2),
      ...[grid.value[row][column - 1], grid.value[row][column + 1]],
      ...grid.value[row + 1].slice(column - 1, column + 2),
    ]

    return aliveNeighbours.filter((value) => value === true).length
  }

  function updateGrid() {}

  return {
    isRunning,
    interval,
    speed,
    grid,
    gridHeight,
    gridWidth,
    buildGrid,
    _getAliveNeighbours,
    updateGrid,
  }
})

export { useGridController }

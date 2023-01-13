import { defineStore } from "pinia"
import { ref } from "vue"

const useGridController = defineStore("gridController", () => {
  const isRunning = ref(false)
  const interval = ref(0)
  const speed = ref(500)

  const gridHeight = ref(25)
  const gridWidth = ref(25)

  const grid = ref([])

  const grid = ref([])

  function buildGrid() {
    for (let i = 1; i <= gridHeight.value; i++) {
      const arr = new Array()

      arr.length = gridWidth.value
      arr.fill(false)

      grid.value.push(arr)
    }
  }

  function _countAliveNeighbours(row, column) {
    if (
      row - 1 >= 0 &&
      row + 1 < gridHeight.value &&
      column - 1 >= 0 &&
      column + 1 < gridWidth.value
    ) {
      const aliveNeighbours = [
        ...grid.value[row - 1].slice(column - 1, column + 2),
        ...[grid.value[row][column - 1], grid.value[row][column + 1]],
        ...grid.value[row + 1].slice(column - 1, column + 2),
      ]

      return aliveNeighbours.filter((value) => value === true).length
    }
  }

  function updateGrid() {
    const updatedGrid = [...grid.value]

    for (let row = 0; row < gridHeight.value; row++) {
      for (let column = 0; column < gridWidth.value; column++) {
        const aliveNeighbours = _countAliveNeighbours(row, column)
        if (updatedGrid[row][column]) {
          if (aliveNeighbours === 2 || aliveNeighbours === 3) {
            updatedGrid[row][column] = true
          } else {
            updatedGrid[row][column] = false
          }
        } else {
          if (aliveNeighbours === 3) {
            updatedGrid[row][column] = true
          } else {
            updatedGrid[row][column] = false
          }
        }
      }
    }

    grid.value = updatedGrid
  }

  return {
    isRunning,
    interval,
    speed,
    grid,
    gridHeight,
    gridWidth,
    buildGrid,
    _countAliveNeighbours,
    updateGrid,
  }
})

export { useGridController }

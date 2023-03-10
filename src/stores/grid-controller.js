import { defineStore } from "pinia"
import { ref } from "vue"

const useGridController = defineStore("gridController", () => {
  const isRunning = ref(false)
  const interval = ref(0)
  const speed = ref(500)

  const rows = ref(25)
  const columns = ref(25)

  const grid = ref([])

  function buildGrid() {
    for (let i = 0; i < rows.value; i++) {
      const arr = new Array(columns.value).fill(false)
      grid.value.push(arr)
    }
  }

  function _countAliveNeighbors(row, column) {
    const neighborsAvailablePositions = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ]
    const neighborsAvailable = []

    for (let index = 0; index < neighborsAvailablePositions.length; index++) {
      neighborsAvailable.push([
        row + neighborsAvailablePositions[index][0],
        column + neighborsAvailablePositions[index][1],
      ])
    }

    return neighborsAvailable.filter(
      (neighbor) =>
        neighbor[0] >= 0 &&
        neighbor[0] < rows.value &&
        neighbor[1] >= 0 &&
        neighbor[1] < columns.value &&
        grid.value[neighbor[0]][neighbor[1]] === true
    ).length
  }

  function updateGrid() {
    const updatedGrid = JSON.parse(JSON.stringify(grid.value))

    for (let row = 0; row < rows.value; row++) {
      for (let column = 0; column < columns.value; column++) {
        const neighborsAlive = _countAliveNeighbors(row, column)

        if (grid.value[row][column]) {
          if (neighborsAlive < 2 || neighborsAlive > 3) {
            updatedGrid[row][column] = false
          } else if (2 <= neighborsAlive <= 3) {
            updatedGrid[row][column] = true
          }
        } else {
          if (neighborsAlive === 3) {
            updatedGrid[row][column] = true
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
    rows,
    columns,
    buildGrid,
    _countAliveNeighbors,
    updateGrid,
  }
})

export { useGridController }

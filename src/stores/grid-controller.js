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
      const arr = new Array()

      arr.length = columns.value
      arr.fill(false)

      grid.value.push(arr)
    }
  }

  function _countAliveNeighbors(row, column) {
    const delta_coord = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ]
    let coord_neighbors = []

    for (let index = 0; index < delta_coord.length; index++) {
      coord_neighbors.push([
        row + delta_coord[index][0],
        column + delta_coord[index][1],
      ])
    }

    let coord_neighbors_alive = coord_neighbors.filter(
      (e) =>
        e[0] >= 0 &&
        e[0] < rows.value &&
        e[1] >= 0 &&
        e[1] < columns.value &&
        grid.value[e[0]][e[1]] == 1
    )

    return coord_neighbors_alive.length
  }

  function updateGrid() {
    let updatedGrid = [...grid.value]

    for (let row = 0; row < rows.value; row++) {
      for (let column = 0; column < columns.value; column++) {
        let neighborsAlive = _countAliveNeighbors(row, column)

        if (grid.value[row][column]) {
          if (neighborsAlive == 2 || neighborsAlive == 3) {
            updatedGrid[row][column] = true
          } else {
            updatedGrid[row][column] = false
          }
        } else {
          if (neighborsAlive == 3) {
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
    rows,
    columns,
    buildGrid,
    _countAliveNeighbors,
    updateGrid,
  }
})

export { useGridController }

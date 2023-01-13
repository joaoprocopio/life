import { defineStore } from "pinia"
import { ref } from "vue"

const useController = defineStore("controller", () => {
  const height = ref(20)
  const width = ref(20)

  const grid = ref([])

  function buildGrid() {
    for (let i = 1; i <= height.value; i++) {
      const arr = new Array()

      arr.length = width.value
      arr.fill(0)

      grid.value.push(arr)
    }
  }

  return { height, width, grid, buildGrid }
})

export { useController }

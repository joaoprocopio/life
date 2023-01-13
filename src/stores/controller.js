import { defineStore } from "pinia"
import { ref, computed } from "vue"

const useController = defineStore("controller", () => {
  const height = ref(5)
  const width = ref(10)

  const line = computed(() => {
    const line = []
    line.length = width.value
    line.fill(0)

    return line
  })

  const grid = computed(() => {
    const grid = []

    for (let i = 1; i <= height.value; i++) {
      grid.push(line.value)
    }

    return grid
  })

  return { height, width, line, grid }
})

export { useController }

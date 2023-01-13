import { defineStore } from "pinia"
import { ref } from "vue"

const useController = defineStore("controller", () => {
  const height = ref(10)
  const width = ref(10)

  const grid = ref([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ])

  return { height, width, grid }
})

export { useController }

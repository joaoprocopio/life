import { defineStore } from "pinia"
import { ref } from "vue"

const useController = defineStore("controller", () => {
  const height = ref(35)
  const width = ref(35)

  return { height, width }
})

export { useController }

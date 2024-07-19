import { ref } from "vue";

export function usePainting() {
  const gridWidth = ref(0);
  const gridHeight = ref(0);
  const colorValue = ref("#000000");

  return {
    gridWidth,
    gridHeight,
    colorValue,
  };
}

import { nextTick, reactive, ref } from "vue";

export function usePainting() {
  const gridWidth = ref(0);
  const gridHeight = ref(0);
  const colorValue = ref("#000000");

  let events = reactive({
    mouse: {
      down: "mousedown",
      move: "mousemove",
      up: "mouseup",
    },
    touch: {
      down: "touchstart",
      mobe: "touchmove",
      up: "touchend",
    },
  });
  const draw = ref(false);
  const erase = ref(false);
  const isCreateGrid = ref(false);

  function createGrid() {
    isCreateGrid.value = true;
    nextTick(() => {
      for (let i = 1; i < gridHeight.value; i++) {
        for (let j = 1; j < gridWidth.value; j++) {
          const grid = document.getElementById(`grid-${i}-${j}`) as HTMLElement;
          grid.classList.add("gridCol");
          grid.addEventListener(events.mouse.down, (e: any) => {
            draw.value = true;
            if (erase.value) {
              grid.style.backgroundColor = "transparent";
            } else {
              grid.style.backgroundColor = colorValue.value;
            }
          });

          grid.addEventListener(events.mouse.move, (e: any) => {
            let elementId = (
              document.elementFromPoint(e.clientX, e.clientY) as Element
            ).id;
            checker(elementId);
          });

          grid.addEventListener(events.mouse.up, (e: any) => {
            draw.value = false;
          });
        }
      }
    });
  }

  function checker(elementId: string) {
    let gridColumns = document.querySelectorAll(".gridCol");
    gridColumns.forEach((element) => {
      if (elementId == element.id) {
        const grid = document.getElementById(elementId) as HTMLElement;
        if (draw.value && !erase.value) {
          grid.style.backgroundColor = colorValue.value;
        } else if (draw.value && erase.value) {
          grid.style.backgroundColor = "transparent";
        }
      }
    });
  }

  function clearGrid() {
    isCreateGrid.value = false;
  }

  function handleErase() {
    draw.value = false;
    erase.value = true;
  }

  function handlePaint() {
    draw.value = false;
    erase.value = false;
  }

  return {
    gridWidth,
    gridHeight,
    colorValue,
    createGrid,
    clearGrid,
    handleErase,
    handlePaint,
    isCreateGrid,
  };
}

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
    const container = document.getElementById("grid-container");
    nextTick(() => {
      if (container) {
        for (let i = 1; i <= gridHeight.value; i++) {
          let div = document.createElement("div");
          div.classList.add("gridRow", "flex");
          for (let j = 1; j <= gridWidth.value; j++) {
            const grid = document.createElement("div");
            grid.id = `grid-${i}-${j}`;
            grid.classList.add(
              "gridCol",
              "flex",
              "w-4",
              "h-4",
              "border",
              "border-gray-300"
            );
            div.appendChild(grid);
          }
          container.appendChild(div);
        }
      }
    });
  }

  function addGridListener() {
    nextTick(() => {
      for (let i = 1; i <= gridHeight.value; i++) {
        for (let j = 1; j <= gridWidth.value; j++) {
          const grid = document.getElementById(`grid-${i}-${j}`) as HTMLElement;
          if (grid) {
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
              console.log(JSON.stringify(e));
              let elementId = (
                document.elementFromPoint(e.clientX, e.clientY) as Element
              ).id;
              checker(elementId);
            });
            grid.addEventListener(events.mouse.up, (e: any) => {
              draw.value = false;
            });
          } else {
            console.warn(`Grid-${i}-${j} not found`);
          }
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
    const container = document.getElementById("grid-container");
    if (container) {
      container.innerHTML = "";
    }
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
    draw,
    erase,
    checker,
    addGridListener,
  };
}

import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { usePainting } from "./usePainting";
import { nextTick } from "vue";

describe("createGrid", () => {
  let container: HTMLDivElement | null;
  beforeEach(async () => {
    container = document.createElement("div");
    container.id = "grid-container";
    document.body.appendChild(container);
  });
  afterEach(() => {
    document.body.removeChild(container!);
    container = null;
  });
  test("should set isCreateGrid to true", async () => {
    const { gridHeight, gridWidth, createGrid } = usePainting();
    gridHeight.value = 1;
    gridWidth.value = 1;
    createGrid();
    await nextTick();

    const grid = document.getElementById(`grid-1-1`) as HTMLElement;

    expect(grid.classList.contains("gridCol")).toBe(true);
  });

  test("should add event listeners to all grid elements", async () => {
    const { gridHeight, gridWidth, createGrid, addGridListener } =
      usePainting();
    gridHeight.value = 10;
    gridWidth.value = 10;
    await nextTick();

    createGrid();
    await nextTick();
    addGridListener();
    await nextTick();

    for (let i = 1; i < gridHeight.value; i++) {
      for (let j = 1; j < gridWidth.value; j++) {
        const grid = document.getElementById(`grid-${i}-${j}`) as HTMLElement;
        expect(grid.classList.contains("gridCol")).toBe(true);
        expect(grid.onmousedown).toBeDefined();
        expect(grid.onmousemove).toBeDefined();
        expect(grid.onmouseup).toBeDefined();
      }
    }
  });

  test("should set draw to true on mouse down event", async () => {
    const {
      gridHeight,
      gridWidth,
      colorValue,
      erase,
      draw,
      createGrid,
      addGridListener,
    } = usePainting();
    gridHeight.value = 10;
    gridWidth.value = 10;
    colorValue.value = "#ff0000";
    erase.value = false;

    createGrid();
    await nextTick();
    addGridListener();
    await nextTick();

    const grid = document.getElementById(`grid-1-1`) as HTMLElement;
    const event = new MouseEvent("mousedown", { bubbles: true });
    grid.dispatchEvent(event);

    expect(draw.value).toBe(true);
    expect(grid.style.backgroundColor).toBe("#ff0000");
  });

  test("should set draw to false on mouse up event", async () => {
    const {
      gridHeight,
      gridWidth,
      colorValue,
      erase,
      draw,
      createGrid,
      addGridListener,
    } = usePainting();
    gridHeight.value = 10;
    gridWidth.value = 10;
    colorValue.value = "#ffffff";
    erase.value = false;

    createGrid();
    await nextTick();
    addGridListener();
    await nextTick();

    const grid = document.getElementById(`grid-1-1`) as HTMLElement;
    const event = new MouseEvent("mousedown", { bubbles: true });
    const event1 = new MouseEvent("mouseup", { bubbles: true });
    grid.dispatchEvent(event);
    grid.dispatchEvent(event1);

    expect(draw.value).toBe(false);
    expect(grid.style.backgroundColor).toBe("#ffffff");
  });

  // test("should call checker on mouse move event", async () => {
  //   const {
  //     gridHeight,
  //     gridWidth,
  //     colorValue,
  //     erase,
  //     draw,
  //     createGrid,
  //     addGridListener,
  //   } = usePainting();
  //   gridHeight.value = 10;
  //   gridWidth.value = 10;
  //   colorValue.value = "#ffffff";
  //   erase.value = false;

  //   createGrid();
  //   await nextTick();
  //   addGridListener();
  //   await nextTick();

  //   const grid = document.getElementById(`grid-1-1`) as HTMLElement;
  //   const grid2 = document.getElementById(`grid-1-2`) as HTMLElement;
  //   const rect = grid2.getBoundingClientRect();
  //   const clientX = rect.left;
  //   const clientY = rect.top;
  //   console.log(JSON.stringify(grid2));
  //   const event = new MouseEvent("mousedown", { bubbles: true });
  //   const event2 = new MouseEvent("mousemove", {
  //     bubbles: true,
  //     clientX,
  //     clientY,
  //   });
  //   grid.dispatchEvent(event);
  //   grid2.dispatchEvent(event2);

  //   expect(grid2.style.backgroundColor).toBe("#ffffff");
  // });
});

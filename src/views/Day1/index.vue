<template>
  <div
    class="h-full w-full flex flex-col items-center justify-center bg-green-100"
  >
    <div class="w-3/4 flex flex-col bg-white">
      <div class="flex w-full">
        <div class="w-1/2">
          <div class="mt-3 ml-3">Grid Width</div>
          <div class="w-3/4 mt-3 ml-5 flex">
            <el-slider class="mr-5" v-model="gridWidth" :min="0" :max="35" />
            <span>{{ gridWidth }}</span>
          </div>
        </div>
        <div class="w-1/2">
          <div class="mt-3 ml-3">Grid Height</div>
          <div class="w-3/4 mt-3 ml-5 flex">
            <el-slider class="mr-5" v-model="gridHeight" :min="0" :max="35" />
            <span>{{ gridHeight }}</span>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center">
        <el-button class="flex-1 m-10" @click="createGrid"
          >Create Grid</el-button
        >
        <el-button class="flex-1 m-10" @click="clearGrid">Clear Grid</el-button>
        <input class="flex-1 m-10" type="color" v-model="colorValue" />
        <span>{{ colorValue }}</span>
        <el-button class="flex-1 m-10" @click="handleErase">Erase</el-button>
        <el-button class="flex-1 m-10" @click="handlePaint">Paint</el-button>
      </div>
    </div>
    <div class="w-3/4 flex flex-col p-5 bg-white" v-if="isCreateGrid">
      <div class="flex" v-for="i in gridHeight" :key="i">
        <div
          v-for="j in gridWidth"
          :key="j"
          class="flex w-4 h-4 border border-gray-300"
          :style="{ backgroundColor: 'transparent' }"
          :ref="`grid-${i}-${j}`"
          :id="`grid-${i}-${j}`"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref } from "vue";
import { usePainting } from "./usePainting";

const { gridWidth, gridHeight, colorValue } = usePainting();
let events = {
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
};
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
          console.log(elementId);
          checker(elementId);
        });

        grid.addEventListener(events.mouse.up, (e: any) => {
          draw.value = false;
        });
      }
    }
  });
}

const checker = (elementId: string) => {
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
};

const clearGrid = () => {
  isCreateGrid.value = false;
};

const handleErase = () => {
  erase.value = true;
};

const handlePaint = () => {
  draw.value = true;
};

onMounted(() => {});
</script>

<style scoped></style>

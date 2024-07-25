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
        <el-button class="flex-1 m-10" @click="handleCreateGrid"
          >Create Grid</el-button
        >
        <el-button class="flex-1 m-10" @click="clearGrid">Clear Grid</el-button>
        <input class="flex-1 m-10" type="color" v-model="colorValue" />
        <span>{{ colorValue }}</span>
        <el-button class="flex-1 m-10" @click="handleErase">Erase</el-button>
        <el-button class="flex-1 m-10" @click="handlePaint">Paint</el-button>
      </div>
    </div>
    <div id="grid-container" class="w-3/4 flex flex-col p-5 bg-white"></div>
  </div>
</template>

<script setup lang="ts">
import { usePainting } from "./usePainting";

const {
  gridWidth,
  gridHeight,
  colorValue,
  createGrid,
  clearGrid,
  handleErase,
  handlePaint,
  addGridListener,
} = usePainting();

function handleCreateGrid() {
  createGrid();
  addGridListener();
}
</script>

<style scoped></style>

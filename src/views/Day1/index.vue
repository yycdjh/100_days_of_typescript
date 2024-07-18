<template>
  <div class="h-full flex items-center justify-center bg-green-100">
    <div class="flex flex-col w-3/4 bg-white">
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
      <div class="flex">
        <el-button>Create Grid</el-button>
        <el-button>Clear Grid</el-button>
        <input type="color" />
        <el-button>Erase</el-button>
        <el-button>Paint</el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const gridWidth = ref(0);
const gridHeight = ref(0);
</script>

<style scoped></style>

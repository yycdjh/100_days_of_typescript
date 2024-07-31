<template>
  <div
    class="container h-full w-full flex flex-col items-center justify-center bg-green-100"
  >
    <div class="w-3/4 p-5 pt-10 flex flex-col bg-white">
      <div
        class="button-layout flex flex-col w-full justify-center items-center"
      >
        <div>
          <el-button link>
            <template #icon>
              <i class="fa-solid fa-bold"></i>
            </template>
          </el-button>
          <el-button link>
            <template #icon>
              <i class="fa-solid fa-superscript"></i>
            </template>
          </el-button>
          <el-button link>
            <template #icon>
              <i class="fa-solid fa-subscript"></i>
            </template>
          </el-button>
          <el-button link>
            <template #icon>
              <div class="fa-solid fa-list-ol"></div>
            </template>
          </el-button>
          <el-button link>
            <template #icon>
              <i class="fa-solid fa-list"></i>
            </template>
          </el-button>
          <el-button link>
            <template #icon>
              <i class="fa-solid fa-rotate-left"></i>
            </template>
          </el-button>
          <el-button link>
            <template #icon>
              <i class="fa-solid fa-rotate-right"></i>
            </template>
          </el-button>
          <el-button link>
            <template #icon>
              <i class="fa fa-link"></i>
            </template>
          </el-button>
          <el-button link>
            <template #icon>
              <i class="fa fa-unlink"></i>
            </template>
          </el-button>

          <el-button link>
            <template #icon>
              <i class="fa-solid fa-align-left"></i>
            </template>
          </el-button>
          <el-button link>
            <template #icon>
              <i class="fa-solid fa-align-center"></i>
            </template>
          </el-button>
          <el-button link>
            <template #icon>
              <i class="fa-solid fa-align-right"></i>
            </template>
          </el-button>
          <el-button link>
            <template #icon>
              <i class="fa-solid fa-align-justify"></i>
            </template>
          </el-button>
          <el-button link>
            <template #icon>
              <i class="fa-solid fa-indent"></i>
            </template>
          </el-button>
          <el-button link>
            <template #icon>
              <i class="fa-solid fa-outdent"></i>
            </template>
          </el-button>
        </div>
        <div class="flex">
          <div class="w-20">
            <el-select v-model="formatBlock">
              <el-option
                v-for="item in formatBlockList"
                :value="item"
                :label="item"
                :key="item"
              ></el-option>
            </el-select>
          </div>
          <div class="w-20">
            <el-select v-model="fontName">
              <el-option
                v-for="item in fontNameList"
                :value="item"
                :label="item"
                :key="item"
              ></el-option>
            </el-select>
          </div>
          <div class="w-20">
            <el-select v-model="fontSize">
              <el-option
                v-for="item in fontSizeList"
                :value="item"
                :label="item"
                :key="item"
              ></el-option>
            </el-select>
          </div>

          <div class="flex">
            <input type="color" v-model="foreColor" />
            <span>Font Color</span>
          </div>
          <div class="flex">
            <input type="color" v-model="HighlightColor" />
            <span>Highlight Color</span>
          </div>
        </div>
      </div>

      <div
        class="text-input m-3 p-3 h-1/2 border border-solid border-1 border-custom-color"
        contenteditable="true"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const fontName = ref("Arial");
const fontNameList = ref([
  "Arial",
  "Verdana",
  "Times New Roman",
  "Garamond",
  "Georgia",
  "Courier New",
  "Cursive",
]);

const formatBlock = ref("H1");
const formatBlockList = ref(["H1", "H2", "H3", "H4", "H5", "H6"]);

const fontSize = ref(1);
const fontSizeList = ref([1, 2, 3, 4, 5, 6, 7]);

const foreColor = ref("red");

const HighlightColor = ref("red");
</script>

<style scoped></style>

<template>
  <div
    class="container h-full w-full flex flex-col items-center justify-center bg-green-100"
  >
    <div class="w-3/4 p-5 pt-10 flex flex-col bg-white">
      <div class="button-layout flex flex-col w-full ml-3">
        <div class="flex felx-wrap gap-4">
          <el-button
            link
            id="bold"
            class="active"
            @click="handleOptions('bold')"
          >
            <template #icon>
              <i class="fa-solid fa-bold"></i>
            </template>
          </el-button>
          <el-button
            link
            id="superscript"
            @click="handleOptions('superscript')"
          >
            <template #icon>
              <i class="fa-solid fa-superscript"></i>
            </template>
          </el-button>
          <el-button link id="subscript" @click="handleOptions('subscript')">
            <template #icon>
              <i class="fa-solid fa-subscript"></i>
            </template>
          </el-button>
          <el-button
            link
            id="insertOrderedList"
            @click="handleOptions('insertOrderedList')"
          >
            <template #icon>
              <div class="fa-solid fa-list-ol"></div>
            </template>
          </el-button>
          <el-button
            link
            id="insertUnorderedList"
            @click="handleOptions('insertUnorderedList')"
          >
            <template #icon>
              <i class="fa-solid fa-list"></i>
            </template>
          </el-button>
          <el-button link id="undo">
            <template #icon>
              <i class="fa-solid fa-rotate-left"></i>
            </template>
          </el-button>
          <el-button link id="redo">
            <template #icon>
              <i class="fa-solid fa-rotate-right"></i>
            </template>
          </el-button>
          <el-button link id="createLink">
            <template #icon>
              <i class="fa fa-link"></i>
            </template>
          </el-button>
          <el-button link id="unlink">
            <template #icon>
              <i class="fa fa-unlink"></i>
            </template>
          </el-button>

          <el-button link id="justifyLift">
            <template #icon>
              <i class="fa-solid fa-align-left"></i>
            </template>
          </el-button>
          <el-button link id="justifyCenter">
            <template #icon>
              <i class="fa-solid fa-align-center"></i>
            </template>
          </el-button>
          <el-button link id="justifyRight">
            <template #icon>
              <i class="fa-solid fa-align-right"></i>
            </template>
          </el-button>
          <el-button link id="justifyFull">
            <template #icon>
              <i class="fa-solid fa-align-justify"></i>
            </template>
          </el-button>
          <el-button link id="indent">
            <template #icon>
              <i class="fa-solid fa-indent"></i>
            </template>
          </el-button>
          <el-button link id="outdent">
            <template #icon>
              <i class="fa-solid fa-outdent"></i>
            </template>
          </el-button>
        </div>
        <div class="flex felx-wrap gap-4 mt-2">
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

      <div id="text-input" contenteditable="true" ref="editor"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRichEdit } from "./useRichEdit";
const editor = ref();
const {
  fontName,
  fontNameList,
  formatBlock,
  formatBlockList,
  fontSize,
  fontSizeList,
  foreColor,
  HighlightColor,
  handleOptions,
} = useRichEdit(editor);
</script>

<style scoped>
.active {
  background-color: #e0e9ff;
}
#text-input {
  margin-top: 10px;
  border: 1px solid #ddd;
  padding: 20px;
  height: 50vh;
}
</style>

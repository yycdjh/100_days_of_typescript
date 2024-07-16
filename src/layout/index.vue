<template>
  <div class="flex w-full h-full">
    <div style="width: 200px">
      <Sidebar />
    </div>
    <div class="flex-1">
      <AppMain />
    </div>
  </div>
</template>

<script setup lang="ts">
import AppMain from "./components/AppMain.vue";
import Sidebar from "./components/Sidebar/index.vue";
</script>

<style scoped></style>

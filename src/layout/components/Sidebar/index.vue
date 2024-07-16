<template>
  <div class="w-full">
    <el-scrollbar height="100vh">
      <el-menu default-active="1">
        <template v-for="(item, index) in customRotues" :key="index">
          <el-menu-item :index="String(index + 1)" @click="goRoute(item.name)">
            <span> {{ item.name }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { mapMenusToRotes } from "@/utils/map-menus";
import { useRouter } from "vue-router";

const customRotues = mapMenusToRotes();

const $router = useRouter();
const goRoute = (name: string) => {
  $router.push({
    name,
  });
};
</script>

<style scoped></style>

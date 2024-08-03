<template>
  <div class="w-full">
    <el-scrollbar height="100vh">
      <el-menu :default-active="activeName">
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
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const customRotues = mapMenusToRotes();

const $router = useRouter();
const $route = useRoute();

const activeName = computed(() => {
  return String(
    customRotues.findIndex((item) => item.name === $route.name) + 1
  );
});
// console.log(activeName.value);
const goRoute = (name: string) => {
  $router.push({
    name,
  });
};
</script>

<style scoped></style>

export function mapMenusToRotes() {
  // 动态导入 views 目录下所有子目录中的 index.vue 文件
  const modules = import.meta.glob("../views/*/index.vue");
  const routes = Object.keys(modules).map((path: any) => {
    const name = path.match(/\.\/views\/(.*)\/index\.vue$/)[1];
    return {
      path: `/${name}`,
      name: name,
      component: () => import(`@/views//${name}/index.vue`),
    };
  });

  return routes.filter((i) => i.name !== "404");
}

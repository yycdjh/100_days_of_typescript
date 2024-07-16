import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
//@ts-expect-error
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
// createApp(App).mount("#app");
const app = createApp(App);

// 安装element-plus插件
app.use(ElementPlus, {
  locale: zhCn, // 配置element-plus国际化
});

app.use(router);

app.mount("#app");

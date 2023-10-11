<template>
  <router-view></router-view>
</template>
<script lang="ts">
import { ref, provide } from 'vue';
import { router } from './router';
export default {
  name: 'App',
  setup() {
    const width = document.documentElement.clientWidth
    const asideVisible = ref(width <= 500 ? false : true)
    // 提供aside开启或者关闭变量
    provide('asideVisible', asideVisible)

    // 路由切换
    router.afterEach((to) => {
      // 如果宽度小于500并且去的路由是文档下面的,就关闭aside
      if (width <= 500) {
        if (to.fullPath.includes('/doc')) {
          asideVisible.value = false
        }
      }
    })
  }
}
</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

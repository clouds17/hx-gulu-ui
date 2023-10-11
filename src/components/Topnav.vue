<template>
    <div class="topnav">
        <div class="logo" @click="toggleAside">
            <img :src="$baseImg + 'my-logo2.png'" alt=""/>
        </div>
        <ul class="menu">
            <li>菜单1</li>
            <li>菜单2</li>
        </ul>
    </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'

export default {
    setup() {
        const asideVisible = inject<Ref<boolean>>('asideVisible')

        const toggleAside = () => {
            asideVisible!.value = !asideVisible!.value
        }

        return {
            toggleAside
        }
    }
}
</script>

<style lang="scss" scoped>
.topnav {
  background: pink;
  display: flex;
  padding: 16px;
  position: relative;
  z-index: 10;
  align-items: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    display: flex;
    > img {
        height: 40px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
}
</style>
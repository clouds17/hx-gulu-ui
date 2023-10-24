<demo>布局 四</demo>
<template>
    <div class="common-layout">
        <hx-container>
            <hx-header>我是 header</hx-header>
            <hx-container>
                <hx-aside style="--hx-aside-width: 200px">我是 aside</hx-aside>
                <hx-main>我是 main</hx-main>
            </hx-container>
            <hx-footer>我是 footer</hx-footer>
        </hx-container>
    </div>
</template>

<script setup lang="ts">
import { HxContainer, HxHeader, HxFooter, HxAside, HxMain } from 'hx-gulu-ui';
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
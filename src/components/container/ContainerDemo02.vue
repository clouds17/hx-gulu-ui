<demo>布局 二</demo>
<template>
    <div class="common-layout">
        <hx-container>
            <hx-header>我是 header</hx-header>
            <hx-main>我是 main</hx-main>
            <hx-footer>我是 footer</hx-footer>
        </hx-container>
    </div>
</template>

<script setup lang="ts">
import { HxContainer, HxHeader, HxMain, HxFooter } from 'hx-gulu-ui';
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
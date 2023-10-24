<demo>布局 三</demo>
<template>
    <div class="common-layout">
        <hx-container>
            <hx-aside style="--hx-aside-width: 200px">我是 aside</hx-aside>
            <hx-main>我是 main</hx-main>
        </hx-container>
    </div>
</template>

<script setup lang="ts">
import { HxContainer, HxAside, HxMain } from 'hx-gulu-ui';

</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
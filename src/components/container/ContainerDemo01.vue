<demo>布局 一</demo>
<template>
    <div class="common-layout">
        <hx-container>
            <hx-header>我是 footer</hx-header>
            <hx-main>我是主容器</hx-main>
        </hx-container>
    </div>
</template>

<script setup lang="ts">
import HxContainer from '@/lib/container/HxContainer.vue';
import HxHeader from '@/lib/container/HxHeader.vue';
import HxMain from '@/lib/container/HxMain.vue';

</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
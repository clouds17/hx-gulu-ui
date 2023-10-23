<template>
    <div class="doc-page">
        <h2>Container 布局容器 </h2>
        <p class="doc-page-desc">用于布局的容器组件，方便快速搭建页面的基本结构：</p>
        <p class="doc-page-desc">`hx-container`：外层容器。 当子元素中包含 `hx-header` 或 `hx-footer` 时，全部子元素会垂直上下排列， 否则会水平左右排列。</p>
        <p class="doc-page-desc">`el-header`：顶栏容器。</p>
        <p class="doc-page-desc">`el-aside`：侧边栏容器。</p>
        <p class="doc-page-desc">`el-main`：主要区域容器。</p>
        <p class="doc-page-desc">`el-footer`：底栏容器。</p>
        <Demo :component="ContainerDemo01"  />
        <Demo :component="ContainerDemo02" />
        <Demo :component="ContainerDemo03" />
        <Demo :component="ContainerDemo04" />
    </div>
    
</template>

<script lang="ts" setup>
import Demo from '@/components/Demo.vue';
import ContainerDemo01 from '@/components/container/ContainerDemo01.vue';
import ContainerDemo02 from '@/components/container/ContainerDemo02.vue';
import ContainerDemo03 from '@/components/container/ContainerDemo03.vue';
import ContainerDemo04 from '@/components/container/ContainerDemo04.vue';

</script>

<style lang="scss" scoped>
@import './style.scss';

</style>
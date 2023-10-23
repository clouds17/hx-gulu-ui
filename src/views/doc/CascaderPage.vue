<template>
    <div class="doc-page">
        <h2>Cascader 级联选择器 </h2>
        <p class="doc-page-desc">当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择</p>
        <Demo :component="CascaderDemo01"  />
    </div>
    
</template>

<script lang="ts" setup>
import Demo from '@/components/Demo.vue';
import CascaderDemo01 from '@/components/cascader/CascaderDemo01.vue';

</script>

<style lang="scss" scoped>
@import './style.scss';

</style>
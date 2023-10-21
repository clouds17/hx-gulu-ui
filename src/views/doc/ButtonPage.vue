<template>
    <div class="doc-page">
        <h2>Button 组件示例 </h2>
        <p class="doc-page-desc">常用的操作按钮。</p>
        <Demo :component="ButtonDemo01" usage="尺寸 `size`: `large | normal | small`。 颜色等级 `level` : 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger'。 是否空心 `plain`。 是否圆角 `round` 。" />
        <Demo :component="ButtonDemo02" usage="类型 `theme`: button | link | text。"></Demo>
        <Demo :component="ButtonDemo03" usage="disable"></Demo>
        <Demo :component="ButtonDemo04" usage="loading"></Demo>
    </div>
    
</template>

<script lang="ts" setup>
import Demo from '@/components/Demo.vue';
import ButtonDemo01 from '@/components/button/ButtonDemo01.vue';
import ButtonDemo02 from '@/components/button/ButtonDemo02.vue';
import ButtonDemo03 from '@/components/button/ButtonDemo03.vue';
import ButtonDemo04 from '@/components/button/ButtonDemo04.vue';

</script>

<style lang="scss" scoped>
@import './style.scss';

</style>
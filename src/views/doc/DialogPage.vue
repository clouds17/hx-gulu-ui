<template>
    <div class="doc-page">
        <h2>Dialog弹框 组件示例 </h2>
        <p class="doc-page-desc">Dialog 弹出一个对话框，适合需要定制性更大的场景。</p>
        <Demo :component="DialogDemo01" 
            usage="需要设置 `model-value / v-model` 属性，它接收 `Boolean`，当为 `true` 时显示 Dialog。
                `title` 属性设置弹框标题。
                `width` 属性设置弹框大小。
                `submit-text` 属性设置确认按钮的文字。
                `cancel-text` 属性设置取消按钮的文字。
                `@onSubmit`事件是点击确认事件。
                `@onCancel` 事件是点击取消事件。"></Demo>
        <Demo :component="DialogDemo02" usage="设置了`title`具名插槽 和 `footer` 具名插槽，可以自定义头部和底部"></Demo>
        <Demo :component="DialogDemo03" usage="属性 `close-on-click-overlay` 默认 `true`"></Demo>
        <Demo :component="DialogDemo04" usage="属性 `beforeClose` 是一个函数, return false 时 不会关闭弹框"></Demo>
        <Demo :component="DialogDemo05" usage="类似 ElMessageBox 消息弹框"></Demo>
    </div>
    
</template>

<script setup lang="ts">
import Demo from '@/components/Demo.vue';
import DialogDemo01 from '@/components/dialog/DialogDemo01.vue'
import DialogDemo02 from '@/components/dialog/DialogDemo02.vue'
import DialogDemo03 from '@/components/dialog/DialogDemo03.vue'
import DialogDemo04 from '@/components/dialog/DialogDemo04.vue'
import DialogDemo05 from '@/components/dialog/DialogDemo05.vue'
</script>

<style lang="scss" scoped>
@import './style.scss';

</style>
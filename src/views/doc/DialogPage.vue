<template>
    <div class="doc-page">
        <h2>Dialog弹框 组件示例 </h2>
        <p class="doc-page-desc">Dialog 弹出一个对话框，适合需要定制性更大的场景。</p>
        <div class="demo">
            <h3>常规用法</h3>
            <p class="doc-page-usage">
                需要设置 `model-value / v-model` 属性，它接收 `Boolean`，当为 `true` 时显示 Dialog。
                `title` 属性设置弹框标题。
                `width` 属性设置弹框大小。
                `submit-text` 属性设置确认按钮的文字。
                `cancel-text` 属性设置取消按钮的文字。
                `@onSubmit`事件是点击确认事件。
                `@onCancel` 事件是点击取消事件。
            </p>
            <div class="demo-component">
                <DialogDemo01></DialogDemo01>
            </div>
            <div class="demo-actions">
                <Button>查看代码</Button>
            </div>
            <div class="demo-code">
                <pre>&lt;Switch v-model:value="bool" /&gt;</pre>
            </div>
        </div>
        <div class="demo">
            <h3>自定义头部和底部</h3>
            <p class="doc-page-usage">
                设置了`title`具名插槽 和 `footer` 具名插槽，可以自定义头部和底部
            </p>
            <div class="demo-component">
                <DialogDemo02></DialogDemo02>
            </div>
            <div class="demo-actions">
                <Button>查看代码</Button>
            </div>
            <div class="demo-code">
                <pre>&lt;Switch v-model:value="bool" /&gt;</pre>
            </div>
        </div>
        <div class="demo">
            <h3>点击空白部分是否关闭弹框</h3>
            <p class="doc-page-usage">
                属性 `close-on-click-overlay` 默认 `true`
            </p>
            <div class="demo-component">
                <DialogDemo03></DialogDemo03>
            </div>
            <div class="demo-actions">
                <Button>查看代码</Button>
            </div>
            <div class="demo-code">
                <pre>&lt;Switch v-model:value="bool" /&gt;</pre>
            </div>
        </div>
        <div class="demo">
            <h3>关闭之前执行的函数</h3>
            <p class="doc-page-usage">
                属性 `beforeClose` 是一个函数, return false 时 不会关闭弹框
            </p>
            <div class="demo-component">
                <DialogDemo04></DialogDemo04>
            </div>
            <div class="demo-actions">
                <Button>查看代码</Button>
            </div>
            <div class="demo-code">
                <pre>&lt;Switch v-model:value="bool" /&gt;</pre>
            </div>
        </div>
        <div class="demo">
            <h3>一句代码打开 Dialog</h3>
            <p class="doc-page-usage">
                类似 ElMessageBox 消息弹框
            </p>
            <div class="demo-component">
                <DialogDemo05></DialogDemo05>
            </div>
            <div class="demo-actions">
                <Button>查看代码</Button>
            </div>
            <div class="demo-code">
                <pre>&lt;Switch v-model:value="bool" /&gt;</pre>
            </div>
        </div>
    </div>
    
</template>

<script setup lang="ts">
import DialogDemo01 from '@/components/dialog/DialogDemo01.vue'
import DialogDemo02 from '@/components/dialog/DialogDemo02.vue'
import DialogDemo03 from '@/components/dialog/DialogDemo03.vue'
import DialogDemo04 from '@/components/dialog/DialogDemo04.vue'
import DialogDemo05 from '@/components/dialog/DialogDemo05.vue'
</script>

<style lang="scss" scoped>
@import './style.scss';

</style>
<template>
    <div class="doc-page">
        <h2>Button 组件示例 </h2>
        <p class="doc-page-desc">常用的操作按钮。</p>
        <div class="demo">
            <h3>常规用法</h3>
            <p class="doc-page-usage">尺寸 `size`: `large | normal | small`。 颜色等级 `level` : 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger'。 
                是否空心 `plain`。 是否圆角 `round` 。</p>
            <div class="demo-component">
                <ButtonDemo01></ButtonDemo01>
            </div>
            <div class="demo-actions">
                <Button>查看代码</Button>
            </div>
            <div class="demo-code">
                <pre>&lt;Switch v-model:value="bool" /&gt;</pre>
            </div>
        </div>
        <div class="demo">
            <h3>按钮类型</h3>
            <p class="doc-page-usage">类型 `theme`: button | link | text。 </p>
            <div class="demo-component">
                <ButtonDemo02></ButtonDemo02>
            </div>
            <div class="demo-actions">
                <Button>查看代码</Button>
            </div>
            <div class="demo-code">
                <pre>&lt;Switch v-model:value="bool" /&gt;</pre>
            </div>
        </div>
        <div class="demo">
            <h3>禁用按钮</h3>
            <p class="doc-page-usage">disable </p>
            <div class="demo-component">
                <ButtonDemo03></ButtonDemo03>
            </div>
            <div class="demo-actions">
                <Button>查看代码</Button>
            </div>
            <div class="demo-code">
                <pre>&lt;Switch v-model:value="bool" /&gt;</pre>
            </div>
        </div>
        <div class="demo">
            <h3>按钮加载中</h3>
            <p class="doc-page-usage">loading </p>
            <div class="demo-component">
                <ButtonDemo04></ButtonDemo04>
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

<script lang="ts" setup>
import Button from '@/lib/Button.vue';
import ButtonDemo01 from '@/components/button/ButtonDemo01.vue';
import ButtonDemo02 from '@/components/button/ButtonDemo02.vue';
import ButtonDemo03 from '@/components/button/ButtonDemo03.vue';
import ButtonDemo04 from '@/components/button/ButtonDemo04.vue';

</script>

<style lang="scss" scoped>
@import './style.scss';

</style>
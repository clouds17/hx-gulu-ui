<template>
    <div class="doc-page">
        <h2>Switch 组件示例 </h2>
        <p class="doc-page-desc">表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>
        <div class="demo">
            <h3>常规用法</h3>
            <p class="doc-page-usage">绑定 `v-model` 到一个 `Boolean` 类型的变量。 可以使用 `--el-switch-on-color` 属性与 `--el-switch-off-color` 属性来设置开关的背景色</p>
            <div class="demo-component">
                <SwitchDemo01></SwitchDemo01>
            </div>
            <div class="demo-actions">
                <Button>查看代码</Button>
            </div>
            <div class="demo-code">
                <pre>&lt;Switch v-model:value="bool" /&gt;</pre>
            </div>
        </div>
        <div class="demo">
            <h3>尺寸大小</h3>
            <p class="doc-page-usage">绑定一个 `size` 属性，属性值可以是 'large' | 'default' | 'small'。</p>
            <div class="demo-component">
                <SwitchDemo02></SwitchDemo02>
            </div>
            <div class="demo-actions">
                <Button>查看代码</Button>
            </div>
            <div class="demo-code">
                <pre>&lt;Switch v-model:value="bool" /&gt;</pre>
            </div>
        </div>
        <div class="demo">
            <h3>文字描述</h3>
            <p class="doc-page-usage">使用 `active-text` 属性与 `inactive-text` 属性来设置开关的文字描述。 使用 `inline-prompt` 属性来控制文本是否显示在点内。</p>
            <div class="demo-component">
                <SwitchDemo03></SwitchDemo03>
            </div>
            <div class="demo-actions">
                <Button>查看代码</Button>
            </div>
            <div class="demo-code">
                <pre>&lt;Switch v-model:value="bool" /&gt;</pre>
            </div>
        </div>

        <div class="demo">
            <h3>禁用状态</h3>
            <p class="doc-page-usage">设置 `disabled` 属性，接受一个 `Boolean`，设置 `true` 即可禁用。</p>
            <div class="demo-component">
                <SwitchDemo04></SwitchDemo04>
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
import SwitchDemo01 from '@/components/switch/SwitchDemo01.vue'
import * as SwitchDemo02 from '@/components/switch/SwitchDemo02.vue'
import SwitchDemo03 from '@/components/switch/SwitchDemo03.vue'
import SwitchDemo04 from '@/components/switch/SwitchDemo04.vue'


</script>

<style lang="scss" scoped>
@import './style.scss';

</style>
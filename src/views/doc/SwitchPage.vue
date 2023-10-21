<template>
    <div class="doc-page">
        <h2>Switch 组件示例 </h2>
        <p class="doc-page-desc">表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>
        <Demo :component="SwitchDemo01" usage="绑定 `v-model` 到一个 `Boolean` 类型的变量。 可以使用 `--el-switch-on-color` 属性与 `--el-switch-off-color` 属性来设置开关的背景色" />
        <Demo :component="SwitchDemo02" usage="绑定一个 `size` 属性，属性值可以是 'large' | 'default' | 'small'。" />
        <Demo :component="SwitchDemo03" usage="使用 `active-text` 属性与 `inactive-text` 属性来设置开关的文字描述。 使用 `inline-prompt` 属性来控制文本是否显示在点内。" />
        <Demo :component="SwitchDemo04" usage="设置 `disabled` 属性，接受一个 `Boolean`，设置 `true` 即可禁用。" />
    </div>
</template>

<script lang="ts" setup>
import Demo from '@/components/Demo.vue';
import SwitchDemo01 from '@/components/switch/SwitchDemo01.vue'
import SwitchDemo02 from '@/components/switch/SwitchDemo02.vue'
import SwitchDemo03 from '@/components/switch/SwitchDemo03.vue'
import SwitchDemo04 from '@/components/switch/SwitchDemo04.vue'
</script>

<style lang="scss" scoped>
@import './style.scss';

</style>
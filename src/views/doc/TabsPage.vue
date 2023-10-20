<template>
    <div class="doc-page">
        <h2>Tabs 组件示例 </h2>
        <p class="doc-page-desc">分隔内容上有关联但属于不同类别的数据集合。</p>
        <div class="demo">
            <h3>常规用法</h3>
            <p class="doc-page-usage">基础的、简洁的标签页。Tabs 组件提供了选项卡功能，可以通过 `value` 属性来指定当前选中的标签页。</p>
            <div class="demo-component">
                <TabsDemo01></TabsDemo01>
            </div>
            <div class="demo-actions">
                <Button>查看代码</Button>
            </div>
            <div class="demo-code">
                <pre>&lt;Switch v-model:value="bool" /&gt;</pre>
            </div>
        </div>
        <div class="demo">
            <h3>卡片风格的标签</h3>
            <p class="doc-page-usage">你可以设置具有卡片风格的标签。只需要设置 `type` 属性为 `card` 就可以使选项卡改变为标签风格。</p>
            <div class="demo-component">
                <TabsDemo02></TabsDemo02>
            </div>
            <div class="demo-actions">
                <Button>查看代码</Button>
            </div>
            <div class="demo-code">
                <pre>&lt;Switch v-model:value="bool" /&gt;</pre>
            </div>
        </div>
        <div class="demo">
            <h3>标签位置的设置</h3>
            <p class="doc-page-usage">可以通过 `tab-position` 设置标签的位置。标签一共有四个方向的设置 `tab-position = "left|right|top|bottom"`。</p>
            <div class="demo-component">
                <TabsDemo03></TabsDemo03>
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
import { ref } from 'vue'
import Tabs from '@/lib/Switch.vue';
import TabsDemo01 from '@/components/Tabs/TabsDemo01.vue'
import TabsDemo02 from '@/components/Tabs/TabsDemo02.vue'
import TabsDemo03 from '@/components/Tabs/TabsDemo03.vue'

</script>

<style lang="scss" scoped>
@import './style.scss';

</style>
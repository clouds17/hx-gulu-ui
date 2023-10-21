<template>
    <div class="demo">
        <h3>{{ component.__sourceCodeTitle }}</h3>
        <p class="doc-page-usage" v-if="usage">{{ usage }}</p>
        <div class="demo-component">
            <component :is="component" />
        </div>
        <div class="demo-actions">
            <Button @click="toggleCode">查看代码</Button>
        </div>
        <div class="demo-code" v-if="codeVisible">
            <pre class="language-html" v-html="html"></pre>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
const props = defineProps({
    component: {
        type: Object
    },
    usage: {
        type: String
    }
})
import 'prismjs'
import 'prismjs/themes/prism-okaidia.min.css'
const Prism = (window as any).Prism


const html = computed(() => {
    return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html') 
})

const codeVisible = ref(false)

const toggleCode = () => {
    codeVisible.value = !codeVisible.value
}

</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
$blue: #409EFF;
.demo {
    border: 1px solid $border-color;
    margin: 16px 0 32px;

    .doc-page-usage {
        line-height: 30px;
        color: #666;
        font-size: 15px;
        padding: 8px 16px 0;
    }

    >h3 {
        font-size: 18px;
        padding: 8px 16px;
        border-bottom: 1px solid $border-color;
    }
    &-component {
        padding: 16px;
    }
    &-actions {
        padding: 8px 16px;
        border-top: 1px dashed $border-color;

        > button {
            font-size: 14px;
            padding: 4px 10px;
            border-radius: 4px;
            border: 1px solid $border-color;
            color: #333;
            background: transparent;
            cursor: pointer;

            &:hover {
                color: $blue;
                border-color: $blue;
            }
        }
    }
    &-code {
        padding: 8px 16px;
        border-top: 1px dashed $border-color;
        >pre {
        line-height: 1.1;
        font-family: Consolas, 'Courier New', Courier, monospace;
        margin: 0;
        }
    }
}
</style>
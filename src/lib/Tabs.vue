<template>
    <div class="hx-tabs">
        <div class="hx-tabs-nav">
            <div 
                class="hx-tabs-nav-item" 
                :class="{ selected : title === modelValue }"
                v-for="(title, index) in titles" 
                :key="index"
                @click="select(title)"
            >
                {{ title }}
            </div>
        </div>
        <div class="hx-tabs-content">
            <component class="hx-tabs-content-item" 
                :class="{selected: c.props.title === modelValue}"
                v-for="(c, index) in defaults" 
                :is="c" :key="index"
            ></component>
        </div>
    </div>
</template>

<script setup >
import { ref, useSlots } from 'vue';
import Tab from '@/lib/Tab.vue';

const props = defineProps({
    modelValue: {
        type: String
    }
})

const emit = defineEmits(['update:modelValue'])

const slots = useSlots()

const defaults = slots.default()

defaults.forEach(item => {
    if (item.type !== Tab) {
        throw new Error('组件Tabs 里面的子标签只能是组件 Tab')
    }
})

const titles = defaults.map((tab, index) => {
    const title =  tab?.props?.title || `导航${index + 1}`
    return title
})

const select = (title) => {
    emit('update:modelValue', title)
}
</script>

<style lang="scss" >
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.hx-tabs {
    &-nav {
        display: flex;
        color: $color;
        border-bottom: 1px solid $border-color;

        &-item {
            padding: 8px 0;
            margin: 0 16px;
            cursor: pointer;

            &:first-child {
                margin-left: 0;
            }

            &.selected {
                color: $blue;
            }
        }
    }

    &-content {
        padding: 8px 0;
        &-item {
            display: none;
            &.selected {
                display: block;
            }
        }
    }
}
</style>
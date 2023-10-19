<template>
    <div class="hx-tabs">
        <div class="hx-tabs-nav" ref="container">
            <div 
                class="hx-tabs-nav-item" 
                :class="{ 'hx-selected' : title === modelValue }"
                v-for="(title, index) in titles" 
                :key="index"
                ref="itemRefs"
                @click="select(title)"
            >
                {{ title }}
            </div>
            <div class="hx-tabs-indicator" ref="indicator"></div>
        </div>
        <div class="hx-tabs-content">
            <component class="hx-tabs-content-item" 
                :class="{ 'hx-selected': c.props.title === modelValue }"
                v-for="(c, index) in defaults" 
                :is="c" :key="index"
            ></component>
        </div>
    </div>
</template>

<script setup >
import { ref, useSlots, onMounted, onUpdated } from 'vue';
import Tab from '@/lib/Tab.vue';

const props = defineProps({
    modelValue: {
        type: String
    }
})

const itemRefs = ref([])
const indicator = ref(null)
const container = ref(null)

const emit = defineEmits(['update:modelValue'])

onMounted(toggleIndicator)

onUpdated(toggleIndicator)

function toggleIndicator() {
    const divs = itemRefs.value
    const result = divs.filter(div => div.classList.contains('hx-selected'))[0]
    const { left: left2, width } = result.getBoundingClientRect()
    const { left: left1 } = container.value.getBoundingClientRect()
    indicator.value.style.width = width + 'px'
    indicator.value.style.left = left2 - left1 + 'px'
}

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
        position: relative;

        &-item {
            padding: 8px 0;
            margin: 0 16px;
            cursor: pointer;

            &:first-child {
                margin-left: 0;
            }

            &.hx-selected {
                color: $blue;
            }
        }
    }

    &-content {
        padding: 8px 0;
        &-item {
            display: none;
            &.hx-selected {
                display: block;
            }
        }
    }

    &-indicator {
        position: absolute;
        height: 3px;
        background: $blue;
        left: 0;
        bottom: -1px;
        width: 60px;
        transition: all .25s;
    }
}
</style>
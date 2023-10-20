<template>
    <div class="hx-tabs" :class="{ 'hx-tabs-flex':  tabPosition == 'left' || tabPosition == 'right', 'hx-tabs-row-reverse' : tabPosition == 'right'}">
        <template v-if="tabPosition == 'top' || tabPosition == 'left' || tabPosition == 'right'">
            <div class="hx-tabs-nav" ref="container">
                <div 
                    class="hx-tabs-nav-item" 
                    :class="{ 'hx-selected' : title === modelValue, 'hx-tabs-card': type == 'card' }"
                    v-for="(title, index) in titles" 
                    :key="index"
                    ref="itemRefs"
                    @click="select(title)"
                >
                    {{ title }}
                </div>
                <div v-if="type !== 'card'" class="hx-tabs-indicator" ref="indicator"></div>
            </div>
            <div class="hx-tabs-content">
                <component class="hx-tabs-content-item" 
                    :is="current" :key="modelValue"
                ></component>
            </div>
        </template>
        <template v-if="tabPosition == 'bottom'">
            <div class="hx-tabs-content">
                <component class="hx-tabs-content-item" 
                    :is="current" :key="modelValue"
                ></component>
            </div>
            <div class="hx-tabs-nav" ref="container">
                <div 
                    class="hx-tabs-nav-item" 
                    :class="{ 'hx-selected' : title === modelValue, 'hx-tabs-card': type == 'card' }"
                    v-for="(title, index) in titles" 
                    :key="index"
                    ref="itemRefs"
                    @click="select(title)"
                >
                    {{ title }}
                </div>
                <div v-if="type !== 'card'" class="hx-tabs-indicator" ref="indicator"></div>
            </div>
        </template>
       
    </div>
</template>

<script setup >
import { ref, useSlots, onMounted, onUpdated, watchEffect, computed } from 'vue';
import Tab from '@/lib/Tab.vue';

const props = defineProps({
    modelValue: {
        type: String
    },
    type: {
        type: String,
        default: 'default'
    },
    tabPosition: {
        type: String,
        default: 'top'
    }
})

const itemRefs = ref([])
const indicator = ref(null)
const container = ref(null)

const emit = defineEmits(['update:modelValue'])

onMounted(toggleIndicator)

onUpdated(toggleIndicator)

// onMounted(() => {
//     watchEffect(toggleIndicator, {
//         flush: 'sync'
//     })
// })

function toggleIndicator() {
    if (props.type == 'card') return;

    const divs = itemRefs.value
    const result = divs.filter(div => div.classList.contains('hx-selected'))[0]
    const { left: left2, width, height, top: top2 } = result.getBoundingClientRect()
    const { left: left1, top: top1 } = container.value.getBoundingClientRect()
    if (props.tabPosition == 'left' || props.tabPosition == 'right') {
        indicator.value.style.height = height + 'px'
        indicator.value.style.top = top2 - top1 + 'px'
        indicator.value.style.width = 3 + 'px'
        indicator.value.style.left = 'auto'
    } else {
        indicator.value.style.width = width + 'px'
        indicator.value.style.left = left2 - left1 + 'px'
        indicator.value.style.height = 3 + 'px'
        indicator.value.style.top = 'auto'
    }
    
}

const slots = useSlots()

const defaults = slots.default()

console.log('defaults', defaults)

defaults.forEach(item => {
    if (item.type !== Tab) {
        throw new Error('组件Tabs 里面的子标签只能是组件 Tab')
    }
})

const titles = defaults.map((tab, index) => {
    const title =  tab?.props?.title || `导航${index + 1}`
    return title
})

const current = computed(() => {
    return defaults.find(tag => tag?.props?.title === props.modelValue)
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
    &-flex {
        display: flex;
        width: 100%;
        
        > .hx-tabs-nav {
            flex-direction: column;
            border-bottom: 0px;
            > .hx-tabs-nav-item {
                margin: 0;
                padding: 8px 20px;
                text-align: right;
                border-right: 1px solid $border-color;
                max-width: 200px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            > .hx-tabs-indicator {
                right: -1px;
                height: 40px;
                width: 3px;
                left: auto;
                bottom: auto;
            }
        }
        > .hx-tabs-content {
            margin-left: 20px;
            margin-right: 20px;
            flex: 1;
        }

        &.hx-tabs-row-reverse {
            flex-direction: row-reverse;
            .hx-tabs-nav-item {
                border-right: 0px;
                text-align: left;
                border-left: 1px solid $border-color;
            }
            .hx-tabs-indicator {
                right: auto;
                left: -1px;
            }
        }
    }

   

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

            &.hx-tabs-card {
                margin: 0;
                padding: 8px 20px;
                border: 1px solid $border-color !important;
                margin-left: -1px;
                margin-bottom: -1px !important;

                &:first-child {
                    margin-left: 0;
                    border-top-left-radius: 4px;
                }
                &:last-child {
                    border-top-right-radius: 4px;
                }
            }
        }
    }

    &-content {
        padding: 8px 0;
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
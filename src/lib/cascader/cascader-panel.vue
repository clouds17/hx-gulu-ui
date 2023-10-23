<template>
    <div class="hx-cascader-menu">
        <div class="hx-cascader-wrapper">
            <ul class="hx-cascader-list">
                <li 
                    class="hx-cascader-item" 
                    :class="{ ischecked: isChecked(item) }"
                    v-for="(item, index) in options" 
                    :key="index"
                    @click="clickPanel(item)"
                >
                    {{ item.label }}
                </li>
            </ul>
        </div>
    </div>
    <template v-if="rightItems">
        <cascader-panel 
            :options="rightItems" 
            :level="level + 1 "
            :selectItems="selectItems" 
            @update:selectItems="onUpdateSelectItems"></cascader-panel>
    </template>
</template>

<script setup lang="ts">
name: "cascader-panel"
import { computed } from 'vue';

const props = defineProps({
    options: {
        type: Array,
        default: () => []
    },
    selectItems: {
        type: Array,
        default: () => []
    },
    level: {
        type: Number,
        default: 0
    }
})

const emits = defineEmits(['update:selectItems', 'close'])

const rightItems = computed(() => {
    let item = props.selectItems[props.level]
    
    if (item && item?.children?.length > 0) {
        return item.children
    }
    return false;
})


const isChecked = (item) => {
    return props.selectItems.map(t => t.label).includes(item.label)
}


const clickPanel = (item) => {
    // 如果用户点击的item，是之前已经点击过的item，那么就return掉，不再发起ajax请求
    if (isChecked(item)) return

    let selectItemsCopy = JSON.parse(JSON.stringify(props.selectItems))

    // 如果点击小于自己的level, 则降级到和level同
    if (props.level < props.selectItems?.length) {
        selectItemsCopy = selectItemsCopy.splice(0, props.level - 1)
    } 
    
    selectItemsCopy.push(item)

    emits('update:selectItems', selectItemsCopy)
}

const onUpdateSelectItems = (selectItemsCopy) => {
    emits('update:selectItems', selectItemsCopy)
}
</script>

<style lang="scss">
.hx-cascader-menu {
    min-width: 180px;
    box-sizing: border-box;
    color: #606266;
    border-right: 1px solid #e4e7ed;
}
.hx-cascader-wrapper {
    height: 204px;
    overflow-y: auto;
    overflow-x: hidden;
}
.hx-cascader-menu__list {
    position: relative;
    min-height: 100%;
    margin: 0;
    padding: 6px 0;
    list-style: none;
    box-sizing: border-box;
}
.hx-cascader-item {
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 20px 0 20px;
    height: 34px;
    line-height: 34px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    outline: none;
    cursor: pointer;
    &:hover {
        background-color: #f5f7fa;
    }
    &.ischecked {
        background-color: #f5f7fa;
        color: #409eff;
    }
}
</style>
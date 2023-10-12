<template>
    <button @click="toggle" :class="{ checked: modelValue }"><span></span></button>
</template>

<script>
import { ref } from 'vue';

export default {
    props: {
        modelValue: {
            type: Boolean,
            default: false
        }
    },
    setup (props, context) {

        const toggle = () => {
            context.emit('update:modelValue', !props.modelValue)
        }

        return { toggle}
    }
}
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;

button {
    --el-switch-off-color: #bfbfbf;
    --el-switch-on-color: #1890ff;
    height: $h;
    width: $h * 2;
    border: none;
    background-color: var(--el-switch-off-color);
    border-radius: calc($h / 2);
    position: relative;
    cursor: pointer;
    transition: all .25s linear;

    > span {
        position: absolute;
        top: 2px;
        left: 2px;
        height: $h2;
        width: $h2;
        background-color: #fff;
        border-radius: calc($h2 / 2);
        transition: all .25s linear;
    }

    &.checked {
        background-color: var(--el-switch-on-color);
        > span {
            left: calc(100% - $h2 - 2px);
        }
        &:active {
            > span {
                width: $h2 + 4px;
                margin-left: -4px;
            }
        }
        
    }
    &:focus {
        outline: none;
    }

    &:active {
        > span {
            width: $h2 + 4px;
        }
    }

}


</style>
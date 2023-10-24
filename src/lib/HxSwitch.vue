<template>
    <div class="hx-switch" :style="{'--init-size': initSize}">
        <span 
            v-if="inactiveText && !inlinePrompt"
            class="hx-switch-inactive__text" 
            :class="{'hx-switch-active': !modelValue}"
        >{{ inactiveText }}</span>
        <button 
            :style="{width: width ? width + 'px' : ''}"
            v-bind="$attrs"
            @click="toggle" 
            class="hx-switch-btn"
            :class="classes"
        >
            <small 
                class="hx-switch-inlinePrompt__text" 
                :class="{ 'hx-switch-checked': modelValue }"
                v-if="inactiveText && inlinePrompt && !modelValue"
            >{{ inactiveText }}</small>
            <small 
                class="hx-switch-inlinePrompt__text" 
                :class="{ 'hx-switch-checked': modelValue }"
                v-if="activeText && inlinePrompt && modelValue"
            >{{ activeText }}</small>
            <span></span>
        </button>
        <span 
            v-if="activeText && !inlinePrompt"
            class="hx-switch-active__text" 
            :class="{'hx-switch-active': modelValue}"
        >{{ activeText }}</span>
    </div>
</template>

<script setup>
import { watch, computed } from 'vue';
    defineOptions({
      inheritAttrs: false
    })
    const props = defineProps({
        modelValue: {
            type: Boolean,
            default: false
        },
        // 尺寸
        // 'large' | 'normal' | 'small' 
        size: {
            type: String,
            default: 'normal'
        },
        width: [String, Number],
        // 文字描述
        activeText: {
            type: String,
            default: ''
        },
        // 文字描述
        inactiveText: {
            type: String,
            default: ''
        },
        // 控制文字显示在按钮内
        inlinePrompt: {
            type: Boolean,
            default: false
        },
        // 是否禁用
        disabled: {
            type: Boolean,
            default: false
        },
    })
   
    const emit = defineEmits(['update:modelValue', 'change'])

    const toggle = () => {
        // 禁用
        if (props.disabled) return;

        emit('update:modelValue', !props.modelValue)
    }

    const classes = computed(() => {
        return {
            'hx-switch-checked': props.modelValue, 
            'hx-switch-inlinePrompt': props.inlinePrompt, 
            'hx-switch-disabled': props.disabled,
        }
    })
    
    watch(
        () => props.modelValue,
        (newValue) => {
            emit('change', newValue)
        }
    )
    
    // 初始化尺寸
    let initSize = '22px'
    if (props.size == 'large') {
        initSize = '26px'
    } else if (props.size == 'small') {
        initSize = '18px'
    }

</script>

<style lang="scss" >
 $h: var(--init-size);
 $h2: calc($h - 4px);

 .hx-switch {
    --el-switch-off-color: #bfbfbf;
    --el-switch-on-color: #1890ff;

    display: inline-block;

    .hx-switch-active__text,
    .hx-switch-inactive__text {
        font-size: calc($h - 10px);
        padding: 0 8px;
        vertical-align: bottom;
        &.hx-switch-active {
            color: var(--el-switch-on-color);
        }
    }

    & + & {
        margin-left: 8px;
    }

    .hx-switch-btn {
   
        height: $h;
        min-width: calc($h * 2);
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

        &.hx-switch-checked {
            background-color: var(--el-switch-on-color);
            > span {
                left: calc(100% - $h2 - 2px);
            }
            &:active {
                > span {
                    width: calc($h2 + 4px);
                    margin-left: -4px;
                }
            }
            
        }
        &:focus {
            outline: none;
        }

        &:active {
            > span {
                width: calc($h2 + 4px);
            }
        }

        &.hx-switch-inlinePrompt {
            width: auto;
            > .hx-switch-inlinePrompt__text {
                font-size: 12px;
                color: #fff;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                padding-left: calc($h2 + 6px);
                display: block;
                padding-right: 6px;
                text-align: left;
                &.hx-switch-checked {
                    padding-left: 6px;
                    padding-right: calc($h2 + 6px);
                    text-align: right;
                }
            }
        }

        &.hx-switch-disabled {
            opacity: .6;
            cursor: no-drop;
        }
        }

 }




</style>
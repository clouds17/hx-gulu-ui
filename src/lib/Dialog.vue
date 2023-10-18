<template>
    <Teleport to="#app">
        <div class=" hx-dialog-overlay" :class="modelValue ? 'hx-dialog-overlay__show' : 'hx-dialog-overlay__none'">
            <div class="hx-dialog-mask" @click.stop="onClickOverlay" :class="modelValue ? 'hx-dialog-mask__show' : 'hx-dialog-mask__hide'"></div>
            <div class="hx-dialog-wrapper" 
                :style="{ width: width }"
                :class="modelValue ? 'hx-dialog-wrapper__show' : 'hx-dialog-wrapper__hide' "> 
                    <div class="hx-dialog" >
                        <header>
                            <slot name="title"> {{ title }}</slot>
                            <span class="hx-dialog-close" @click="close"></span>
                        </header>
                        <main>
                            <slot >
                                {{ mainText }}
                            </slot>
                        </main>
                        <footer>
                            <slot name="footer">
                                <Button level="primary" @click="onSubmit">{{ submitText }}</Button>
                                <Button plain @click="onCancel">{{ cancelText }}</Button>
                            </slot>
                        </footer>
                    </div>
                </div>
        </div>
    </Teleport>
    
</template>

<script setup>
import Button from '@/lib/Button.vue';
import { ref, computed, watch } from 'vue';
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    closeOnClickOverlay: {
        type: Boolean,
        default: true
    },
    beforeClose: {
        type: Function
    },
    title: {
        type: String,
        default: '提示'
    },
    submitText: {
        type: String,
        default: '确定'
    },
    cancelText: {
        type: String,
        default: '取消'
    },
    width: {
        type: String,
        default: '30%'
    },
    mainText: {
        type: String,
        default: '内容'
    },
    submit: {
        type: Function
    },
    cancel: {
        type: Function
    }
})


const emit = defineEmits(['update:modelValue', 'onSubmit', 'onCancel'])

const open = () => {
    emit('update:modelValue', true)
}

const close = () => {
    // 如果存在，并且返回了false，说明不关闭
    if (props.beforeClose && props.beforeClose() == false) {
        return false
    }
    emit('update:modelValue', false)

}
// 点击外面的罩子是否关闭
const onClickOverlay = () => {
    if (props.closeOnClickOverlay) {
        close()
    }
}


const onSubmit = () => {
    // 如果有传入subnit函数就执行, 返回值不是 false，则直接关闭
    if (props.submit?.() !== false) {
        close()
    }
    emit('onSubmit')
}

const onCancel = () => {
    // 如果有传入cancel函数就执行, 返回值不是 false，则直接关闭
    if (props.cancel && props.cancel() !== false) {
        console.log('执行了这里了', props?.cancel)
        close()
    }
    emit('onCancel')
}

defineExpose({
    close,
    open
})

</script>

<style lang="scss" >
$radius: 4px;
$border-color: #d9d9d9;

.hx-dialog-overlay,
.hx-dialog-mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2001;
    transition: all 1s;
}
@keyframes delay {
    0% {
        display: block;
    }
    100% {
        display: none;
    }
}
.hx-dialog-overlay {
    z-index: 2000;
    display: none;
    &__show {
        display: block;
    }
    &__hide {
        display: block;
    }
    &__none {
        display: none;
        animation: delay .3s forwards;
    }
}
.hx-dialog-mask {
    opacity: 0;
    background: fade_out(black, 0.5);

    &.hx-dialog-mask__show {
        animation: showPopupMask 0.3s linear both;
    }
    &.hx-dialog-mask__hide {
        animation: hidePopupMask 0.3s linear both;
    }
}
@keyframes showPopupMask {
    0% { opacity: 0; }
    100% { opacity: 1; }
}
@keyframes hidePopupMask {
    0% { opacity: 1; }
    100% { opacity: 0; }
}
@keyframes showPopupBody {
    0% { 
        opacity: 0;
        top: 10vh;
    }
    100% { 
        opacity: 1;
        top: 15vh;
    }
}
@keyframes hidePopupBody {
    0% { 
        opacity: 1;
        top: 15vh;
    }
    100% { 
        opacity: 0;
        top: 10vh;
    }
}
.hx-dialog {
    background-color: #fff;
    border-radius: $radius;
    box-shadow: 0 0 3px fade_out(black, 0.5);
    
    

    &-wrapper {
        position: fixed;
        left: 50%;
        top: 8vh;
        transform: translateX(-50%);
        z-index: 2011;
        opacity: 0;
        min-width: 350px;
        max-width: 90%;
        &.hx-dialog-wrapper__show {
            animation: showPopupBody 0.25s linear both;
        }
        &.hx-dialog-wrapper__hide {
            animation: hidePopupBody 0.25s linear both;
        }
    }

    > header {
        padding: 12px 16px;
        border-bottom: 1px solid $border-color;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 20px;
    }

    > main {
        padding: 12px 16px;
    }

    > footer {
        border-top: 1px solid $border-color;
        padding: 12px 16px;
        text-align: right;
    }

    &-close {
        position: relative;
        display: inline-block;
        width: 16px;
        height: 16px;
        cursor: pointer;

        &::before,
        &::after {
            content: '';
            position: absolute;
            height: 1px;
            background: black;
            width: 100%;
            top: 50%;
            left: 50%;
        }

        &::before {
            transform: translate(-50%, -50%) rotate(-45deg);
        }

        &::after {
            transform: translate(-50%, -50%) rotate(45deg);
        }
    }
}

</style>
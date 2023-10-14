<template>
    <Teleport to="#app">
        <div class=" hx-dialog-overlay" :class="overlayClass">
            <div class="hx-dialog-mask" @click.stop="onClickOverlay" :class="modelValue ? 'hx-dialog-mask__show' : 'hx-dialog-mask__hide'"></div>
            <div class="hx-dialog-wrapper" :class="modelValue ? 'hx-dialog-wrapper__show' : 'hx-dialog-wrapper__hide' "> 
                    <div class="hx-dialog">
                        <header>
                            <slot name="header"> {{ title }}</slot>
                            <span class="hx-dialog-close" @click="close"></span>
                        </header>
                        <main>
                            <slot />
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
    }
})


const emit = defineEmits(['update:modelValue', 'onSubmit', 'onCancel'])

const overlayClass = ref('hx-dialog-overlay__none')

const open = () => {
    overlayClass.value = 'hx-dialog-overlay__show'
}

// 关闭的时候改变最外面的罩子
const changeOverlayClass = () => {
    if (overlayClass.value !== 'hx-dialog-overlay__show')
        return false;
    console.log('我执行了')
    overlayClass.value = 'hx-dialog-overlay__hide'
    setTimeout(() => {
        overlayClass.value = 'hx-dialog-overlay__none'
    }, 300);
}

const close = () => {
    // 如果存在，并且返回了false，说明不关闭
    if (props.beforeClose && props.beforeClose() == false) {
        return false
    }

    changeOverlayClass()
    emit('update:modelValue', false)

}

const onClickOverlay = () => {
    if (props.closeOnClickOverlay) {
        close()
    }
}

watch(
    () => props.modelValue,
    (newValue) => {
        if (newValue) {
            open()
        } else {
            changeOverlayClass()
        }
    }
)

const onSubmit = () => {
    emit('onSubmit')
}

const onCancel = () => {
    emit('onCancel')
}

</script>

<style lang="scss" scoped>
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
    min-width: 400px;
    max-width: 90%;
    

    &-wrapper {
        position: fixed;
        left: 50%;
        top: 8vh;
        transform: translateX(-50%);
        z-index: 2011;
        opacity: 0;
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
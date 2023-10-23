<template>
    <transition name="hx-message__box" @after-leave="onAfterLeave">
        <div class="hx-message__box" v-if="isVisible"  :style="{width: width}">
            <div class="hx-message__box-content">
                <div class="hx-message__content-header">
                    <p class="hx-message__header-title">{{ headerText }}</p>
                    <p class="hx-message__header-close" v-if="showCancel" @click="cancelHandle"></p>
                </div>
                <div class="hx-message__content-body">
                    <p class="hx-message__body-text">{{ content }}</p>
                </div>
                <div class="hx-message__content-footer">
                    <hx-button v-if="type !== 'comfirm'" @click="cancelHandle">cancelText</hx-button>
                    <hx-button class="hx-message__footer-btn" level="primary" @click="successHandle">successText</hx-button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup lang="ts">
import { ref, computed, nextTick } from 'vue';
import HxButton from '@/lib/HxButton.vue';

const props = defineProps({
    width: {
        default: '400px'
    },
    successText: {
        type: String,
        default: '确定'
    },
    cancelText: {
        type: String,
        default: '取消'
    },
    headerText: {
        type: String,
        default: '提示'
    },
    content: {
        type: String,
        default: ''
    },
    // 成功回调函数
    successPromise: {
        type: Function
    },
    // 失败回调函数
    cancelPromise: {
        type: Function
    },
    hide: {
        type: Function
    },
    // 是否需要右上角关闭按钮
    showCancel: {
        type: Boolean,
        default: true
    },
    // 弹窗类型: default 默认显示确认，取消  /  confirm 仅显示确认
    type: {
        type: String,
        default: 'default'
    },
    // 默认点击遮罩层不关闭
    closeByOverlay: {
        type: Boolean,
        default: false
    },
    // 传入调用方法
    holdOnFn: {
        type: Function
    },
    overlayNode: {
        type: Object
    }
})

// 控制弹窗
const isVisible = ref(false)

/**
 * @description: 遮罩层需要消失动画，两个动画效果必须同时触发，所以关闭时直接调用hide方法
 * @return {*}
 */
const onAfterLeave = () => {
    props.hide && props.hide()
}

/**
 * @description: 显示弹窗
 * @return {*}
 */
 const show = () => {
    isVisible.value = true;
    if (props.closeByOverlay) {
        props.overlayNode.addEventListener('click', hidden);
    }
};

/**
 * @description: 隐藏弹窗
 * @return {*}
 */
const hidden = () => {
    isVisible.value = false;
    onAfterLeave()
    if (props.closeByOverlay) {
        props.overlayNode.removeEventListener('click', hidden);
    }
};

const successHandle = () => {
    if (!props.holdOnFn) {
        props.successPromise && props.successPromise()
        nextTick(() => {
            hidden()
        })
    } else {
        props.holdOnFn()
        nextTick(() => {
            hidden()
        })
    }
}

const cancelHandle = () => {
    props.cancelPromise && props.cancelPromise();
    nextTick(() => {
        hidden();
    });
}

/**
 * @description: 将方法暴露出去
 * @return {*}
 */
 defineExpose({
    show
});

</script>

<style lang="scss">
.hx-message__dialog {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
.hx-message__overlay {
    background: rgba(0,0,0,.5);
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
}
.hx-message__box-overlay-show-to {
    animation: opacity-show .3s linear forwards;
}
@keyframes opacity-show {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
.hx-message__box-overlay-leave-to {
    animation: opacity-leave .3s linear forwards;
}
@keyframes opacity-leave {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
.hx-message__box {
    position: fixed;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;
    max-width: 92%;
    overflow: hidden;
    &-content {
        width: 100%;
        padding: 24px;
        border-radius: 10px;
        background-color: #fff;
        .hx-message__content-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .hx-message__header-title {
                flex: 1;
                font-size: 18px;
                color: #1A1A1A;
                line-height: 24px;
            }
            .hx-message__header-close {
                flex-shrink: 0;
                margin: 0 0 0 24px;
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

        .hx-message__content-body {
            display: flex;
            justify-content: center;
            width: 100%;
            padding: 24px 0 34px;
            .hx-message__body-text{
                max-width: 100%;
                width: 100%;
                text-align: left;
                font-size: 14px;
                color: #1A1A1A;
                line-height: 18px;
            }
        }

        .hx-message__content-footer {
            display: flex;
            justify-content: flex-end;

            .hx-message__footer-btn {
                margin-left: 15px
            }
        }
    }
}
</style>
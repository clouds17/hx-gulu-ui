<template>
    <button class="hx-button" :class="classes" :disabled="disabled">
        <span class="hx-loadingIndicator" v-if="loading"></span>
        <slot />
    </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    // 类型
    // 'button' | 'link' | 'text'
    theme: {
        type: String,
        default: 'button'
    },
    // 尺寸
    // 'large' | 'normal' | 'small' 
    size: {
        type: String,
        default: 'normal'
    },
    // 颜色等级
    // 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger'
    level: {
        type: String,
        default: 'default'
    },
    // 是否空心
    plain: {
        type: Boolean,
        default: false
    },
     // 是否圆角
    round: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    loading: {
        type: Boolean,
        default: false
    }
})

const classes = computed(() => {
    return {
        [`hx-button-theme__${props.theme}`]: props.theme,
        [`hx-button-size__${props.size}`]: props.size,
        [`hx-button-level__${props.level}`]: props.level,
        [`hx-button-plain`]: props.plain,
        [`hx-button-round`]: props.round,
    }
})

</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$loading-color: #087aed ;
$color: #333;
$radius: 4px;

$level-primary: #409EFF;
$level-primary-plain: #ECF5FF;
$level-success: #67C23A;
$level-success-plain: #F0F9EB;
$level-info: #909399;
$level-info-plain: #F4F4F5;
$level-warning: #E6A23C;
$level-warning-plain: #FDF6EC;
$level-danger: #F56C6C;
$level-danger-plain: #FEF0F0;

$level-key: primary,success,info,warning,danger;
$level-value: #409EFF,#67C23A,#909399,#E6A23C,#F56C6C;
$level-plain: #ECF5FF,#F0F9EB,#F4F4F5,#FDF6EC,#FEF0F0;

.hx-button {
    box-sizing: border-box;
    height: $h;
    padding: 0 12px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: white;
    color: $color;
    border: 1px solid $border-color;
    border-radius: $radius;
    box-shadow: 0 1px 0 fade-out(black, 0.95);
    margin-bottom: 10px;
    & + & {
        margin-left: 8px;
    }

    &:hover,
    &:focus {
        color: $level-primary;
        border-color: $level-primary;
        background: $level-primary-plain;
    }
    &:focus {
        outline: none;
    }
    &::-moz-focus-inner {
        border: 0;
    }

    &[disabled] {
        cursor: not-allowed;
        opacity: .6;
        &:hover,
        &:focus {
            background: white;
            color: $color;
            border-color: $border-color;
        }
    }
    
    &.hx-button-theme__link {
        border-color: transparent !important;
        box-shadow: none;
        color: $color;
        background: transparent !important;
        &:hover,
        &:focus {
            color: lighten($color, 15%);
        }
        &[disabled] {
            &:hover,
            &:focus {
                color: $color;
            }
        }
    }

    &.hx-button-theme__text {
        border-color: transparent !important;
        box-shadow: none;
        color: inherit;
        background: transparent !important;
        &:hover,
        &:focus {
            background: darken(white, 5%) !important;
        }

        &[disabled] {
            &:hover,
            &:focus {
                background: white !important;
            }
        }
    }
    &.hx-button-round {
        border-radius: calc($h / 2);
    }
    &.hx-button-size__large {
        font-size: 18px;
        height: 38px;
        padding: 0 18px;
        &.hx-button-round {
            border-radius: 19px;
        }
    }
    &.hx-button-size__small {
        font-size: 12px;
        height: 22px;
        padding: 0 6px;
        &.hx-button-round {
            border-radius: 11px;
        }
    }

    @for $i from 1 through length($level-key) {
        $item: nth($level-key, $i);
        $value: nth($level-value, $i);
        &.hx-button-level__#{$item} {
            color: white;
            border-color: $value;
            background: $value;
            &:hover,
            &:focus {
                border-color: lighten($value, 15%);
                background: lighten($value, 15%);
                
            }
            &[disabled] {
                &:hover,
                &:focus {
                    color: white;
                    border-color: $value;
                    background: $value;
                }
            }
            &.hx-button-theme__link {
                color: $value;
                &:hover,
                &:focus {
                    color: lighten($value, 15%);
                }
                &[disabled] {
                    &:hover,
                    &:focus {
                        color: $value;
                    }
                }
            }
            &.hx-button-theme__text {
                color: $value;
                &[disabled] {
                    &:hover,
                    &:focus {
                        color: $value;
                    }
                }
            }
        }
    }


    &.hx-button-plain {
        color: $color;
        border-color: $border-color;
        background: white;
        &:hover,
        &:focus {
            border-color: $level-primary;
            color: $level-primary;
            
        }
        &[disabled] {
            &:hover,
            &:focus {
                color: $color;
                border-color: $border-color;
            }
        }
        @for $i from 1 through length($level-key) {
            $item: nth($level-key, $i);
            $value: nth($level-value, $i);
            $plain: nth($level-plain, $i);

            &.hx-button-level__#{$item} {
                color: $value;
                border-color: $value;
                background: $plain;
                &:hover,
                &:focus {
                    background: $value;
                    color: white;
                }
                &[disabled] {
                    &:hover,
                    &:focus {
                        color: $value;
                        background: $plain;
                        border-color: $value;
                    }
                }
            }
        }
        // &.hx-button-level__primary {
        //     color: $level-primary;
        //     border-color: $level-primary;
        //     background: $level-primary-plain;
        //     &:hover,
        //     &:focus {
        //         background: $level-primary;
        //         color: white;
        //     }
        // }
        // &.hx-button-level__success {
        //     color: $level-success;
        //     border-color: $level-success;
        //     background: $level-success-plain;
        //     &:hover,
        //     &:focus {
        //         background: $level-success;
        //         color: white;
        //     }
        // }
        // &.hx-button-level__info {
        //     color: $level-info;
        //     border-color: $level-info;
        //     background: $level-info-plain;
        //     &:hover,
        //     &:focus {
        //         background: $level-info;
        //         color: white;
        //     }
        // }
        // &.hx-button-level__warning {
        //     color: $level-warning;
        //     border-color: $level-warning;
        //     background: $level-warning-plain;
        //     &:hover,
        //     &:focus {
        //         background: $level-warning;
        //         color: white;
        //     }
        // }
        // &.hx-button-level__danger {
        //     color: $level-danger;
        //     border-color: $level-danger;
        //     background: $level-danger-plain;
        //     &:hover,
        //     &:focus {
        //         background: $level-danger;
        //         color: white;
        //     }
        // }
    }

    // &.hx-button-level__primary {
    //     color: white;
    //     border-color: $level-primary;
    //     background: $level-primary;
    //     &:hover,
    //     &:focus {
    //         border-color: lighten($level-primary, 15%);
    //         background: lighten($level-primary, 15%);
            
    //     }
    //     &.hx-button-theme__link {
    //         color: $level-primary;
    //         &:hover,
    //         &:focus {
    //             color: lighten($level-primary, 15%);
    //         }
    //     }
    //     &.hx-button-theme__text {
    //         color: $level-primary;
    //     }
    // }
    // &.hx-button-level__success {
    //     color: white;
    //     border-color: $level-success;
    //     background: $level-success;
    //     &:hover,
    //     &:focus {
    //         border-color: lighten($level-success, 15%);
    //         background: lighten($level-success, 15%);
            
    //     }
    //     &.hx-button-theme__link {
    //         color: $level-success;
    //         &:hover,
    //         &:focus {
    //             color: lighten($level-success, 15%);
    //         }
    //     }
    //     &.hx-button-theme__text {
    //         color: $level-success;
    //     }
    // }
    // &.hx-button-level__info {
    //     color: white;
    //     border-color: $level-info;
    //     background: $level-info;
    //     &:hover,
    //     &:focus {
    //         border-color: lighten($level-info, 15%);
    //         background: lighten($level-info, 15%);
            
    //     }
    //     &.hx-button-theme__link {
    //         color: $level-info;
    //         &:hover,
    //         &:focus {
    //             color: lighten($level-info, 15%);
    //         }
    //     }
    //     &.hx-button-theme__text {
    //         color: $level-info;
    //     }
    // }
    // &.hx-button-level__warning {
    //     color: white;
    //     border-color: $level-warning;
    //     background: $level-warning;
    //     &:hover,
    //     &:focus {
    //         border-color: lighten($level-warning, 15%);
    //         background: lighten($level-warning, 15%);
            
    //     }
    //     &.hx-button-theme__link {
    //         color: $level-warning;
    //         &:hover,
    //         &:focus {
    //             color: lighten($level-warning, 15%);
    //         }
    //     }
    //     &.hx-button-theme__text {
    //         color: $level-warning;
    //     }
    // }
    // &.hx-button-level__danger {
    //     color: white;
    //     border-color: $level-danger;
    //     background: $level-danger;
    //     &:hover,
    //     &:focus {
    //         border-color: lighten($level-danger, 15%);
    //         background: lighten($level-danger, 15%);
            
    //     }

    //     &.hx-button-theme__link {
    //         color: $level-danger;
    //         &:hover,
    //         &:focus {
    //             color: lighten($level-danger, 15%);
    //         }
    //     }
    //     &.hx-button-theme__text {
    //         color: $level-danger;
    //     }
    // }
    
    > .hx-loadingIndicator {
        width: 14px;
        height: 14px;
        display: inline-block;
        margin-right: 4px;
        border-radius: 8px;
        border-color: $loading-color $loading-color $loading-color transparent;
        border-style: solid;
        border-width: 2px;
        animation: hx-spin 1s infinite linear;
    }

    @keyframes hx-spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
}

</style>
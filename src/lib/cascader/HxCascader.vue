<template>
    <div class="hx-cascader" @mouseenter="isChoose = true" @mouseleave="isChoose = false" @click="clickInner">
        <div class="hx-input" >
            <div class="hx-input__wrapper">
                <input class="hx-input__inner" type="text" readonly autocomplete="off" placeholder="Select" :value="selectsText">
                <span class="hx-input__suffix" >
                    <i class="hx-input__suffix-inner" :class="{ 'hx-input__suffix-rotate': isClickThis }">
                        <svg class="icon">
                            <use xlink:href="#icon-arrow-down"></use>
                        </svg>
                    </i>
                </span>
            </div>
        </div>
        <div class="hx-cascader-panel" v-if="isClickThis">
              <cascader-panel 
                :options="options" 
                v-model:selectItems="selectItems" ></cascader-panel>
        </div>
    </div>
</template>

<script setup lang="ts">
import cascaderPanel from './cascader-panel.vue';
import { ref, watch } from 'vue';

const props = defineProps({
    options: {
        type: Array,
        default: () => {
            return []
        }
    },
    modelValue: {
        type: Array,
        default: () => []
    }
})

const selectItems = ref([])

const emits = defineEmits(['update:modelValue'])

const selectsText = ref('')

watch(selectItems, (newValue) => {
  const value = newValue.map(item => item.value)
  selectsText.value = value.join(' / ')
  emits('update:modelValue', value)
})

const isChoose = ref(false)
const isClickThis  = ref(false)

const clickHandle = () => {
    !isChoose.value && (() => {
        isClickThis.value = false
        window.removeEventListener('click', clickHandle)
    })()
}

const clickInner = () => {
    !isClickThis.value && (() => {
        isClickThis.value = true
        window.addEventListener('click', clickHandle)
    })()
}

</script>

<style lang="scss" scoped>
$height: 32px;
.hx-cascader {
    width: 218px;
    position: relative;
    height: $height;
    .hx-input {
        display: flex;
        cursor: pointer;
        height: 100%;
        &__wrapper {
            display: inline-flex;
            flex-grow: 1;
            align-items: center;
            justify-content: center;
            padding: 1px 11px;
            background-color: #fff;
            border-radius: 4px;
            cursor: text;
            box-shadow: 0 0 0 1px #dcdfe6 inset;
        }
        &__inner {
            text-overflow: ellipsis;
            cursor: pointer;
            height: 100%;
            width: 100%;
            flex-grow: 1;
            color: #606266;
            height: calc($height - 2px);
            line-height: calc($height - 2px);
            padding: 0;
            outline: 0;
            border: none;
            background: 0 0;
            box-sizing: border-box;
        }

        &__suffix {
            display: inline-flex;
            white-space: nowrap;
            flex-shrink: 0;
            flex-wrap: nowrap;
            height: 100%;
            text-align: center;
            color: #a8abb2;
            pointer-events: none;

            &-inner {
                pointer-events: all;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                margin-left: 8px;
                transition: all .3s;

            }
            &-rotate {
                transform: rotate(180deg);
            }
        }
    }

    &-panel {
      display: flex;
      border-radius: 4px;
      font-size: 14px;
      z-index: 2087;
      position: absolute;
      background: #fff;
      border: 1px solid #e4e7ed;
      top: 40px;
      left: 0;
      overflow-x: auto;

      @media screen and (max-width: 480px ) {
        max-width: 400px;
      }
      @media screen and (max-width: 420px ) {
        max-width: 350px;
      }
      @media screen and (max-width: 380px ) {
        max-width: 300px;
      }
    }
}
</style>
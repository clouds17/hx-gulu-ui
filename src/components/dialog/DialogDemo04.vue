<demo>关闭之前的函数</demo>
<!-- 属性 `beforeClose` 是一个函数, return false 时 不会关闭弹框 -->
<template>
    <div>
        <hx-button level="primary" @click="open">beforeClose 函数</hx-button>
        <hx-dialog
            v-model="visible" 
            :close-on-click-overlay = "false"
            :beforeClose = "onBeforeClose"
        >
            <p>内容一</p>
            <p>内容二</p>
        </hx-dialog>
    </div>
    
</template>
  
<script lang="ts" setup>
  import { HxButton, HxDialog } from 'hx-gulu-ui';
  import { ref } from 'vue'
  
  const visible = ref(false)
  const open = () => visible.value = true
 
  const onBeforeClose = () => {
        // 可以进行验证啥的，返回值不是false时， 函数执行完关闭弹框
        // 返回值 是 false时，不关闭弹框
        console.log('执行 beforeClose')
    }
</script>
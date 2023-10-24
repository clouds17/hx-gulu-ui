<demo>点击空白部分是否关闭弹框</demo>
<template>
    <div>
        <hx-button level="primary" @click="open">close-on-click-overlay</hx-button>
        <hx-dialog
            v-model="visible" 
            :close-on-click-overlay = "false"
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
 
</script>
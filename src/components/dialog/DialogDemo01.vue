<demo>基本用法</demo>
<template>
    <div>
        <hx-button level="primary" @click="open">基本用法</hx-button>
        <hx-dialog
            v-model="visible" 
            title="小黄的title"
            width="600px"
            submit-text="确定"
            cancel-text="取消"
            @onSubmit="onSubmit"
            @onCancel="onCancel"
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
  const onSubmit = () => {
    console.log('submit')
  }
  const onCancel = () => {
    console.log('cancel')
  }
</script>
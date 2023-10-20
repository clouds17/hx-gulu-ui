<!-- 基本用法 -->
<template>
    <div>
        <Button level="primary" @click="open">基本用法</Button>
        <Dialog
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
                
        </Dialog>
    </div>
    
</template>
  
<script lang="ts" setup>
  import Dialog from '@/lib/Dialog.vue';
  import Button from '@/lib/Button.vue';
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
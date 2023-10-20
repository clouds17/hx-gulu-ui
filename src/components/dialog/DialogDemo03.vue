<!-- 点击空白部分是否关闭弹框 -->
<template>
    <div>
        <Button level="primary" @click="open">close-on-click-overlay</Button>
        <Dialog
            v-model="visible" 
            :close-on-click-overlay = "false"
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
 
</script>
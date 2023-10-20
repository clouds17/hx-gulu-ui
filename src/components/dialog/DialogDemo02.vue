<!-- 自定义头部和底部 -->
<template>
    <div>
        <Button level="primary" @click="open">自定义头部和底部</Button>
        <Dialog
            v-model="visible" 
        >
            <template #title>
                <h1>我加的标题</h1>
            </template>
            <p>内容一</p>
            <p>内容二</p>
            <template #footer>
                <Button level="primary" @click="">我点确定</Button>
                <Button plain @click="">我点取消</Button>
            </template>
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
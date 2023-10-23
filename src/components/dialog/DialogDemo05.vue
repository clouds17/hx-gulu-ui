<demo>一句代码打开 Dialog</demo>
<template>
    <div>
        <hx-button level="primary" @click="open">一句代码打开 Dialog</hx-button>
    </div>
</template>
  
<script lang="ts" setup>
  import { openDialog } from '@/lib/openDialog.ts';
  import HxButton from '@/lib/HxButton.vue';
  import { ref } from 'vue'
  
    const open = () => {
        openDialog({
            title: '我定义的标题',
            mainText: '一句代码打开 Dialog',
            width: '40%',
            submitText: '同意',
            cancelText: '拒绝',
            closeOnClickOverlay: false,
            submit: () => {
                console.log('submit')
            },
            cancel: () => {
                console.log('cancel')
            }
        })
    }
</script>
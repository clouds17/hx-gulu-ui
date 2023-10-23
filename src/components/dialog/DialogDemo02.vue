<demo>自定义头部和底部</demo>
<template>
    <div>
        <hx-button level="primary" @click="open">自定义头部和底部</hx-button>
        <hx-dialog
            v-model="visible" 
        >
            <template #title>
                <h1>我加的标题</h1>
            </template>
            <p>内容一</p>
            <p>内容二</p>
            <template #footer>
                <hx-button level="primary" @click="">我点确定</hx-button>
                <hx-button plain @click="">我点取消</hx-button>
            </template>
        </hx-dialog>
    </div>
    
</template>
  
<script lang="ts" setup>
  import HxDialog from '@/lib/HxDialog.vue';
  import HxButton from '@/lib/HxButton.vue';
  import { ref } from 'vue'
  
  const visible = ref(false)
  const open = () => visible.value = true
 
</script>
<demo>常规用法</demo>
<template>
    <div>
        <hx-button @click="open">点击</hx-button>
    </div>
</template>

<script setup lang="ts">
import HxButton from '@/lib/HxButton.vue';
import hxMessageBox from '@/lib/hxMessageBox/index'
const open = () => {
    hxMessageBox.confirm({
        content: '消息内容',
        successText: '确定',
        cancelText: '取消',
        headerText: '头部标题',
    })
    .then(() => {
      console.log('success')
    })
    .catch(() => {
      console.log('cancel')
    })
}
</script>

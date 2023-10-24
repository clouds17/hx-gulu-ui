<demo>常规用法</demo>
<template>
    <div>
        <hx-button @click="open">点击</hx-button>
    </div>
</template>

<script setup lang="ts">
import { HxButton, HxMessageBox } from 'hx-gulu-ui';
const open = () => {
    HxMessageBox.confirm({
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

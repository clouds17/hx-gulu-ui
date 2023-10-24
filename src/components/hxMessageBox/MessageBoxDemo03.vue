<demo>点击遮罩层关闭</demo>
<template>
    <div>
        <hx-button @click="open">点击</hx-button>
    </div>
</template>

<script setup lang="ts">
import { HxButton, HxMessageBox } from 'hx-gulu-ui';
const open = () => {
    HxMessageBox.confirm({
        content: '点击遮罩层可以关闭',
        successText: '确定',
        cancelText: '取消',
        headerText: '头部标题',
        closeByOverlay: true
    })
    .then(() => {
      console.log('success')
    })
    .catch(() => {
      console.log('cancel')
    })
}
</script>

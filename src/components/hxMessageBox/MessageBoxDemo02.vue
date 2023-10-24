<demo>弹窗类型</demo>
<template>
    <div>
        <hx-button @click="open">default</hx-button>
        <hx-button @click="open2">confirm</hx-button>
    </div>
</template>

<script setup lang="ts">
import { HxButton, HxMessageBox } from 'hx-gulu-ui';
const open = () => {
    HxMessageBox.confirm({
        content: 'default弹框',
        successText: '确定',
        cancelText: '取消',
        headerText: '头部标题',
        type: 'default'
    })
    .then(() => {
      console.log('success')
    })
    .catch(() => {
      console.log('cancel')
    })
}
const open2 = () => {
    HxMessageBox.confirm({
        content: 'confirm 弹框',
        successText: '确定',
        headerText: '头部标题',
        type: 'comfirm'
    })
    .then(() => {
      console.log('success')
    })
}
</script>

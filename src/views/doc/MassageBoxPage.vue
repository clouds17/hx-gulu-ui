<template>
    <div class="doc-page">
        <h2>MessageBox 消息弹框 </h2>
        <p class="doc-page-desc">默认会返回一个`Promise`对象便于进行后续操作的处理。</p>
        <Demo :component="MessageBoxDemo01"  />
        <Demo :component="MessageBoxDemo02" usage="弹窗类型: default 默认显示确认，取消 / confirm 仅显示确认" />
        <Demo :component="MessageBoxDemo03"  />
    </div>
    
</template>

<script lang="ts" setup>
import Demo from '@/components/Demo.vue';
import MessageBoxDemo01 from '@/components/hxMessageBox/MessageBoxDemo01.vue';
import MessageBoxDemo02 from '@/components/hxMessageBox/MessageBoxDemo02.vue';
import MessageBoxDemo03 from '@/components/hxMessageBox/MessageBoxDemo03.vue';

</script>

<style lang="scss" scoped>
@import './style.scss';

</style>
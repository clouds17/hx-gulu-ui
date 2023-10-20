<!-- 按钮类型 -->
<template>
    <!-- 类型 theme: button | link | text -->
    <div>
        <Button level="default" >default</Button>
        <Button level="primary">primary</Button>
        <Button level="success" >success</Button>
        <Button level="info" >info</Button>
        <Button level="warning" >warning</Button>
        <Button level="danger"  >danger</Button>
    </div>
    <div style="padding-top: 20px;">
        <Button theme="link" level="default" >link default</Button>
        <Button theme="link" level="primary">link primary</Button>
        <Button theme="link " level="success" >link success</Button>
        <Button theme="link " level="info" >link info</Button>
        <Button theme="link" level="warning" >link warning</Button>
        <Button theme="link" level="danger" >link danger</Button>
    </div>
    <div style="padding-top: 20px;">
        <Button theme="text" level="default" >text default</Button>
        <Button theme="text" level="primary">text primary</Button>
        <Button theme="text " level="success" >text success</Button>
        <Button theme="text " level="info" >text info</Button>
        <Button theme="text" level="warning" >text warning</Button>
        <Button theme="text" level="danger" >text danger</Button>
    </div>
</template>
  
<script lang="ts" setup>
    import Button from '@/lib/Button.vue';
</script>
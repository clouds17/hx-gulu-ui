<demo>禁用按钮</demo>
<template>
    <!-- disabled -->
    <div>
        <Button disabled level="default" >default</Button>
        <Button disabled level="primary">primary</Button>
        <Button disabled level="success" >success</Button>
        <Button disabled level="info" >info</Button>
        <Button disabled level="warning" >warning</Button>
        <Button disabled level="danger"  >danger</Button>
    </div>
    <div style="padding-top: 20px;">
        <Button disabled theme="link" level="default" >link default</Button>
        <Button disabled theme="link" level="primary">link primary</Button>
        <Button disabled theme="link " level="success" >link success</Button>
        <Button disabled theme="link " level="info" >link info</Button>
        <Button disabled theme="link" level="warning" >link warning</Button>
        <Button disabled theme="link" level="danger" >link danger</Button>
    </div>
    <div style="padding-top: 20px;">
        <Button disabled theme="text" level="default" >text default</Button>
        <Button disabled theme="text" level="primary">text primary</Button>
        <Button disabled theme="text " level="success" >text success</Button>
        <Button disabled theme="text " level="info" >text info</Button>
        <Button disabled theme="text" level="warning" >text warning</Button>
        <Button disabled theme="text" level="danger" >text danger</Button>
    </div>
</template>
  
<script lang="ts" setup>
    import Button from '@/lib/Button.vue';
</script>
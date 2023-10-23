<demo>禁用按钮</demo>
<template>
    <!-- disabled -->
    <div>
        <hx-button disabled level="default" >default</hx-button>
        <hx-button disabled level="primary">primary</hx-button>
        <hx-button disabled level="success" >success</hx-button>
        <hx-button disabled level="info" >info</hx-button>
        <hx-button disabled level="warning" >warning</hx-button>
        <hx-button disabled level="danger"  >danger</hx-button>
    </div>
    <div style="padding-top: 20px;">
        <hx-button disabled theme="link" level="default" >link default</hx-button>
        <hx-button disabled theme="link" level="primary">link primary</hx-button>
        <hx-button disabled theme="link " level="success" >link success</hx-button>
        <hx-button disabled theme="link " level="info" >link info</hx-button>
        <hx-button disabled theme="link" level="warning" >link warning</hx-button>
        <hx-button disabled theme="link" level="danger" >link danger</hx-button>
    </div>
    <div style="padding-top: 20px;">
        <hx-button disabled theme="text" level="default" >text default</hx-button>
        <hx-button disabled theme="text" level="primary">text primary</hx-button>
        <hx-button disabled theme="text " level="success" >text success</hx-button>
        <hx-button disabled theme="text " level="info" >text info</hx-button>
        <hx-button disabled theme="text" level="warning" >text warning</hx-button>
        <hx-button disabled theme="text" level="danger" >text danger</hx-button>
    </div>
</template>
  
<script lang="ts" setup>
    import HxButton from '@/lib/HxButton.vue';
</script>
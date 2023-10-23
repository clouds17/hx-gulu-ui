<demo>按钮类型</demo>
<template>
    <!-- 类型 theme: button | link | text -->
    <div>
        <hx-button level="default" >default</hx-button>
        <hx-button level="primary">primary</hx-button>
        <hx-button level="success" >success</hx-button>
        <hx-button level="info" >info</hx-button>
        <hx-button level="warning" >warning</hx-button>
        <hx-button level="danger"  >danger</hx-button>
    </div>
    <div style="padding-top: 20px;">
        <hx-button theme="link" level="default" >link default</hx-button>
        <hx-button theme="link" level="primary">link primary</hx-button>
        <hx-button theme="link " level="success" >link success</hx-button>
        <hx-button theme="link " level="info" >link info</hx-button>
        <hx-button theme="link" level="warning" >link warning</hx-button>
        <hx-button theme="link" level="danger" >link danger</hx-button>
    </div>
    <div style="padding-top: 20px;">
        <hx-button theme="text" level="default" >text default</hx-button>
        <hx-button theme="text" level="primary">text primary</hx-button>
        <hx-button theme="text " level="success" >text success</hx-button>
        <hx-button theme="text " level="info" >text info</hx-button>
        <hx-button theme="text" level="warning" >text warning</hx-button>
        <hx-button theme="text" level="danger" >text danger</hx-button>
    </div>
</template>
  
<script lang="ts" setup>
    import HxButton from '@/lib/HxButton.vue';
</script>
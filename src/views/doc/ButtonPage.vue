<template>
    <div>
        <Button loading level="default" >default</Button>
        <Button  level="primary">primary</Button>
        <Button  level="success" >success</Button>
        <Button  level="info" >info</Button>
        <Button  level="warning" >warning</Button>
        <Button level="danger"  >danger</Button>

        <p style="padding-top: 30px;"></p>
       
        <Button plain  level="default" >default</Button>
        <Button plain  level="primary">primary</Button>
        <Button plain  level="success" >success</Button>
        <Button plain  level="info" >info</Button>
        <Button plain  level="warning" >warning</Button>
        <Button plain  level="danger" >danger</Button>

        <p style="padding-top: 30px;"></p>
       
        <Button plain round  size="small" level="default" >default</Button>
        <Button plain round  level="primary">primary</Button>
        <Button plain round  size="large" level="success" >success</Button>
        <Button plain round  level="info" >info</Button>
        <Button plain round  level="warning" >warning</Button>
        <Button plain round  level="danger" >danger</Button>

        <p style="padding-top: 30px;"></p>

        <Button theme="link"  level="default" >default</Button>
        <Button theme="link"  level="primary">primary</Button>
        <Button theme="link"  level="success" >success</Button>
        <Button theme="link"  level="info" >info</Button>
        <Button theme="link"  level="warning" >warning</Button>
        <Button theme="link"  level="danger" >danger</Button>

        <p style="padding-top: 30px;"></p>

        <Button theme="text"  level="default" >default</Button>
        <Button theme="text"  level="primary">primary</Button>
        <Button theme="text"  level="success" >success</Button>
        <Button theme="text"  level="info" >info</Button>
        <Button theme="text"   level="warning" >warning</Button>
        <Button theme="text" :="true" level="danger" >danger</Button>
    </div>
</template>

<script lang="ts" setup>
import Button from '@/lib/Button.vue';

const onClick = () => {
    console.log('触发了')
}
</script>

<style lang="scss" scoped>

</style>
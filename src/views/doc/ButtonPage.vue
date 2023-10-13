<template>
    <div>
        <Button >你好呀</Button>
        <Button theme="button">你好呀</Button>
        <Button theme="link">你好呀</Button>
        <Button theme="text">你好呀</Button>
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
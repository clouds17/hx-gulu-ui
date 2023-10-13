<template>
    <div>
        <Button @click="onClick">你好呀</Button>
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
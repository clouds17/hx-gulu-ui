<template>
    <div>
        <Button @click="toggle">按钮</Button>
        <DialogVue v-model="visible" />
    </div>
</template>

<script setup lang="ts">
import DialogVue from '@/lib/Dialog.vue';
import { ref } from 'vue';
import Button from '@/lib/Button.vue';

const visible = ref(false)

const toggle = () => visible.value = !visible.value
</script>

<style lang="scss" scoped>

</style>
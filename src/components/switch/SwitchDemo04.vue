<demo>禁用状态</demo>
<template>
    <hx-switch v-model="value1" disabled />
    <hx-switch v-model="value2" @change="switchChange"/>
</template>

<script lang="ts" setup>
    import { HxSwitch } from 'hx-gulu-ui';
    import { ref } from 'vue'

    const value1 = ref(true)
    const value2 = ref(true)

    const switchChange = (e) => {
        console.log('switchChange', e)
    }
</script>
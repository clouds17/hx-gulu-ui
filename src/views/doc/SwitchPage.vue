<template>
    <div>
        <Switch :modelValue="value" @update:modelValue="value = $event" />
        <div>{{ value ? '打开' : '关闭' }}</div>

    </div>
</template>

<script lang="ts">
import Switch from '@/lib/Switch.vue';
import { ref } from 'vue';
export default {
    components: {
        Switch
    },
    setup () {
        const value = ref(false)
        return {
            value
        }
    }   
}
</script>

<style lang="scss" scoped>

</style>
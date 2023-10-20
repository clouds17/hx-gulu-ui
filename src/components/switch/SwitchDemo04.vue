<!-- 禁用状态 -->
<template>
<Switch v-model="value1" disabled />
<Switch v-model="value2" @change="switchChange"/>
</template>

<script lang="ts" setup>
import Switch from '@/lib/Switch.vue';
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(true)

const switchChange = (e) => {
    console.log('改变了', e)
}
</script>
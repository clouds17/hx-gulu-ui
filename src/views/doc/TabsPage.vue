<template>
    <div>
        <Tabs v-model="activeTab">
            <Tab title="tab1">内容1</Tab>
            <Tab title="tab2">内容2</Tab>
        </Tabs>
    </div>
</template>

<script setup>
import Tabs from '@/lib/Tabs.vue';
import Tab from '@/lib/Tab.vue';
import { ref } from 'vue';

const activeTab = ref('tab2')

</script>

<style lang="scss" scoped>

</style>
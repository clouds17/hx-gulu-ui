<!-- 卡片风格的标签 -->
<template>
    <div>
        <Tabs v-model="activeTab" type="card">
            <Tab title="tab1">内容1</Tab>
            <Tab title="tab2222">内容2</Tab>
            <Tab title="tab3">内容3</Tab>
            <Tab title="tab4">内容4</Tab>
        </Tabs>
    </div>
</template>

<script setup>
import Tabs from '@/lib/Tabs.vue';
import Tab from '@/lib/Tab.vue';
import { ref } from 'vue';

const activeTab = ref('tab1')

</script>
<!-- 标签位置的设置 -->
<template>
    <div>
        <div style="padding-bottom: 30px">
            <Button @click="changeDirection('top')">top</Button>
            <Button @click="changeDirection('right')">right</Button>
            <Button @click="changeDirection('bottom')">bottom</Button>
            <Button @click="changeDirection('left')">left</Button>
        </div>
        <Tabs v-model="activeTab" :tab-position="tabPosition" >
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
import Button from '@/lib/Button.vue';

const activeTab = ref('tab1')
const tabPosition = ref('top')

const changeDirection = (direction) => {
    tabPosition.value = direction
}

</script>
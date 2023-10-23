<demo>标签位置的设置</demo>
<template>
    <div>
        <div style="padding-bottom: 30px">
            <hx-button @click="changeDirection('top')">top</hx-button>
            <hx-button @click="changeDirection('right')">right</hx-button>
            <hx-button @click="changeDirection('bottom')">bottom</hx-button>
            <hx-button @click="changeDirection('left')">left</hx-button>
        </div>
        <hx-tabs v-model="activeTab" :tab-position="tabPosition" >
            <hx-tab title="tab1">内容1</hx-tab>
            <hx-tab title="tab2222">内容2</hx-tab>
            <hx-tab title="tab3">内容3</hx-tab>
            <hx-tab title="tab4">内容4</hx-tab>
        </hx-tabs>
    </div>
</template>

<script setup>
import HxTabs from '@/lib/tabs/HxTabs.vue';
import HxTab from '@/lib/tabs/HxTab.vue';
import { ref } from 'vue';
import HxButton from '@/lib/HxButton.vue';

const activeTab = ref('tab1')
const tabPosition = ref('top')

const changeDirection = (direction) => {
    tabPosition.value = direction
}

</script>
<demo>基本用法</demo>
<template>
    <div>
        <hx-tabs v-model="activeTab">
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

const activeTab = ref('tab2222')

</script>
<!-- 文字描述  'large' | 'default' | 'small' --> 
<template>
   <Switch
    v-model="value1"
    active-text="Pay by month"
    inactive-text="Pay by year"
  />
  <Switch
    v-model="value2"
    style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
    active-text="Pay by month"
    inactive-text="Pay by year"
  />
  <br />
  <br />
  <Switch
    v-model="value3"
    inline-prompt
    active-text="是"
    inactive-text="否"
  />
  <Switch
    v-model="value4"
    class="ml-2"
    inline-prompt
    style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
    active-text="Y"
    inactive-text="N"
  />
  <Switch
    v-model="value5"
    class="ml-2"
    width="60"
    inline-prompt
    active-text="超出省略"
    inactive-text="超出省略"
  />
  <Switch
    v-model="value6"
    class="ml-2"
    inline-prompt
    style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
    active-text="完整展示多个内容"
    inactive-text="多个内容"
  />
</template>
  
  <script lang="ts" setup>
  import Switch from '@/lib/Switch.vue';
  import { ref } from 'vue'
  
    const value1 = ref(true)
    const value2 = ref(true)
    const value3 = ref(true)
    const value4 = ref(true)
    const value5 = ref(true)
    const value6 = ref(true)
  </script>
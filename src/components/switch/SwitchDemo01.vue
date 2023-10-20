<demo>
  常规用法
</demo>
<template>
    <Switch v-model="value1" />
    <Switch
      v-model="value2"
      class="ml-2"
      style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
    />
</template>
  
<script lang="ts" setup>
  import Switch from '@/lib/Switch.vue';
  import { ref } from 'vue'
  
  const value1 = ref(true)
  const value2 = ref(true)
</script>
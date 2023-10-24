<demo>常规用法</demo>
<template>
    <hx-switch v-model="value1" />
    <hx-switch
      v-model="value2"
      class="ml-2"
      style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
    />
</template>
  
<script lang="ts" setup>
  import { HxSwitch } from 'hx-gulu-ui';
  import { ref } from 'vue'
  
  const value1 = ref(true)
  const value2 = ref(true)
</script>
<demo>尺寸大小</demo>
<template>
    <hx-switch
        v-model="value"
        size="large"
    />
    <hx-switch v-model="value" />
    <hx-switch
        v-model="value"
        size="small"
    />
</template>
  
<script lang="ts" setup>
  import HxSwitch from '@/lib/HxSwitch.vue';
  import { ref } from 'vue'
  
  const value = ref(true)
</script>
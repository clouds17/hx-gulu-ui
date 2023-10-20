<!-- 尺寸  'large' | 'default' | 'small' --> 

<template>
    <Switch
        v-model="value"
        size="large"
    />
    <Switch v-model="value" />
    <Switch
        v-model="value"
        size="small"
    />
  </template>
  
  <script lang="ts" setup>
  import Switch from '@/lib/Switch.vue';
  import { ref } from 'vue'
  
  const value = ref(true)
  </script>
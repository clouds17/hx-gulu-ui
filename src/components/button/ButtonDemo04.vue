<!-- 加载中 -->
<template>
    <!-- loading -->
    <div>
        <Button loading level="default" >default</Button>
        <Button loading level="primary">primary</Button>
        <Button loading level="success" >success</Button>
        <Button loading level="info" >info</Button>
        <Button loading level="warning" >warning</Button>
        <Button loading level="danger"  >danger</Button>
    </div>
</template>
  
<script lang="ts" setup>
    import Button from '@/lib/Button.vue';
</script>
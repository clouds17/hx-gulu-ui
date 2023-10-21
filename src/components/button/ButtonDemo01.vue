<demo>基本用法</demo>
<template>
    <!-- 尺寸 size: large | normal | small -->
    <div>
        <Button size='large' >large</Button>
        <Button>normal</Button>
        <Button size='small'>small</Button>
    </div>
    <!-- 颜色等级  level: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger' -->
    <div style="padding-top: 20px;">
		<Button level="default" >default</Button>
        <Button level="primary">primary</Button>
        <Button level="success" >success</Button>
        <Button level="info" >info</Button>
        <Button level="warning" >warning</Button>
        <Button level="danger"  >danger</Button>
	</div>
    <!-- 是否空心  plain -->
    <div style="padding-top: 20px;">
		<Button plain level="default" >default</Button>
        <Button plain level="primary">primary</Button>
        <Button plain level="success" >success</Button>
        <Button plain level="info" >info</Button>
        <Button plain level="warning" >warning</Button>
        <Button plain level="danger"  >danger</Button>
	</div>
    <!-- 是否圆角 round -->
    <div style="padding-top: 20px;">
		<Button round plain level="default" >default</Button>
        <Button round plain level="primary">primary</Button>
        <Button round plain level="success" >success</Button>
        <Button round plain level="info" >info</Button>
        <Button round plain level="warning" >warning</Button>
        <Button round plain level="danger"  >danger</Button>
	</div>
</template>
  
<script lang="ts" setup>
    import Button from '@/lib/Button.vue';
</script>
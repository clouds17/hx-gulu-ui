<demo>基本用法</demo>
<template>
    <!-- 尺寸 size: large | normal | small -->
    <div>
        <hx-button size='large' >large</hx-button>
        <hx-button>normal</hx-button>
        <hx-button size='small'>small</hx-button>
    </div>
    <!-- 颜色等级  level: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger' -->
    <div style="padding-top: 20px;">
		<hx-button level="default" >default</hx-button>
        <hx-button level="primary">primary</hx-button>
        <hx-button level="success" >success</hx-button>
        <hx-button level="info" >info</hx-button>
        <hx-button level="warning" >warning</hx-button>
        <hx-button level="danger"  >danger</hx-button>
	</div>
    <!-- 是否空心  plain -->
    <div style="padding-top: 20px;">
		<hx-button plain level="default" >default</hx-button>
        <hx-button plain level="primary">primary</hx-button>
        <hx-button plain level="success" >success</hx-button>
        <hx-button plain level="info" >info</hx-button>
        <hx-button plain level="warning" >warning</hx-button>
        <hx-button plain level="danger"  >danger</hx-button>
	</div>
    <!-- 是否圆角 round -->
    <div style="padding-top: 20px;">
		<hx-button round plain level="default" >default</hx-button>
        <hx-button round plain level="primary">primary</hx-button>
        <hx-button round plain level="success" >success</hx-button>
        <hx-button round plain level="info" >info</hx-button>
        <hx-button round plain level="warning" >warning</hx-button>
        <hx-button round plain level="danger"  >danger</hx-button>
	</div>
</template>
  
<script lang="ts" setup>
    import HxButton from '@/lib/HxButton.vue';
</script>
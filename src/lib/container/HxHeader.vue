<template>
    <div class="hx-header">
        <slot />
    </div>
</template>
<style lang="scss">
.hx-header {
    --hx-header-padding: 0 20px;
    --hx-header-height: 60px;
    padding: var(--hx-header-padding);
    box-sizing: border-box;
    flex-shrink: 0;
    min-height: var(--hx-header-height);
}
</style>
<template>
    <div class="hx-footer">
        <slot />
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.hx-footer {
    --hx-footer-padding: 0 20px;
    --hx-footer-height: 60px;
    padding: var(--hx-footer-padding);
    box-sizing: border-box;
    flex-shrink: 0;
    height: var(--hx-footer-height);
}
</style>
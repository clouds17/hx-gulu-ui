<template>
    <div class="hx-aside">
        <slot />
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
.hx-aside {
    overflow: auto;
    box-sizing: border-box;
    flex-shrink: 0;
    width: var(--hx-aside-width, 300px);
}
</style>
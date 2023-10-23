<template>
    <div class="hx-main">
        <slot />
    </div>
</template>
<style lang="scss" >
.hx-main {
    --hx-main-padding: 20px;
    display: block;
    flex: 1;
    flex-basis: auto;
    overflow: auto;
    box-sizing: border-box;
    padding: var(--hx-main-padding);
}
</style>
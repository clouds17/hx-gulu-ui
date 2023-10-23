<template>
    <section class="hx-container" :class="{ 'is-vertical': isVertical}">
        <slot></slot>
    </section>
</template>

<script setup lang="ts">
import { useSlots, computed } from 'vue';
import HxHeader from './HxHeader.vue';
import HxFooter from './HxFooter.vue';
const slots = useSlots()
console.log('slots', slots);

const isVertical =  computed(() => {
    return slots.default().some(tag => {
        return tag.type == HxHeader || tag.type == HxFooter
    })
})

</script>

<style lang="scss">
.hx-container {
    display: flex;
    flex-direction: row;
    flex: 1;
    flex-basis: auto;
    box-sizing: border-box;
    min-width: 0;

    &.is-vertical {
        flex-direction: column;
    }
}
</style>
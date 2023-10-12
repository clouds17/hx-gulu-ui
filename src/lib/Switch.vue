<template>
    <button @click="toggle" :class="{ checked: checked }"><span></span></button>
</template>

<script>
import { ref } from 'vue';

export default {
    setup () {
        const checked = ref(false)

        const toggle = () => {
            checked.value = !checked.value
        }

        return {checked, toggle}
    }
}
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
    height: $h;
    width: $h * 2;
    border: none;
    background-color: gray;
    border-radius: calc($h / 2);
    position: relative;
    cursor: pointer;
    transition: all .3s linear;
}
span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background-color: #fff;
    border-radius: calc($h2 / 2);
    transition: left .3s linear;
}
button.checked {
    background-color: blue;
}
button.checked > span {
    left: calc(100% - $h2 - 2px);
}
</style>
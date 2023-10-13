<template>
    <div class="hx-dialog-overlay"></div>
    <div class="hx-dialog-wrapper">
        <div class="hx-dialog">
            <header>
                标题
                <span class="hx-dialog-close"></span>
            </header>
            <main>
                <p>第一行字</p>
                <p>第二行字</p>
            </main>
            <footer>
                <Button level="primary">OK</Button>
                <Button plain>Cancel</Button>
            </footer>
        </div>
    </div>
    
</template>

<script setup>
import Button from '@/lib/Button.vue';

</script>

<style lang="scss" scoped>
$radius: 4px;
$border-color: #d9d9d9;

.hx-dialog {
    background-color: #fff;
    border-radius: $radius;
    box-shadow: 0 0 3px fade_out(black, 0.5);
    min-width: 400px;
    max-width: 90%;

    &-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: fade_out(black, 0.5);
        z-index: 10;
    }

    &-wrapper {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 11;
    }

    > header {
        padding: 12px 16px;
        border-bottom: 1px solid $border-color;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 20px;
    }

    > main {
        padding: 12px 16px;
    }

    > footer {
        border-top: 1px solid $border-color;
        padding: 12px 16px;
        text-align: right;
    }

    &-close {
        position: relative;
        display: inline-block;
        width: 16px;
        height: 16px;
        cursor: pointer;

        &::before,
        &::after {
            content: '';
            position: absolute;
            height: 1px;
            background: black;
            width: 100%;
            top: 50%;
            left: 50%;
        }

        &::before {
            transform: translate(-50%, -50%) rotate(-45deg);
        }

        &::after {
            transform: translate(-50%, -50%) rotate(45deg);
        }
    }
}

</style>
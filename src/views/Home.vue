<template>
    <div>
        <Topnav></Topnav>
        <div class="banner">
            <h1>小黄VUE3造轮子 </h1>
            <h2>自己做得一个UI框架</h2>
            <p class="actions">
                <a href="https://github.com/clouds17/hx-gulu-ui" target="_blank">GitHub</a>
                <router-link to="/doc">开始</router-link>
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue';
export default {
    components: { 
        Topnav
    }
}
</script>

<style lang="scss" scoped>
.banner {
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: lightgreen;
    > .actions {
        padding: 8px 0;
        a {
            margin: 0 8px;
            background: #fff;
            display: inline-block;
            $h: 28px;
            height: $h;
            line-height: $h;
            border-radius: $h / 2;
            padding: 0 8px;
        }
    }
}
</style>
<template>
    <div>
        <Topnav></Topnav>
        <div class="banner">
            <h1>HX UI</h1>
            <h2>小黄自己做得一个UI框架</h2>
            <p class="actions">
                <a href="https://github.com/clouds17/hx-gulu-ui" target="_blank">GitHub</a>
                <router-link to="/doc">开始</router-link>
            </p>
        </div>
        <div class="features">
            <ul>
                <li>
                    <svg class="icon">
                        <use xlink:href="#icon-vue"></use>
                    </svg>
                    <h3>基于 Vue 3</h3>
                    <p>使用了 Vue 3 Composition API</p>
                </li>
                <li>
                    <svg class="icon">
                        <use xlink:href="#icon-ts"></use>
                    </svg>
                    <h3>基于 TypeScript</h3>
                    <p>源代码采用 TypeScript 书写 (非严格检查)</p>
                </li>
                <li>
                    <svg class="icon">
                        <use xlink:href="#icon-dengpao"></use>
                    </svg>
                    <h3>代码易读</h3>
                    <p>每个组件的源代码都极其简洁</p>
                </li>
            </ul>
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
$green: #0b63a1;
$border-radius: 4px;
.banner {
    padding: 100px 0;
    display: flex;
    color: darken($color: $green, $amount: 10);
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #8EC5FC;
    background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
    clip-path: ellipse(80% 60% at 50% 40%);
    > h1 {
        line-height: 2;
        margin-bottom: 10px;
    }
    > .actions {
        padding: 8px 0;
        a {
            margin: 0 8px;
            margin-top: 30px;
            background: $green;
            color: white;
            display: inline-block;
            border-radius: $border-radius;
            padding: 8px 24px;
            &:hover {
                text-decoration: none;
                background: lighten($color: $green, $amount: 10);
            }
        }
    }
}


.features {
    margin: 64px auto;
    width: 400px;
    max-width: 100%;

    @media (min-width: 800px) {
        width: 800px;
    }

    @media (min-width: 1200px) {
        width: 1200px;
    }

    > ul {
        display: flex;
        flex-wrap: wrap;

        > li {
            width: 400px;
            max-width: 100%;
            margin: 16px 0;
            display: grid;
            justify-content: start;
            align-content: space-between;
            grid-template-areas: 
                "icon title"
                "icon text";
            grid-template-columns: 80px auto;
            grid-template-rows: 1fr auto;

            > svg {
                grid-area: icon;
                width: 64px;
                height: 64px;
            }

            > h3 {
                grid-area: title;
                font-size: 28px;
            }

            > p {
                grid-area: text;
            }
        }
    }

   
}
</style>
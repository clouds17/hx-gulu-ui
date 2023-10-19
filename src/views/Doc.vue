<template>
    <div class="docPage">
        <Topnav toggleMenuButtonVisible></Topnav>
        <div class="content">
            <aside :class="asideVisible ? '' : 'hide'" >
                <h2>文档</h2>
                <ol>
                    <li>
                        <router-link to="/doc/intro">介绍</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/install">安装</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/getstart">开始使用</router-link>
                    </li>
                </ol>
                <h2>组件列表</h2>
                <ol>
                    <li>
                        <router-link to="/doc/switch">Switch 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/button">Button 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/dialog">Dialog 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/tabs">Tabs 组件</router-link>
                    </li>
                </ol>
            </aside>
            <main>
                <router-view></router-view>
            </main>
        </div>
    </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue';
import { inject, Ref } from 'vue'
export default {
    components: { 
        Topnav
    },
    setup() {
        const asideVisible = inject<Ref<boolean>>('asideVisible')

        return {
            asideVisible
        }
    }
}
</script>


<style lang="scss" scoped>

.router-link-active  {
    background: #9CC5FC;
    color: #fff;
}

.docPage {
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .content {
        display: flex;
        flex: 1;
        position: relative;
        overflow: hidden;
        aside {
            background-color: #F9F9F9;
            width: 150px;
            padding: 16px 0;
            transform: translateX(0);
            transition: all .3s;
            overflow-y: auto;
            overflow-x: hidden;
            border-right: 1px solid #d9d9d9;
            z-index: 99999;
            > h2 {
                margin-bottom: 4px;
                padding: 0 16px;
                font-size: 20px;
                font-weight: bold;
                &:nth-of-type(n + 2) {
                    margin-top: 10px;
                }
            }
            > ol {
                > li a {
                    display: block;
                    padding: 6px 16px;
                }
            }
            @media screen and (max-width: 500px) {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
            }
            &.hide {
                transform: translateX(-150px);
                
            }
        }

        main {
            width: calc(100% - 150px);
            transition: all .3s;
            padding: 16px;
            overflow-y: auto;
            overflow-x: hidden;
            @media screen and (max-width: 500px) {
                width: 100%;
            }
        }
    }
}
::-webkit-scrollbar {
    /* display: none; */
    width: 4px;
    height: 6px;
}

::-webkit-scrollbar-corner {
  display: block;
}

::-webkit-scrollbar-thumb {
  border-radius: 8px;
  border-right-color: transparent;
  border-left-color: transparent;
  background-color: rgba(0, 0, 0, 0.3);
}

::-webkit-scrollbar-track {
  border-right-color: transparent;
  border-left-color: transparent;
  background-color: rgba(0, 0, 0, 0.2);
}


</style>
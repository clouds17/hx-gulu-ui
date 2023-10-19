<template>
    <div class="topnav" :class="{docNav: toggleMenuButtonVisible}">
        <div class="logo">
            <router-link to="/" style="display: flex;">
                <img :src="$baseImg + 'my-logo2.png'" alt=""/>
            </router-link>
        </div>
        <div class="toggleAside" @click="toggleAside" v-if="toggleMenuButtonVisible">
            <svg class="icon">
                <use xlink:href="#icon-menu"></use>
            </svg>
        </div>
        <ul class="menu">
            <li><router-link to="/doc">开始</router-link></li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { inject, Ref } from 'vue'

defineProps({
    toggleMenuButtonVisible: {
        type: Boolean,
        default: false
    }
})

const asideVisible = inject<Ref<boolean>>('asideVisible')

const toggleAside = () => {
    asideVisible!.value = !asideVisible!.value
}
</script>

<style lang="scss" scoped>
.topnav {
    background-color: #8EC5FC;
    background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
  display: flex;
  padding: 16px;
  position: relative;
  z-index: 10;
  align-items: center;
  justify-content: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    img {
        height: 40px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    display: none;
    width: 30px;
    height: 30px;
    // background-color: red;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    > svg {
        width: 30px;
        height: 30px;
    }
  }
  @media screen and (max-width: 500px) {
    > .logo { 
        img {
            height: 30px;
        }
    }
  }
}

.docNav {
    @media screen and (max-width: 500px) {
    > .menu { display: none; }
    > .logo { 
        margin: 0 auto;
        
    }
    > .toggleAside {
        display: inline-block;
    }
  }
}
</style>
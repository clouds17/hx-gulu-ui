import { createWebHashHistory, createRouter } from 'vue-router'
import Markdown from './components/Markdown.vue'
import { h } from 'vue'

import intro from './markdowm/intro.md'
import install from './markdowm/install.md'
import getStart from './markdowm/getStart.md'

const md = (content, path) => h(Markdown, { content , key: path })

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: () => import('@/views/Home.vue')
        },
        {
            path: '/doc',
            component: () => import('@/views/Doc.vue'),
            children: [
                {
                    path: '',
                    redirect: '/doc/intro'
                },
                {
                    path: 'intro',
                    component: md(intro, 'intro')
                },
                {
                    path: 'install',
                    component: md(install, 'install')
                },
                {
                    path: 'getstart',
                    component: md(getStart, 'getstart')
                },
                {
                    path: 'switch',
                    component: () => import('@/views/doc/SwitchPage.vue')
                },
                {
                    path: 'button',
                    component: () => import('@/views/doc/ButtonPage.vue')
                },
                {
                    path: 'dialog',
                    component: () => import('@/views/doc/DialogPage.vue')
                },
                {
                    path: 'tabs',
                    component: () => import('@/views/doc/TabsPage.vue')
                },
                {
                    path: 'container',
                    component: () => import('@/views/doc/ContainerPage.vue')
                },
                {
                    path: 'cascader',
                    component: () => import('@/views/doc/CascaderPage.vue')
                },
                {
                    path: 'messagebox',
                    component: () => import('@/views/doc/MassageBoxPage.vue')
                }
            ]
        },
        {
            path: '/:pathMatch(.*)*',
            component: () => import('@/views/404.vue')
        }
    ]
})
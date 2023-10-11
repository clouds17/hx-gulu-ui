import { createWebHashHistory, createRouter } from 'vue-router'

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
                    component: () => import('@/views/doc/Index.vue')
                },
                {
                    path: 'switch',
                    component: () => import('@/views/doc/Switch.vue')
                },
                {
                    path: 'button',
                    component: () => import('@/views/doc/Button.vue')
                },
                {
                    path: 'dialog',
                    component: () => import('@/views/doc/Dialog.vue')
                },
                {
                    path: 'tabs',
                    component: () => import('@/views/doc/Tabs.vue')
                }
            ]
        },
        {
            path: '/:pathMatch(.*)*',
            component: () => import('@/views/404.vue')
        }
    ]
})
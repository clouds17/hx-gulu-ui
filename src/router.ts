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
                    component: () => import('@/views/doc/DocPage.vue')
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
                }
            ]
        },
        {
            path: '/:pathMatch(.*)*',
            component: () => import('@/views/404.vue')
        }
    ]
})
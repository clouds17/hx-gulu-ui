import { createApp, h } from "vue"
import Dialog from '@/lib/Dialog.vue';

export const openDialog = (options) => {
    const { 
        title, 
        mainText, 
        submit = () => { return true }, 
        cancel = () => { return true }, 
        closeOnClickOverlay, 
        width, 
        submitText, 
        cancelText 
    } = options

    const div = document.createElement('div')
    document.body.appendChild(div)
    const app = createApp({
        render() {
            return h(Dialog, {
                modelValue: true,
                title,
                mainText,
                submit,
                cancel,
                width,
                submitText,
                cancelText,
                closeOnClickOverlay,
                'onUpdate:modelValue': (newValue) => {
                    console.log('newValue', newValue)
                    if (newValue === false) {
                        app.unmount()
                        div.remove()
                    }
                }
            })
        }
    })
    app.mount(div)
}
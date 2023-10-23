import { createApp } from "vue";
import hxMessageBox from "./module.vue"

const hxMessageBoxDom = (options = {}) => {
    

    // 创建弹窗元素节点
    const rootNode:HTMLElement = document.createElement('div')
    rootNode.className = `hx-message__dialog`
    document.body.appendChild(rootNode)

    // 创建遮罩层
    let overlayNode = createOverlay(rootNode);
    function createOverlay(rootNode) {
        const overlayNode:HTMLElement = document.createElement('div')
        overlayNode.classList.add('hx-message__overlay')
        rootNode.appendChild(overlayNode)
        setTimeout(() => {
            overlayNode.classList.add('hx-message__box-overlay-show-to')
        }, 100)
        return overlayNode
    }

    const hide = function() {
        // 显示移出动画
        overlayNode.classList.add('hx-message__box-overlay-leave-to');

         // 卸载已挂载的应用实例
         setTimeout(() => {
            app.unmount();
            document.body.contains(rootNode) && document.body.removeChild(rootNode);
        }, 500);
    }

    // 创建应用实例（第一个参数是根组件。第二个参数可选，它是要传递给根组件的 props）
    const app = createApp(hxMessageBox, {
        ...options,
        hide,
        overlayNode
    });

    // 将应用实例挂载到创建的 DOM 元素上
    return app.mount(overlayNode);
}

/**
 * @description: 显示弹窗
 * @return {*}
 * @param {*} options
 */
const showHxMessageBoxDom = (options = {}) => {
    return new Promise<void>((resolve, reject) => {
        options['successPromise'] = () => {
            resolve();
        };
        options['cancelPromise'] = () => {
            reject();
        };
        const popres: any = hxMessageBoxDom(options);
        popres.show();
    });
};

// 注册插件app.use()会自动执行install函数
hxMessageBoxDom.install = app => {
    // 注册全局属性，类似于 Vue2 的 Vue.prototype
    app.config.globalProperties.$hxMessageBox = options => showHxMessageBoxDom(options);
};
// 定义confirm方法用于直接调用
hxMessageBoxDom.confirm = options => showHxMessageBoxDom(options);

export default hxMessageBoxDom;
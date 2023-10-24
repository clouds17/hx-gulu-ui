## 开始使用

请先 [安装](#/doc/install) 本组件库。

然后在你的代码中引入要使用的组件

```vue
import {
    HxButton,
    HxSwitch,
    HxDialog,
    openDialog,
    HxTabs,
    HxTab,
    HxCascader,
    CascaderPanel,
    HxContainer,
    HxHeader,
    HxMain,
    HxFooter,
    HxAside,
    HxMessageBox
} from 'hx-gulu-ui'
```

在main.js中引入样式文件
```vue
import 'hx-gulu-ui/dist/lib/hxui.css'
```

就可以使用我提供的组件了。

## Vue 单文件组件

代码示例:

```vue
<template>
    <div>
        <hx-button>按钮</hx-button>
        <hr />
        <hx-switch></hx-switch>
    </div>
</template>
<script setup>
    import { HxButton, HxSwitch } from "hx-gulu-ui"
</script>
```
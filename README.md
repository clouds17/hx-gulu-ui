# hx-ui

HX UI 是一款基于 Vue 3 和 TypeScript 的 UI 组件库。



## 安装

打开终端运行下列命令：

```
npm install hx-gulu-ui
```

或

```
yarn add hx-gulu-ui
```



## 开始使用

安装完后在你的代码中引入要使用的组件

```vue
<script setup>
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
</script>
```

在main.js中引入样式文件

```vue
import 'hx-gulu-ui/dist/lib/hxui.css'
```

就可以开始使用了

**代码示例:**

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



## Switch开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。

### 基本用法

绑定 `v-model` 到一个 `Boolean` 类型的变量。 可以使用 `--el-switch-on-color` 属性与 `--el-switch-off-color` 属性来设置开关的背景色

```vue
<template>
  <hx-switch v-model="value1" />
  <hx-switch
    v-model="value2"
    class="ml-2"
    style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
  />
</template>

<script lang="ts" setup>
import { HxSwitch } from 'hx-gulu-ui';
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(true)
</script>
```



### 尺寸

- size: switch 的大小
  -  'large' | 'default' | 'small'

```vue
<template>
  <hx-switch
    v-model="value"
    size="large"
  />
  <br />
  <hx-switch v-model="value" />
  <br />
  <hx-switch
    v-model="value"
    size="small"
  />
</template>

<script lang="ts" setup>
import { HxSwitch } from 'hx-gulu-ui';
import { ref } from 'vue'

const value = ref(true)
</script>
```



### 文字描述

使用`active-text`属性与`inactive-text`属性来设置开关的文字描述。 使用 `inline-prompt` 属性来控制文本是否显示在点内。

使用`active-text`属性与`inactive-text`属性来设置开关的文字描述

```vue
<template>
  <hx-switch
    v-model="value1"
    class="mb-2"
    active-text="Pay by month"
    inactive-text="Pay by year"
  />
  <br />
  <hx-switch
    v-model="value2"
    class="mb-2"
    style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
    active-text="Pay by month"
    inactive-text="Pay by year"
  />
  <br />
  <hx-switch
    v-model="value3"
    inline-prompt
    active-text="是"
    inactive-text="否"
  />
  <hx-switch
    v-model="value4"
    class="ml-2"
    inline-prompt
    style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
    active-text="Y"
    inactive-text="N"
  />
  <hx-switch
    v-model="value6"
    class="ml-2"
    width="60"
    inline-prompt
    active-text="超出省略"
    inactive-text="超出省略"
  />
  <hx-switch
    v-model="value5"
    class="ml-2"
    inline-prompt
    style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
    active-text="完整展示多个内容"
    inactive-text="多个内容"
  />
</template>

<script lang="ts" setup>
import { HxSwitch } from 'hx-gulu-ui';
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(true)
const value3 = ref(true)
const value4 = ref(true)
const value5 = ref(true)
const value6 = ref(true)
</script>
```



### 禁用状态

设置`disabled`属性，接受一个`Boolean`，设置`true`即可禁用。

```vue
<template>
  <hx-switch v-model="value1" disabled />
  <hx-switch v-model="value2" class="ml-2" />
</template>

<script lang="ts" setup>
import { HxSwitch } from 'hx-gulu-ui';
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(true)
</script>
```





## Button 按钮

常用的操作按钮。

### 基本用法

#### 尺寸  size

```vue
//  large | normal | small
<template>
    <div>
        <hx-button size='large' >large</hx-button>
        <hx-button>normal</hx-button>
        <hx-button size='small'>small</hx-button>
    </div>
</template>

```

#### 颜色等级  level

```vue
// 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger'
<template>
	<div>
		<hx-button level="default" >default</hx-button>
        <hx-button level="primary">primary</hx-button>
        <hx-button level="success" >success</hx-button>
        <hx-button level="info" >info</hx-button>
        <hx-button level="warning" >warning</hx-button>
        <hx-button level="danger"  >danger</hx-button>
	</div>
</template>
```



#### 是否空心  plain

```vue
<template>
	<div>
		<hx-button plain level="default" >default</hx-button>
        <hx-button plain level="primary">primary</hx-button>
        <hx-button plain level="success" >success</hx-button>
        <hx-button plain level="info" >info</hx-button>
        <hx-button plain level="warning" >warning</hx-button>
        <hx-button plain level="danger"  >danger</hx-button>
	</div>
</template>
```

#### 是否圆角 round

```vue
<template>
	<div>
		<hx-button round plain level="default" >default</hx-button>
        <hx-button round plain level="primary">primary</hx-button>
        <hx-button round plain level="success" >success</hx-button>
        <hx-button round plain level="info" >info</hx-button>
        <hx-button round plain level="warning" >warning</hx-button>
        <hx-button round plain level="danger"  >danger</hx-button>
	</div>
</template>
```



### 类型

theme： button | link | text

```vue
<template>
	<div>
		<hx-button level="default" >default</hx-button>
        <hx-button theme="button" level="primary">primary</hx-button>
        <hx-button theme="link " level="success" >success</hx-button>
        <hx-button theme="link " level="info" >info</hx-button>
        <hx-button theme="text" level="warning" >warning</hx-button>
        <hx-button theme="text" level="danger"  >danger</hx-button>
	</div>
</template>
```



### 禁用

disabled

```vue
<template>
	<div>
		<hx-button disabled level="default" >default</hx-button>
        <hx-button disabled theme="button" level="primary">primary</hx-button>
        <hx-button disabled theme="link " level="success" >success</hx-button>
        <hx-button disabled theme="link " level="info" >info</hx-button>
        <hx-button disabled theme="text" level="warning" >warning</hx-button>
        <Buthx-buttonton disabled theme="text" level="danger"  >danger</hx-button>
	</div>
</template>
```



### 加载中

loading

```vue
<template>
	<div>
		<hx-button loading level="default" >default</hx-button>
        <hx-button loading theme="button" level="primary">primary</hx-button>
        <hx-button loading theme="link " level="success" >success</hx-button>
        <hx-button loading theme="link " level="info" >info</hx-button>
        <hx-button loading theme="text" level="warning" >warning</hx-button>
        <hx-button loading theme="text" level="danger"  >danger</hx-button>
	</div>
</template>
```



## Dialog弹框

### 基础用法

Dialog 弹出一个对话框，适合需要定制性更大的场景。

需要设置 `model-value / v-model` 属性，它接收 `Boolean`，当为 `true` 时显示 Dialog。

`title` 属性设置弹框标题。

 `width` 属性设置弹框大小。

`submit-text` 属性设置确认按钮的文字

`cancel-text` 属性设置取消按钮的文字

`@onSubmit`事件是点击确认事件

`@onCancel` 事件是点击取消事件

```vue
<template>
  <hx-dialog 
    v-model="visible" 
    title="小黄的title"
    width="600px"
    submit-text="肯定"
    cancel-text="否定"
    @onSubmit="onSubmit"
    @onCancel="onCancel"
  >
            <p>内容一</p>
            <p>内容二</p>
            
   </hx-dialog>
</template>
<script setup lang="ts">
    import { HxDialog } from 'hx-gulu-ui';
	const visible = ref(false)
</script>
```



### 自定义头部和底部

设置了`title`具名插槽 和 `footer` 具名插槽，可以自定义头部和底部

```vue
<template>
   <hx-dialog 
       v-model="visible" 
   >
        <template #title>
            <h1>我加的标题</h1>
        </template>
        <p>内容一</p>
        <p>内容二</p>
		<template #footer>
        	<Button level="primary" @click="">我点确定</Button>
        	<Button plain @click="">我点取消</Button>
        </template>
   </hx-dialog>
</template>
<script setup lang="ts">
    import { HxDialog } from 'hx-gulu-ui';
	const visible = ref(false)
</script>
```



### 点击空白部分是否关闭弹框

属性 `close-on-click-overlay` 默认 `true`

 ```vue
<template>
   <hx-dialog 
       v-model="visible" 
       :close-on-click-overlay = "false"
   >
        <p>内容一</p>
        <p>内容二</p>
   </hx-dialog>
</template>
<script setup lang="ts">
    import { HxDialog } from 'hx-gulu-ui';
	const visible = ref(false)
</script>
 ```



### 关闭之前得函数

属性 `beforeClose` 是一个函数, return false 时 不会关闭弹框

```vue
<template>
   <hx-dialog 
       v-model="visible" 
       :close-on-click-overlay = "false"
       :beforeClose = "onBeforeClose"
   >
        <p>内容一</p>
        <p>内容二</p>
   </hx-dialog>
</template>
<script setup lang="ts">
    import { HxDialog } from 'hx-gulu-ui';
	const visible = ref(false)
	const onBeforeClose = () => {
		// 可以进行验证啥的，返回值不是false时， 函数执行完关闭弹框
		// 返回值 是 false时，不关闭弹框
		return false
	}
</script>
```



### 一句代码打开 Dialog

类似 ElMessageBox 消息弹框

```vue
<template>
    <div>
        <Button @click="open">按钮</Button>
    </div>
</template>

<script setup lang="ts">

import { openDialog, HxButton } from 'hx-gulu-ui';

const open = () => {
    openDialog({
        title: '我定义的标题',
        mainText: '我定义的内容',
        width: '40%',
        submitText: '同意',
        cancelText: '拒绝',
        closeOnClickOverlay: false,
        submit: () => {
            console.log('submit')
        },
        cancel: () => {
            console.log('cancel')
        }
    })
}

</script>

```



## Tabs 标签页

分隔内容上有关联但属于不同类别的数据集合。

### 基础用法

基础的、简洁的标签页。

Tabs 组件提供了选项卡功能，可以通过 `value` 属性来指定当前选中的标签页。

```vue
<template>
    <div>
        <hx-tabs v-model="activeTab">
            <hx-tab title="tab1">内容1</hx-tab>
            <hx-tab title="tab2222">内容2</hx-tab>
            <hx-tab title="tab3">内容3</hx-tab>
            <hx-tab title="tab4">内容4</hx-tab>
        </hx-tabs>
    </div>
</template>

<script setup>
import { HxTabs, HxTab } from 'hx-gulu-ui';
import { ref } from 'vue';
const activeTab = ref('tab22222')

</script>

```



### 卡片风格的标签

你可以设置具有卡片风格的标签。

只需要设置 `type` 属性为 `card` 就可以使选项卡改变为标签风格。

```vue
<template>
    <div>
        <Tabs v-model="activeTab" type="card">
            <Tab title="tab1">内容1</Tab>
            <Tab title="tab2222">内容2</Tab>
            <Tab title="tab3">内容3</Tab>
            <Tab title="tab4">内容4</Tab>
        </Tabs>
    </div>
</template>

<script setup>
import { HxTabs, HxTab } from 'hx-gulu-ui';
import { ref } from 'vue';

const activeTab = ref('tab1')

</script>
```



### 标签位置的设置

可以通过 `tab-position` 设置标签的位置

标签一共有四个方向的设置 `tab-position = "left|right|top|bottom"`

```vue
<template>
    <div>
        <div style="padding-bottom: 30px">
            <hx-button @click="changeDirection('top')">top</hx-button>
            <hx-button @click="changeDirection('right')">right</hx-button>
            <hx-button @click="changeDirection('bottom')">bottom</hx-button>
            <hx-button @click="changeDirection('left')">left</hx-button>
        </div>
        <hx-tabs v-model="activeTab" :tab-position="tabPosition" >
            <hx-tab title="tab1">内容1</hx-tab>
            <hx-tab title="tab2222">内容2</hx-tab>
            <hx-tab title="tab3">内容3</hx-tab>
            <hx-tab title="tab4">内容4</hx-tab>
        </hx-tabs>
    </div>
</template>

<script setup>
import { HxTabs, HxTab, HxButton } from 'hx-gulu-ui';
import { ref } from 'vue';

const activeTab = ref('tab1')
const tabPosition = ref('top')

const changeDirection = (direction) => {
    tabPosition.value = direction
}

</script>
```





## MessageBox 消息提示框

默认会返回一个`Promise`对象便于进行后续操作的处理。

### 基础用法

```vue
<template>
    <div>
        <hx-button @click="open">点击</hx-button>
    </div>
</template>

<script setup lang="ts">
import { HxButton, HxMessageBox } from 'hx-gulu-ui';
const open = () => {
    HxMessageBox.confirm({
        content: '消息内容',
        successText: '确定',
        cancelText: '取消',
        headerText: '头部标题',
    })
    .then(() => {
      console.log('success')
    })
    .catch(() => {
      console.log('cancel')
    })
}
</script>

```



## cascader 级联选择器

### 基础用法

```vue
<template>
    <hx-cascader 
        v-model="value"
        :options="options"
    ></hx-cascader>
</template>
  
<script lang="ts" setup>
  import { HxCascader } from 'hx-gulu-ui';
  import { ref } from 'vue'
  
  const value = ref([])

  const options = [
    {
      value: 'guide',
      label: 'Guide',
      children: [
        {
          value: 'disciplines',
          label: 'Disciplines',
          children: [
            {
              value: 'consistency',
              label: 'Consistency',
            },
            {
              value: 'feedback',
              label: 'Feedback',
            },
            {
              value: 'efficiency',
              label: 'Efficiency',
            },
            {
              value: 'controllability',
              label: 'Controllability',
            },
          ],
        },
        {
          value: 'navigation',
          label: 'Navigation',
          children: [
            {
              value: 'side nav',
              label: 'Side Navigation',
            },
            {
              value: 'top nav',
              label: 'Top Navigation',
            },
          ],
        },
      ],
    },
    {
      value: 'component',
      label: 'Component',
      children: [
        {
          value: 'basic',
          label: 'Basic',
          children: [
            {
              value: 'layout',
              label: 'Layout',
            },
            {
              value: 'color',
              label: 'Color',
            },
            {
              value: 'typography',
              label: 'Typography',
            },
            {
              value: 'icon',
              label: 'Icon',
            },
            {
              value: 'button',
              label: 'Button',
            },
          ],
        },
        {
          value: 'form',
          label: 'Form',
          children: [
            {
              value: 'radio',
              label: 'Radio',
            },
            {
              value: 'checkbox',
              label: 'Checkbox',
            },
            {
              value: 'input',
              label: 'Input',
            },
            {
              value: 'input-number',
              label: 'InputNumber',
            },
            {
              value: 'select',
              label: 'Select',
            },
            {
              value: 'cascader',
              label: 'Cascader',
            },
            {
              value: 'switch',
              label: 'Switch',
            },
            {
              value: 'slider',
              label: 'Slider',
            },
            {
              value: 'time-picker',
              label: 'TimePicker',
            },
            {
              value: 'date-picker',
              label: 'DatePicker',
            },
            {
              value: 'datetime-picker',
              label: 'DateTimePicker',
            },
            {
              value: 'upload',
              label: 'Upload',
            },
            {
              value: 'rate',
              label: 'Rate',
            },
            {
              value: 'form',
              label: 'Form',
            },
          ],
        },
        {
          value: 'data',
          label: 'Data',
          children: [
            {
              value: 'table',
              label: 'Table',
            },
            {
              value: 'tag',
              label: 'Tag',
            },
            {
              value: 'progress',
              label: 'Progress',
            },
            {
              value: 'tree',
              label: 'Tree',
            },
            {
              value: 'pagination',
              label: 'Pagination',
            },
            {
              value: 'badge',
              label: 'Badge',
            },
          ],
        },
        {
          value: 'notice',
          label: 'Notice',
          children: [
            {
              value: 'alert',
              label: 'Alert',
            },
            {
              value: 'loading',
              label: 'Loading',
            },
            {
              value: 'message',
              label: 'Message',
            },
            {
              value: 'message-box',
              label: 'MessageBox',
            },
            {
              value: 'notification',
              label: 'Notification',
            },
          ],
        },
        {
          value: 'navigation',
          label: 'Navigation',
          children: [
            {
              value: 'menu',
              label: 'Menu',
            },
            {
              value: 'tabs',
              label: 'Tabs',
            },
            {
              value: 'breadcrumb',
              label: 'Breadcrumb',
            },
            {
              value: 'dropdown',
              label: 'Dropdown',
            },
            {
              value: 'steps',
              label: 'Steps',
            },
          ],
        },
        {
          value: 'others',
          label: 'Others',
          children: [
            {
              value: 'dialog',
              label: 'Dialog',
            },
            {
              value: 'tooltip',
              label: 'Tooltip',
            },
            {
              value: 'popover',
              label: 'Popover',
            },
            {
              value: 'card',
              label: 'Card',
            },
            {
              value: 'carousel',
              label: 'Carousel',
            },
            {
              value: 'collapse',
              label: 'Collapse',
            },
          ],
        },
      ],
    },
    {
      value: 'resource',
      label: 'Resource',
      children: [
        {
          value: 'axure',
          label: 'Axure Components',
        },
        {
          value: 'sketch',
          label: 'Sketch Templates',
        },
        {
          value: 'docs',
          label: 'Design Documentation',
        },
      ],
    },
  ]
  </script>
```





### 弹窗类型

```vue
<template>
    <div>
        <hx-button @click="open">default</hx-button>
        <hx-button @click="open2">confirm</hx-button>
    </div>
</template>

<script setup lang="ts">
import { HxButton, HxMessageBox } from 'hx-gulu-ui';
const open = () => {
    HxMessageBox.confirm({
        content: 'default弹框',
        successText: '确定',
        cancelText: '取消',
        headerText: '头部标题',
        type: 'default'
    })
    .then(() => {
      console.log('success')
    })
    .catch(() => {
      console.log('cancel')
    })
}
const open2 = () => {
    HxMessageBox.confirm({
        content: 'confirm 弹框',
        successText: '确定',
        headerText: '头部标题',
        type: 'comfirm'
    })
    .then(() => {
      console.log('success')
    })
}
</script>

```



### 点击遮罩层关闭

```vue
<template>
    <div>
        <hx-button @click="open">点击</hx-button>
    </div>
</template>

<script setup lang="ts">
import { HxButton, HxMessageBox } from 'hx-gulu-ui';
const open = () => {
    HxMessageBox.confirm({
        content: '点击遮罩层可以关闭',
        successText: '确定',
        cancelText: '取消',
        headerText: '头部标题',
        closeByOverlay: true
    })
    .then(() => {
      console.log('success')
    })
    .catch(() => {
      console.log('cancel')
    })
}
</script>

```


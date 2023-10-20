# hx-gulu-ui

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Switch开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。

### 基本用法

绑定 `v-model` 到一个 `Boolean` 类型的变量。 可以使用 `--el-switch-on-color` 属性与 `--el-switch-off-color` 属性来设置开关的背景色

```vue
<template>
  <Switch v-model="value1" />
  <Switch
    v-model="value2"
    class="ml-2"
    style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
  />
</template>

<script lang="ts" setup>
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
  <Switch
    v-model="value"
    size="large"
  />
  <br />
  <Switch v-model="value" />
  <br />
  <Switch
    v-model="value"
    size="small"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(true)
</script>
```



### 文字描述

使用`active-text`属性与`inactive-text`属性来设置开关的文字描述。 使用 `inline-prompt` 属性来控制文本是否显示在点内。

使用`active-text`属性与`inactive-text`属性来设置开关的文字描述

```vue
<template>
  <Switch
    v-model="value1"
    class="mb-2"
    active-text="Pay by month"
    inactive-text="Pay by year"
  />
  <br />
  <Switch
    v-model="value2"
    class="mb-2"
    style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
    active-text="Pay by month"
    inactive-text="Pay by year"
  />
  <br />
  <Switch
    v-model="value3"
    inline-prompt
    active-text="是"
    inactive-text="否"
  />
  <Switch
    v-model="value4"
    class="ml-2"
    inline-prompt
    style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
    active-text="Y"
    inactive-text="N"
  />
  <Switch
    v-model="value6"
    class="ml-2"
    width="60"
    inline-prompt
    active-text="超出省略"
    inactive-text="超出省略"
  />
  <Switch
    v-model="value5"
    class="ml-2"
    inline-prompt
    style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
    active-text="完整展示多个内容"
    inactive-text="多个内容"
  />
</template>

<script lang="ts" setup>
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
  <Switch v-model="value1" disabled />
  <Switch v-model="value2" class="ml-2" />
</template>

<script lang="ts" setup>
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
        <Button size='large' >large</Button>
        <Button>normal</Button>
        <Button size='small'>small</Button>
    </div>
</template>

```

#### 颜色等级  level

```vue
// 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger'
<template>
	<div>
		<Button level="default" >default</Button>
        <Button level="primary">primary</Button>
        <Button level="success" >success</Button>
        <Button level="info" >info</Button>
        <Button level="warning" >warning</Button>
        <Button level="danger"  >danger</Button>
	</div>
</template>
```



#### 是否空心  plain

```vue
<template>
	<div>
		<Button plain level="default" >default</Button>
        <Button plain level="primary">primary</Button>
        <Button plain level="success" >success</Button>
        <Button plain level="info" >info</Button>
        <Button plain level="warning" >warning</Button>
        <Button plain level="danger"  >danger</Button>
	</div>
</template>
```

#### 是否圆角 round

```vue
<template>
	<div>
		<Button round plain level="default" >default</Button>
        <Button round plain level="primary">primary</Button>
        <Button round plain level="success" >success</Button>
        <Button round plain level="info" >info</Button>
        <Button round plain level="warning" >warning</Button>
        <Button round plain level="danger"  >danger</Button>
	</div>
</template>
```



### 类型

theme： button | link | text

```vue
<template>
	<div>
		<Button level="default" >default</Button>
        <Button theme="button" level="primary">primary</Button>
        <Button theme="link " level="success" >success</Button>
        <Button theme="link " level="info" >info</Button>
        <Button theme="text" level="warning" >warning</Button>
        <Button theme="text" level="danger"  >danger</Button>
	</div>
</template>
```



### 禁用

disabled

```vue
<template>
	<div>
		<Button disabled level="default" >default</Button>
        <Button disabled theme="button" level="primary">primary</Button>
        <Button disabled theme="link " level="success" >success</Button>
        <Button disabled theme="link " level="info" >info</Button>
        <Button disabled theme="text" level="warning" >warning</Button>
        <Button disabled theme="text" level="danger"  >danger</Button>
	</div>
</template>
```



### 加载中

loading

```vue
<template>
	<div>
		<Button loading level="default" >default</Button>
        <Button loading theme="button" level="primary">primary</Button>
        <Button loading theme="link " level="success" >success</Button>
        <Button loading theme="link " level="info" >info</Button>
        <Button loading theme="text" level="warning" >warning</Button>
        <Button loading theme="text" level="danger"  >danger</Button>
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
  <DialogVue 
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
            
   </DialogVue>
</template>
<script setup lang="ts">
	const visible = ref(false)
</script>
```



### 自定义头部和底部

设置了`title`具名插槽 和 `footer` 具名插槽，可以自定义头部和底部

```
<template>
   <DialogVue 
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
   </DialogVue>
</template>
<script setup lang="ts">
	const visible = ref(false)
</script>
```



### 点击空白部分是否关闭弹框

属性 `close-on-click-overlay` 默认 `true`

 ```
<template>
   <DialogVue 
       v-model="visible" 
       :close-on-click-overlay = "false"
   >
        <p>内容一</p>
        <p>内容二</p>
   </DialogVue>
</template>
<script setup lang="ts">
	const visible = ref(false)
</script>
 ```



### 关闭之前得函数

属性 `beforeClose` 是一个函数, return false 时 不会关闭弹框

```
<template>
   <DialogVue 
       v-model="visible" 
       :close-on-click-overlay = "false"
       :beforeClose = "onBeforeClose"
   >
        <p>内容一</p>
        <p>内容二</p>
   </DialogVue>
</template>
<script setup lang="ts">
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

```
<template>
    <div>
        <Button @click="open">按钮</Button>
    </div>
</template>

<script setup lang="ts">

import { openDialog } from '@/lib/openDialog.ts';

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
        <Tabs v-model="activeTab">
            <Tab title="tab1">内容1</Tab>
            <Tab title="tab22222">内容2</Tab>
        </Tabs>
    </div>
</template>

<script setup>
import Tabs from '@/lib/Tabs.vue';
import Tab from '@/lib/Tab.vue';
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
import Tabs from '@/lib/Tabs.vue';
import Tab from '@/lib/Tab.vue';
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
            <Button @click="changeDirection('top')">top</Button>
            <Button @click="changeDirection('right')">right</Button>
            <Button @click="changeDirection('bottom')">bottom</Button>
            <Button @click="changeDirection('left')">left</Button>
        </div>
        <Tabs v-model="activeTab" :tab-position="tabPosition" >
            <Tab title="tab1">内容1</Tab>
            <Tab title="tab2222">内容2</Tab>
            <Tab title="tab3">内容3</Tab>
            <Tab title="tab4">内容4</Tab>
        </Tabs>
    </div>
</template>

<script setup>
import Tabs from '@/lib/Tabs.vue';
import Tab from '@/lib/Tab.vue';
import { ref } from 'vue';
import Button from '@/lib/Button.vue';

const activeTab = ref('tab1')
const tabPosition = ref('top')

const changeDirection = (direction) => {
    tabPosition.value = direction
}

</script>
```


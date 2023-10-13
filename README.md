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
  <Switch v-model="value" 
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


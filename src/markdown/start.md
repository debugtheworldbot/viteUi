# 开始使用
请先[安装](#/doc/install)本组件库。

然后在你的代码中写入下面的代码

```
import {Button, Tabs, Switches, Dialogs} from "cz-ui-v"
```

就可以使用我提供的组件了。

## Vue 单文件组件

代码示例：

```
<template>
  <div>
    <Buttons>按钮</Buttons>
  </div>
</template>
<script>
import {Buttons,Switches,Dialogs,openDialog,Tabs,TabComponent} from 'cz-ui-v'
import 'cz-ui-v/dist/lib/CzUi.css'
export default {
  components: {Buttons}
}
</script>
```
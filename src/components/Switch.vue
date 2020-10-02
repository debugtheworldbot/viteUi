<template>
  <div>
    <h1>Switch 组件示例 </h1>
    <div class="demo">
      <h2>常规用法</h2>
      <div class="demo-component">
      <Switch1/>
      </div>
      <div class="demo-actions">
        <Buttons>查看代码</Buttons>
      </div>
      <div class="demo-code">
        <pre>{{Switch1Code}}</pre>
      </div>
    </div>
    <div class="demo">
      <h2>支持 disabled </h2>
      <div class="demo-component">
        <Switch2/>
      </div>
      <div class="demo-actions">
        <Buttons>查看代码</Buttons>
      </div>
      <div class="demo-code">
        <pre>{{Switch2Code}}</pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Switches from '../lib/Switches.vue'
import Buttons from '../lib/Buttons.vue'
import Switch1 from './Switch1.demo.vue'
import Switch2 from './Switch2.demo.vue'

import {
  ref
} from 'vue'

export default {
  components: {
    Switch1,
    Switches,
    Buttons,
    Switch2
  },
  setup() {
    const bool = ref(false)
    const Switch1Code=Switch1.__sourceCode
    const Switch2Code=Switch2.__sourceCode
    return {
      bool,
      Switch1Code,
      Switch2Code
    }
  }
}
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;

.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;

  >h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }

  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;

    >pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>
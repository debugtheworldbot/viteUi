<template>
  <button :class="{checked:value}" @click="changeStatus"><span></span></button>
</template>

<script lang="ts">
export default {
  name: "Switch",
  props: {
    value: Boolean
  },
  setup(props, context) {
    const changeStatus = () => {
      context.emit('update:value', !props.value)
    }
    return {changeStatus}
  }
}
</script>

<style lang="scss">

$h: 22px;
$h2: $h - 4px;
button {
  outline: none;
  height: $h;
  width: $h*2;
  border: none;
  background: #bfbfbf;
  border-radius: $h/2;
  position: relative;

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
    transition: all 0.25s;

  }

  &.checked {
    background: #1890ff;

    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }

  &:active {
    > span {
      width: $h2 + 4px;
    }
  }

  &.checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}


</style>
<template>
  <div>Button 示例</div>
  <h1>示例1</h1>
  <div>
    <Button>hello</Button>
    <Button theme="button">你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
  </div>
  <h1>示例2</h1>
  <div>
    <Button>默认</Button>
    <Button size="small">小按钮</Button>
    <Button size="normal">普通大小</Button>
    <Button size="big">大按钮</Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";

export default {
  components: { Button },
  setup() {
    const onClick = () => {
      alert("hello");
    };
    return { onClick };
  },
};
</script>

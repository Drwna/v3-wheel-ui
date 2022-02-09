<template>
  <h1>示例1</h1>
  <div class="example">
    <Button>hello</Button>
    <Button theme="button">hello</Button>
    <Button theme="link">hello</Button>
    <Button theme="text">hello</Button>
  </div>
  <h1>示例2</h1>
  <div>
    <div class="example">
      <Button size="big">大大大按钮</Button>
      <Button>默认按钮</Button>
      <Button size="small">小小小按钮</Button>
    </div>
    <div class="example">
      <Button theme="link" size="big">大大大按钮</Button>
      <Button theme="link">默认按钮</Button>
      <Button theme="link" size="small">小小小按钮</Button>
    </div>
    <div class="example">
      <Button size="big" theme="text">大大大按钮</Button>
      <Button theme="text">默认按钮</Button>
      <Button theme="text" size="small">小小小按钮</Button>
    </div>
  </div>
  <h1>示例3</h1>
  <div>
    <div class="example">
      <Button level="main">主要按钮</Button>
      <Button>普通按钮</Button>
      <Button level="danger">危险按钮</Button>
    </div>
    <div class="example">
      <Button theme="link" level="main">主要链接按钮</Button>
      <Button theme="link">普通链接按钮</Button>
      <Button theme="link" level="danger">危险链接按钮</Button>
    </div>
    <div class="example">
      <Button theme="text" level="main">主要文字按钮</Button>
      <Button theme="text">普通文字按钮</Button>
      <Button theme="text" level="danger">危险文字按钮</Button>
    </div>
    <h1>示例4</h1>
    <div class="example">
      <Button disabled>禁用按钮</Button>
      <Button theme="link" disabled>禁用链接按钮</Button>
      <Button theme="text" disabled>禁用按钮</Button>
    </div>
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
<style lang="scss" scoped>
.example {
  height: 80px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
</style>

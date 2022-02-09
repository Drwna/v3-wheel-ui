<template>
  <div>Button 示例</div>
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
  height: 90px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
</style>

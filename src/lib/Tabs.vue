<template>
  <div>
    Tabs 组件
  </div>
  <component :is="defaults[0]"/>
  <component :is="defaults[1]"/>
</template>

<script lang="ts">
import Tab from '../lib/Tab.vue';

export default {
  setup(props, context) {
    // 调试 检查子组件是否为 Tab 组件
    // console.log({...context.slots.default()[0]});
    // console.log({...context.slots.default()[1]});
    // const defaults = context.slots.default();
    // console.log(defaults[0].type === Tab);
    const defaults = context.slots.default();
    defaults.forEach(tag => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab');
      }
    });
    return {defaults};
  }
};
</script>

<style lang="scss" scoped>

</style>

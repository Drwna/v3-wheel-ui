<demo> 常规使用</demo>

<template>
  <Tabs v-model:selected="x">
    <Tab title="nav1">内容1</Tab>
    <Tab title="nav2">内容2</Tab>
    <Tab title="nav3">内容3</Tab>
    <Tab title="nav4">内容4</Tab>
  </Tabs>
</template>

<script lang="ts">
import {Tabs} from '../lib/index';
import {Tab} from '../lib/index';
import {ref} from 'vue';

export default {
  components: {Tabs, Tab},
  setup() {
    const x = ref('nav2');
    return {x};
  }
};
</script>

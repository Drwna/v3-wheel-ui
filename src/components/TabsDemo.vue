<template>
  <div>Tab 示例</div>
  <h1>示例1</h1>
  <Tabs>
    <Tab title="导航1">t内容1</Tab>
    <Tab title="导航2">t内容2</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue';
import Tab from '../lib/Tab.vue';

export default {
  components: {
    Tabs, Tab
  }

};

</script>

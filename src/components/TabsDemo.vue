<template>
  <h1>示例1</h1>
  <Demo :component="Tabs1Demo"/>
</template>

<script lang="ts">
import Demo from './Demo.vue';
import Tabs1Demo from './Tabs1.demo.vue';

export default {
  components: {Demo, Tabs1Demo},
  setup() {
    return {Demo, Tabs1Demo};
  }

};

</script>

<template>
  <article class="markdown-body" v-html="content">
  </article>
</template>

<script lang="ts">
export default {
  props: {
    content: {
      type: String,
      required: true
    }
  },
};
</script>
<style lang="scss" scoped>
.markdown-body { background: #f4f5f7; }
</style>

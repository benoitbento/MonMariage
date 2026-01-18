<template>
  <section :class="['container', 'page-section', customClass]">
    <slot />
  </section>
</template>

<script>
export default {
  name: 'PageContainer',
  props: {
    customClass: { type: String, default: '' }
  }
}
</script>

<style scoped>
/* minimal scoped styles — global layout lives in global.css */
</style>
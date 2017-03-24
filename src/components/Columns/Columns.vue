<template>
  <div class="columns" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      'is-mobile': Boolean,
      'is-desktop': Boolean,
      'is-multiline': Boolean,
      'is-gapless': Boolean,
    },

    computed: {
      classes() {
        return {
          'is-mobile': this.isMobile,
          'is-desktop': this.isDesktop,
          'is-multiline': this.isMultiline,
          'is-gapless': this.isGapless,
        }
      }
    }
  }
</script>

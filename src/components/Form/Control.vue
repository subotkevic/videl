<template>
  <p class="control" :class="classes">
    <slot></slot>
  </p>
</template>

<script>
  export default {
    props: {
      'has-icon': Boolean,
      'has-icon-right': Boolean,
      'is-loading': Boolean,
      'is-expanded': Boolean,
    },

    computed: {
      classes() {
        return {
          'has-icon': this.hasIcon,
          'has-icon-right': this.hasIconRight,
          'is-loading': this.isLoading,
          'is-expanded': this.isExpanded,
        }
      }
    }
  }
</script>

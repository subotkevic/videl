<template>
  <div class="content" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      'is-small': Boolean,
      'is-medium': Boolean,
      'is-large': Boolean,
    },

    computed: {
      classes() {
        return {
          'is-small': this.isSmall,
          'is-medium': this.isMedium,
          'is-large': this.isLarge,
        }
      }
    }
  }
</script>

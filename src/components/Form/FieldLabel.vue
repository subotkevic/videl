<template>
  <div class="field-label" :class="classes">
    <vd-label><slot></slot></vd-label>
  </div>
</template>

<script>
  export default {
    props: {
      'is-normal': Boolean,
      'is-small': Boolean,
      'is-medium': Boolean,
      'is-large': Boolean,
    },

    computed: {
      classes() {
        return {
          'is-normal': this.isNormal,
          'is-small': this.isSmall,
          'is-medium': this.isMedium,
          'is-large': this.isLarge,
        }
      }
    }
  }
</script>

<template>
  <input type="text" class="input" :class="classes">
</template>

<script>
  export default {
    props: {
      'is-white': Boolean,
      'is-light': Boolean,
      'is-dark': Boolean,
      'is-black': Boolean,
      'is-link': Boolean,
      'is-primary': Boolean,
      'is-info': Boolean,
      'is-success': Boolean,
      'is-warning': Boolean,
      'is-danger': Boolean,
      'is-small': Boolean,
      'is-medium': Boolean,
      'is-large': Boolean,
      'is-hovered': Boolean,
      'is-focused': Boolean,
    },

    computed: {
      classes() {
        return {
          'is-white': this.isWhite,
          'is-light': this.isLight,
          'is-dark': this.isDark,
          'is-black': this.isBlock,
          'is-link': this.isLink,
          'is-primary': this.isPrimary,
          'is-info': this.isInfo,
          'is-success': this.isSuccess,
          'is-warning': this.isWarning,
          'is-danger': this.isDanger,
          'is-small': this.isSmall,
          'is-medium': this.isMedium,
          'is-large': this.isLarge,
          'is-hovered': this.isHovered,
          'is-focused': this.isFocused,
        }
      }
    }
  }
</script>

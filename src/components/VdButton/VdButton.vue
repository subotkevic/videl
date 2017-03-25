<template>
  <button class="button" :class="classes" v-if="el == 'button'">
    <slot></slot>
  </button>

  <a class="button" :class="classes" v-else>
    <slot></slot>
  </a>
</template>

<script>
  export default {
    name: 'vd-button',

    data() {
      return {
      }
    },

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
      'is-outlined': Boolean,
      'is-inverted': Boolean,
      'is-hovered': Boolean,
      'is-focused': Boolean,
      'is-active': Boolean,
      'is-loading': Boolean,
      'is-disabled': Boolean,
      'el': {
        type: String,
        default: 'a',
      },
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
          'is-outlined': this.isOutlined,
          'is-inverted': this.isInverted,
          'is-hovered': this.isHovered,
          'is-focused': this.isFocused,
          'is-active': this.isActive,
          'is-loading': this.isLoading,
          'is-disabled': this.isDisabled,
        }
      }
    }
  }
</script>

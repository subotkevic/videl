<template>
  <div class="field" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      'has-addons': Boolean,
      'has-addons-centered': Boolean,
      'has-addons-right': Boolean,
      'is-grouped': Boolean,
      'is-horizontal': Boolean,
    },

    computed: {
      classes() {
        return {
          'has-addons': this.hasAddons,
          'has-addons-centered': this.hasAddonsCentered,
          'has-addons-right': this.hasAddonsRight,
          'is-grouped': this.isGrouped,
          'is-horizontal': this.isHorizontal,
        }
      }
    }
  }
</script>

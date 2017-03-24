<template>
  <div class="container" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      'is-fluid': Boolean,
    },

    computed: {
      classes() {
        return {
          'is-fluid': this.isFluid,
        }
      }
    }
  }
</script>

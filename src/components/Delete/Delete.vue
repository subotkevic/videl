<template>
  <button class="delete" :class="classes" v-if="el == 'button'"></button>
  <a class="delete" :class="classes" v-else></a>
</template>

<script>
  export default {
    props: {
      'is-small': Boolean,
      'is-medium': Boolean,
      'is-large': Boolean,
      'el': {
        type: String,
        default: 'a',
      },
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

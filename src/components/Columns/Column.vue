<template>
  <div class="column">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      'is-three-quarters': Boolean,
      'is-two-thirds': Boolean,
      'is-half': Boolean,
      'is-one-third': Boolean,
      'is-one-quarter': Boolean,
    }
  }
</script>

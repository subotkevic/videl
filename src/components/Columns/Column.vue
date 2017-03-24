<template>
  <div class="column" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    computed: {
      classes () {
        return {
          'is-three-quarters': this.isThreeQuarters,
          'is-two-thirds': this.isTwoThirds,
          'is-half': this.isHalf,
          'is-one-third': this.isOneThird,
          'is-one-quarter': this.isOneQuarter,
          'is-1': this.is1,
          'is-2': this.is2,
          'is-3': this.is3,
          'is-4': this.is4,
          'is-5': this.is5,
          'is-6': this.is6,
          'is-7': this.is7,
          'is-8': this.is8,
          'is-9': this.is9,
          'is-10': this.is10,
          'is-11': this.is11,
          'is-12': this.is12,
          'is-offset-three-quarters': this.isOffsetThreeQuarters,
          'is-offset-two-thirds': this.isOffsetTwoThirds,
          'is-offset-half': this.isOffsetHalf,
          'is-offset-one-third': this.isOffsetOneThird,
          'is-offset-one-quarter': this.isOffsetOneQuarter,
          'is-offset-1': this.isOffset1,
          'is-offset-2': this.isOffset2,
          'is-offset-3': this.isOffset3,
          'is-offset-4': this.isOffset4,
          'is-offset-5': this.isOffset5,
          'is-offset-6': this.isOffset6,
          'is-offset-7': this.isOffset7,
          'is-offset-8': this.isOffset8,
          'is-offset-9': this.isOffset9,
          'is-offset-10': this.isOffset10,
          'is-offset-11': this.isOffset11,
          'is-offset-12': this.isOffset12,
        }
      }
    },

    props: {
      'isThreeQuarters': Boolean,
      'isTwoThirds': Boolean,
      'isHalf': Boolean,
      'isOneThird': Boolean,
      'isOneQuarter': Boolean,
      'is1': Boolean,
      'is2': Boolean,
      'is3': Boolean,
      'is4': Boolean,
      'is5': Boolean,
      'is6': Boolean,
      'is7': Boolean,
      'is8': Boolean,
      'is9': Boolean,
      'is10': Boolean,
      'is11': Boolean,
      'is12': Boolean,
      'isOffsetThreeQuarters': Boolean,
      'isOffsetTwoThirds': Boolean,
      'isOffsetHalf': Boolean,
      'isOffsetOneThird': Boolean,
      'isOffsetOneQuarter': Boolean,
      'isOffset1': Boolean,
      'isOffset2': Boolean,
      'isOffset3': Boolean,
      'isOffset4': Boolean,
      'isOffset5': Boolean,
      'isOffset6': Boolean,
      'isOffset7': Boolean,
      'isOffset8': Boolean,
      'isOffset9': Boolean,
      'isOffset10': Boolean,
      'isOffset11': Boolean,
      'isOffset12': Boolean,
    },
  }
</script>

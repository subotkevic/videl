<template>
  <div class="column" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  let words = ['three-quarters', 'two-thirds', 'half', 'one-third', 'one-quarter'];

  let wordSizesCamel       = [];
  let wordOffsetSizesCamel = [];
  let wordSizesKebab       = [];
  let wordOffsetSizesKebab = [];
  let numSizesCamel        = [];
  let numSizesOffsetCamel  = [];
  let numSizesKebab        = [];
  let numSizesOffsetKebab  = [];
  let properties           = {};

  for (let word of words) {
    // Sizes
    let full = 'is-' + word;

    wordSizesKebab.push(full);
    wordSizesCamel.push(camelCase(full));

    Object.assign(properties, {
      [camelCase(full)]: Boolean,
    });

    // Offset sizes
    full = 'is-offset-' + word;

    wordOffsetSizesKebab.push(full);
    wordOffsetSizesCamel.push(camelCase(full));

    Object.assign(properties, {
      [camelCase(full)]: Boolean,
    });
  }

  for (let i = 1; i <= 12; i++) {
    numSizesCamel.push('is' + i);
    numSizesKebab.push('is-' + i);

    numSizesOffsetCamel.push(camelCase('is-offset') + i);
    numSizesOffsetKebab.push('is-offset-' + i);

    Object.assign(properties, {
      ['is' + i]: Boolean,
      ['is-offset' + i]: Boolean,
    });
  }

  function camelCase(string) {
    return string.replace(/(\-[a-z])/g, function($1){return $1.toUpperCase().replace('-','');});
  }

  export default {
    data() {
      return {
        sizingClasses: {},
      }
    },

    created() {
      for (let [index, word] of wordSizesCamel.entries()) {
        Object.assign(this.sizingClasses, {
          [wordSizesKebab[index]]: this[wordSizesCamel[index]],
          [wordOffsetSizesKebab[index]]: this[wordOffsetSizesCamel[index]],
        });
      }

      for (let [index, word] of numSizesCamel.entries()) {
        Object.assign(this.sizingClasses, {
          [numSizesKebab[index]]: this[numSizesCamel[index]],
          [numSizesOffsetKebab[index]]: this[numSizesOffsetCamel[index]],
        });
      }
    },

    computed: {
      classes () {
        let otherClasses = {

        };

        return Object.assign(this.sizingClasses, otherClasses);
      }
    },

    props: properties
  }
</script>

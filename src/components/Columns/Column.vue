<template>
  <div class="column" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  let sizeWords            = ['three-quarters', 'two-thirds', 'half', 'one-third', 'one-quarter'];
  let sizePrefixes         = ['is', 'is-offset'];
  let sizeSuffixes         = ['mobile', 'tablet', 'desktop'];
  let sizeNums             = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let wordSizesCamel       = [];
  let wordOffsetSizesCamel = [];
  let wordSizesKebab       = [];
  let wordOffsetSizesKebab = [];
  let numSizesCamel        = [];
  let numSizesOffsetCamel  = [];
  let numSizesKebab        = [];
  let numSizesOffsetKebab  = [];
  let properties           = {
    'is-narrow': Boolean,
    'is-narrow-mobile': Boolean,
    'is-narrow-tablet': Boolean,
    'is-narrow-desktop': Boolean,
  };
  let sizes      = [];
  let sizesCamel = [];

  // Word sizes
  for (let word of sizeWords) {
    generateSizes(word);
  }

  // Num sizes
  for (let num of sizeNums) {
    generateSizes(num);
  }

  function generateSizes(word) {
    for (let prefix of sizePrefixes) {
      let size = prefix + '-' + word;

      sizes.push(size);
      sizesCamel.push(camelCase(size));

      Object.assign(properties, {
        [size]: Boolean
      });

      // Suffixes
      for (let suffix of sizeSuffixes) {
        let sizeWithSuffix = size + '-' + suffix;

        sizes.push(sizeWithSuffix);
        sizesCamel.push(camelCase(sizeWithSuffix));

        Object.assign(properties, {
          [sizeWithSuffix]: Boolean
        });
      }
    }
  }

  function camelCase(string) {
    return string.replace(/(\-[a-z0-9])/g, function($1){return $1.toUpperCase().replace('-','');});
  }

  export default {
    data() {
      return {
        sizingClasses: {},
      }
    },

    created() {
      for (let [index, word] of sizes.entries()) {
        Object.assign(this.sizingClasses, {
          [sizes[index]]: this[sizesCamel[index]],
        });
      }
    },

    computed: {
      classes () {
        let classes = {
          'is-narrow': this.isNarrow,
          'is-narrow-mobile': this.isNarrowMobile,
          'is-narrow-tablet': this.isNarrowTablet,
          'is-narrow-desktop': this.isNarrowDesktop,
        };

        return Object.assign(this.sizingClasses, classes);
      }
    },

    props: properties
  }
</script>

<template>
  <div class="tile" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  let sizePrefixes         = ['is'];
  let sizeNums             = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let properties           = {
    'is-ancestor': Boolean,
    'is-parent': Boolean,
    'is-child': Boolean,
    'is-vertical': Boolean,
  };
  let sizes      = [];
  let sizesCamel = [];

  // Sizes
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
          'is-ancestor': this.isAncestor,
          'is-parent': this.isParent,
          'is-child': this.isChild,
          'is-vertical': this.isVertical,
        };

        return Object.assign(this.sizingClasses, classes);
      }
    },

    props: properties
  }
</script>

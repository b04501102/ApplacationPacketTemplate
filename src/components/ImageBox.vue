<template lang='pug'>
  .imageBox.container
    .row
      .image(:class='grid(images)' v-for='image, index in images')
        // Solution: https://github.com/vuejs-templates/webpack/issues/450
        img(:src='require(`@/assets/${image}`)' alt='')
        //- .description 圖 {{ index + 1 }}
</template>

<script>
export default {
  name: 'imagebox',
  props: {
    images: Array
  },
  methods: {
    grid: (value) => {
      switch(value.length) {
        case 1:
          return 'col-sm-12'
          break
        case 2:
          return 'col-sm-6'
          break
        default:
          return 'col-sm-4'
          break
      }
    },
    BGI: (value) => {
      return 'background-image: url(@/assets/' + value + ')'
    }
  }
}
</script>

<style lang='sass'>
  .imageBox > .row > .image
    display: flex
    align-items: center
    padding: 0
    img
      width: 100%
</style>

<template lang='pug'>
  .contentCard
    .subtitle {{ title }}
    .content(v-html='content')
    ImageBox(:images='images')
    .btn-group(role='group')
      button.btn(type='button' v-for='link in links' :class='isLightMode ? "btn-outline-main-dark text-light" : "btn-outline-main-light"')
        a(:href='link.address' :class='isLightMode ? "text-main-dark" : "text-main-light"' target='_blank') {{ link.name }}

</template>

<script>
import ImageBox from '@/components/ImageBox.vue'
import { mapState } from 'vuex'

export default {
  name: 'contentcard',
  props: {
    title: String,
    content: String,
    images: Array,
    links: Array
  },
  computed: {
    ...mapState(['isLightMode'])
  },
  components: {
    ImageBox,
  }
}
</script>

<style lang='sass'>
  .contentCard
    margin-top: 30px
    .subtitle
      font-size: 18px
      font-weight: 700
      padding: 5px
      text-align: center
    .content
      font-size: 16px
      text-align: justify
      margin-bottom: 10px
      display: flex
      flex-direction: column
      span
        text-indent: 30px
        margin-bottom: 10px
    .btn-group
      margin-top: 20px
      button:hover
        a
          color: #f8f9fa !important
</style>
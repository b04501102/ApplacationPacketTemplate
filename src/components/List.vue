<template lang='pug'>
  .list
    .title(:class='isLightMode ? "text-main-dark border-main-dark" : "text-main-light border-main-light"') {{ title }}
    ul
      li(v-for='value, key in items')
        font-awesome-icon(:icon="value[0]" size='lg')
        .text
          .subtitle {{ key }} ：
          a.content(:href='createLink(value, key)' :class='isLightMode ? "text-dark" : "text-light"') {{ value[1] }}


</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'list',
  props: {
    title: String,
    items: {
      String : [[String, String], String]
    }
  },
  computed: {
    ...mapState(['isLightMode'])
  },
  methods: {
    createLink: (value, key) => {
      switch(key) {
        case "電話":
          return "tel: " + value[1]
          break
        case "郵件":
          return "mailto: " + value[1]
          break
        default:
          return value[1]
          break
      }
    }
  }
}
</script>

<style lang='sass'>
  .list
    margin-top: 30px
    .title
      font-size: 20px
      font-weight: 900
      padding: 5px
      border-top: 2px solid #444
      border-bottom: 2px solid #444 
    ul
      list-style: none
      padding: 5px
      margin: 5px
      li
        text-align: left
        display: flex
        align-items: center
        .text
          margin: 10px
          .subtitle

          .content
            font-size: 14px
</style>
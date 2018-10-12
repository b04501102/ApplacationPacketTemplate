<template lang='pug'>
  .skillList
    .title(:class='isLightMode ? "text-main-dark border-main-dark" : "text-main-light border-main-light"') SKILL
    ul
      li(v-for='skill, index in skills')
        img.icon(:src='require(`@/assets/${skill.icon}`)' alt='')
        .text
          .skillName {{ skill.name }}
          span.solid.rounded-circle.border(v-for='i in skill.level' :class='isLightMode ? "border-dark" : "border-light"')
          span.strike.rounded-circle.border(v-for='i in 5 - skill.level' :class='isLightMode ? "border-dark" : "border-light"')
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'skilllist',
  props: {
    skills: Array
  },
  computed: {
    ...mapState(['isLightMode'])
  },
}
</script>

<style lang='sass'>

  .skillList
    margin-top: 30px
    width: 100%
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
        display: flex
        align-items: center
        .icon
          width: 48px
          filter: invert(30%)
        .text
          width: 100%
          margin: 10px 20px
          display: flex
          align-items: center
          flex-wrap: wrap
          justify-content: space-between
          .skillName
            width: 100%
            text-align: left
            margin: 5px 0
          .solid, .strike
            width: 20px
            height: 20px
          .solid:before
            content: ''
            display: inline-block
            width: 16px
            height: 16px
            background-color: #444
            border-radius: 50%
  // For Dark Mode
  .bg-dark ul
    li
      .icon
        filter: invert(90%)
      .text
        .solid:before
          background-color: #f8f9fa
          
</style>

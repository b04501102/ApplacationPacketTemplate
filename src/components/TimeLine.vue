// TODO: mobile RWD
<template lang='pug'>
  .timeLine.container
    .title(:class='isLightMode ? "text-main-dark border-main-dark" : "text-main-light border-main-light"') {{ title }}
    ul.row
      li.row.col-sm-12(v-for="value, key, index in events" :class="index%2==0 ? '' : 'left'")
        .time.col-sm-6 {{ value.time }}
        ContentCard.col-sm-6(:title='key' :content='value.content')

</template>

<script>
import ContentCard from '@/components/ContentCard.vue'
import { mapState } from 'vuex'

export default {
  name: 'timeline',
  props: {
    title: String,
    events: {
      String: {
        time: String,
        content: String,
      }
    }
  },
  computed: {
    ...mapState(['isLightMode'])
  },
  components: {
    ContentCard,
  }
}
</script>

<style lang='sass'>
@import '@/../node_modules/bootstrap/scss/bootstrap.scss'

.timeLine
  display: flex
  flex-direction: column
  align-items: center
  margin-top: 30px
  ul
    list-style: none
    padding: 5px
    margin: 5px
    width: 100%
    height: 100%
    position: relative
    &:before
      content: ''
      display: inline-block
      width: 2px
      height: 100%
      border: 1px solid #666
      border-style: dashed
      position: absolute
      right: 50%
      transform: translateX(50%)
    li
      // width: 100%
      text-align: left
      display: flex
      align-items: center
      justify-content: space-between
      margin: 10px 0
      .time
        text-align: right
        position: relative
        &:before
          content: ''
          display: block
          width: 10px
          height: 10px
          background-color: $main-dark
          border-radius: 50%
          position: absolute
          right: -10px
          top: 50%
          transform: translate(-50%, -50%)
    .left
      flex-direction: row-reverse
      .time
        text-align: left
        &:before
          left: 0
.timeLine > .title
  font-size: 20px
  font-weight: 900
  padding: 5px
  border-top: 2px solid #444
  border-bottom: 2px solid #444

// For Dark Mode
.bg-dark ul
  &:before
    border-color: $light
  li
    .time:before
      background-color: $main-light

// Media Query
@include media-breakpoint-down(xs)
  .timeLine 
    ul
      &:before
        content: none
      li, .left
        .time
          text-align: center
          &:before
            content: none
        .contentCard
          margin: 0
          .content
            text-align: center
.wow
  visibility: hidden
        
</style>
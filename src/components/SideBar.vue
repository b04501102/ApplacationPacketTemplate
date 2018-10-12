<template lang='pug'>
  .sideBar
    List(:items='{"電話": [["fas", "phone"], "0981352355"], "郵件": [["fas", "envelope"], "rainforestnick@gmail.com"], "LinkedIn": [["fab", "linkedin"], "https://www.linkedin.com/in/yulin-cheng-530b2911b"], "Codepen": [["fab", "codepen"], "https://codepen.io/rainforest80256/"]}' title="CONTACT")
    SkillList(:skills="skills")
    a(href='#' target='_blank' :class='isLightMode ? "text-main-dark border-main-dark" : "text-main-light border-main-light"') 備審網頁版 ↓
      //- ImageBox(grid='col-sm-12' :images='["WebsiteURL.png",]')
      img.websiteURL(alt='Personal Website', src='@/assets/DH80CMQWJB.png')
</template>

<script>
import List from '@/components/List.vue'
import SkillList from '@/components/SkillList.vue'
import { mapState } from 'vuex'

export default {
  name: 'sidebar',
  props: {
    skills: Array
  },
  computed: {
    ...mapState(['isLightMode'])
  },
  components: {
    List,
    SkillList
  }
}
</script>

<style lang='sass'>
.sideBar
  display: flex
  flex-direction: column
  align-items: center
.sideBar > a
  margin: 30px
  display: flex
  flex-direction: column
  img
    mix-blend-mode: multiply

.bg-dark
  a .websiteURL
    mix-blend-mode: screen
    filter: invert(100%)
</style>

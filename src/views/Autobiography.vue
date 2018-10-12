<template lang='pug'>
  .autobiography.container
    .title(:class='isLightMode ? "text-main-dark border-main-dark" : "text-main-light border-main-light"') 家庭背景與性格養成
    .content <span>Est aute sint pariatur est commodo consectetur officia aliqua dolore commodo ex. Magna veniam incididunt aute et quis velit magna tempor sint adipisicing eiusmod. Ad et ad sint Lorem dolore proident dolor. Mollit officia cupidatat Lorem dolor deserunt aliqua deserunt et ad quis reprehenderit. Fugiat ut dolor exercitation sint minim occaecat voluptate amet sunt do amet esse esse.</span>
    .title(:class='isLightMode ? "text-main-dark border-main-dark" : "text-main-light border-main-light"') 求學過程
    .content Eu in minim ullamco enim reprehenderit dolor duis nulla est dolor Lorem esse culpa. Nostrud occaecat eu enim adipisicing veniam excepteur consectetur elit id laborum pariatur. Laborum ea Lorem adipisicing consequat. Reprehenderit duis in elit dolore consequat adipisicing duis ut ea commodo.
    .row
      ContentCard.col-sm-6(v-for='course, key in courses' :title='key' :content='course.content' :images='course.images')

</template>

<script>
import ContentCard from '@/components/ContentCard.vue'
import { mapState } from 'vuex'

export default {
  name: 'autobiography',
  data: () => {
    return {
      courses: {
        "Fugiat aute minim incididunt elit velit sit fugiat minim.1": {
          content: "<span>Nisi ullamco ut consequat sit cupidatat duis. Consequat dolore nulla occaecat proident do ad. Mollit irure tempor enim laborum duis nulla excepteur ex quis. Esse cupidatat nulla occaecat culpa dolore minim Lorem ut eiusmod proident ullamco fugiat qui sunt. Veniam enim aute ut irure est minim enim ullamco magna culpa minim minim.</span>",
          images: ["Courses/VIE/VIE_Decision Support Visualization.jpg", "Courses/VIE/VIE_Interactive Presentation.jpg", "Courses/VIE/VIE_FinalProject.jpg"],
        },
        "Nulla tempor deserunt veniam do exercitation magna aute.2": {
          content: "<span>Labore ex fugiat reprehenderit amet aliqua officia reprehenderit dolor ad ex id ipsum. Esse ullamco cillum elit mollit enim cillum aliquip sit et reprehenderit incididunt sit labore. Mollit tempor enim nulla fugiat amet.</span>",
          images: ["Courses/ICG/ICG_FinalProject.jpg"]
        },
        "Minim reprehenderit qui adipisicing occaecat adipisicing aliquip sunt laboris.3": {
          content: "<span>Occaecat deserunt qui sunt enim veniam nostrud incididunt cupidatat elit nostrud quis. Aliquip commodo cupidatat cupidatat voluptate deserunt adipisicing anim. Id cupidatat pariatur consequat ullamco eiusmod enim exercitation incididunt cillum ad nisi.</span>"
        },
        "Lorem Lorem reprehenderit minim tempor dolore laboris in aliqua velit nulla irure eu.4": {
          content: "<span>Tempor consectetur labore ad id occaecat aute elit consectetur amet consectetur duis ea commodo. Excepteur labore exercitation consectetur quis. Mollit est excepteur pariatur adipisicing elit amet fugiat. Consectetur veniam quis irure quis sunt eu fugiat id eiusmod. Labore nostrud id quis anim. Sit ut magna aliqua excepteur cupidatat cupidatat anim ad dolor voluptate irure duis. Ipsum reprehenderit est duis excepteur exercitation ut officia laborum.</span>"
        },
        "Non enim occaecat in duis pariatur aute.": {
          content: "<span>Dolor quis aute non officia. Fugiat consequat enim sint mollit. Proident amet nostrud eiusmod ad esse magna dolore nisi velit voluptate ullamco mollit dolor anim.</span>",
        },
      },
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
  .autobiography
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
  .autobiography > .title
    font-size: 20px
    font-weight: 900
    padding: 5px
    display: inline-block
    border-top: 2px solid #444
    border-bottom: 2px solid #444
    margin: 20px 0px
    .content
      font-size: 16px
      text-align: justify
      margin-bottom: 10px
</style>

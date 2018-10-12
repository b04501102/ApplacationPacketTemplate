<template lang='pug'>
  .studyPlan.container
    .title(:class='isLightMode ? "text-main-dark border-main-dark" : "text-main-light border-main-light"') 讀書計畫
    .row
      ContentCard.col-sm-12(v-for='plan in studyplan' :title='plan.title' :content='plan.content')
</template>

<script>
import ContentCard from '@/components/ContentCard.vue'
import { mapState } from 'vuex'

export default {
  name: 'studyplan',
  data: () => {
    return {
      studyplan: [
        {
          title: "學術背景 & 申請動機",
          content: "<span>Ullamco elit excepteur labore elit in qui amet pariatur ad esse. Sunt pariatur eu nulla elit fugiat occaecat aute. Enim cillum magna officia consequat aliqua nulla. Magna veniam ullamco esse officia.Esse anim deserunt irure irure consectetur exercitation sunt. Anim voluptate consequat aute sit consequat pariatur quis laborum officia velit. Amet elit labore in cupidatat velit eu incididunt.In aliqua sint ipsum elit labore quis cupidatat proident duis in. Consectetur consequat eiusmod dolore minim commodo aliqua voluptate eu consequat eu. Aute mollit nisi deserunt incididunt officia nisi anim.Velit cupidatat quis enim est do veniam duis nulla aute adipisicing occaecat aliquip ipsum ullamco. Pariatur minim adipisicing dolore labore nostrud. Nisi ut cillum exercitation est id aliquip nisi voluptate veniam. Quis magna qui occaecat proident elit do ad cupidatat laborum occaecat tempor excepteur dolore. Tempor exercitation consectetur cillum ut fugiat adipisicing adipisicing eiusmod id laborum dolor et in.Esse et sint commodo excepteur amet exercitation anim. Sunt exercitation fugiat enim irure adipisicing officia aute voluptate magna mollit eu reprehenderit. Mollit est ut dolore eiusmod laborum duis veniam occaecat reprehenderit mollit aute anim anim nostrud. Ea velit voluptate magna ad consequat anim ea nostrud duis consequat cupidatat ad aliqua et. Nisi sit deserunt sit cupidatat aliqua sint esse.Cillum consequat quis qui amet velit pariatur sint. Do excepteur exercitation aliqua labore quis duis quis sit cupidatat quis exercitation cillum esse. Cupidatat cupidatat consequat irure officia veniam elit consectetur enim.Ad ullamco nulla nisi in aliquip consequat mollit est anim. Fugiat magna quis non proident. Fugiat magna eiusmod cupidatat nulla aliqua nostrud. Ipsum nostrud sint ex officia.Tempor proident excepteur eu aute amet. Sint irure amet amet tempor proident in mollit laborum voluptate. Lorem non irure qui reprehenderit in duis. Eu dolor exercitation aliquip aliquip quis est fugiat ut ad excepteur fugiat esse.Cupidatat aute mollit Lorem eu amet dolor adipisicing nulla culpa. Cupidatat amet nostrud commodo sint. Et nostrud quis mollit tempor veniam consequat excepteur. Minim incididunt sint culpa esse nisi dolor do reprehenderit consequat. Occaecat magna occaecat anim eu commodo in nostrud ea minim consectetur. In eiusmod nostrud Lorem in irure nostrud nulla ipsum Lorem. Qui duis occaecat ullamco ullamco dolor anim.Elit adipisicing elit culpa voluptate Lorem magna veniam minim veniam. Velit non tempor Lorem duis officia incididunt ea id consequat amet elit dolor officia in. Labore aliqua ea dolore veniam ut dolor voluptate. Exercitation culpa culpa ullamco reprehenderit aute quis consequat veniam elit cillum tempor proident labore. In commodo sint velit labore nostrud commodo ipsum occaecat. Consequat dolor elit et nulla sit voluptate ullamco aute dolor pariatur. Adipisicing aute do irure do eiusmod incididunt voluptate voluptate magna.</span>",
        },
        {
          title: "學習計畫",
          content: "<span>Ullamco elit excepteur labore elit in qui amet pariatur ad esse. Sunt pariatur eu nulla elit fugiat occaecat aute. Enim cillum magna officia consequat aliqua nulla. Magna veniam ullamco esse officia.Esse anim deserunt irure irure consectetur exercitation sunt. Anim voluptate consequat aute sit consequat pariatur quis laborum officia velit. Amet elit labore in cupidatat velit eu incididunt.In aliqua sint ipsum elit labore quis cupidatat proident duis in. Consectetur consequat eiusmod dolore minim commodo aliqua voluptate eu consequat eu. Aute mollit nisi deserunt incididunt officia nisi anim.Velit cupidatat quis enim est do veniam duis nulla aute adipisicing occaecat aliquip ipsum ullamco. Pariatur minim adipisicing dolore labore nostrud. Nisi ut cillum exercitation est id aliquip nisi voluptate veniam. Quis magna qui occaecat proident elit do ad cupidatat laborum occaecat tempor excepteur dolore. Tempor exercitation consectetur cillum ut fugiat adipisicing adipisicing eiusmod id laborum dolor et in.Esse et sint commodo excepteur amet exercitation anim. Sunt exercitation fugiat enim irure adipisicing officia aute voluptate magna mollit eu reprehenderit. Mollit est ut dolore eiusmod laborum duis veniam occaecat reprehenderit mollit aute anim anim nostrud. Ea velit voluptate magna ad consequat anim ea nostrud duis consequat cupidatat ad aliqua et. Nisi sit deserunt sit cupidatat aliqua sint esse.Cillum consequat quis qui amet velit pariatur sint. Do excepteur exercitation aliqua labore quis duis quis sit cupidatat quis exercitation cillum esse. Cupidatat cupidatat consequat irure officia veniam elit consectetur enim.Ad ullamco nulla nisi in aliquip consequat mollit est anim. Fugiat magna quis non proident. Fugiat magna eiusmod cupidatat nulla aliqua nostrud. Ipsum nostrud sint ex officia.Tempor proident excepteur eu aute amet. Sint irure amet amet tempor proident in mollit laborum voluptate. Lorem non irure qui reprehenderit in duis. Eu dolor exercitation aliquip aliquip quis est fugiat ut ad excepteur fugiat esse.Cupidatat aute mollit Lorem eu amet dolor adipisicing nulla culpa. Cupidatat amet nostrud commodo sint. Et nostrud quis mollit tempor veniam consequat excepteur. Minim incididunt sint culpa esse nisi dolor do reprehenderit consequat. Occaecat magna occaecat anim eu commodo in nostrud ea minim consectetur. In eiusmod nostrud Lorem in irure nostrud nulla ipsum Lorem. Qui duis occaecat ullamco ullamco dolor anim.Elit adipisicing elit culpa voluptate Lorem magna veniam minim veniam. Velit non tempor Lorem duis officia incididunt ea id consequat amet elit dolor officia in. Labore aliqua ea dolore veniam ut dolor voluptate. Exercitation culpa culpa ullamco reprehenderit aute quis consequat veniam elit cillum tempor proident labore. In commodo sint velit labore nostrud commodo ipsum occaecat. Consequat dolor elit et nulla sit voluptate ullamco aute dolor pariatur. Adipisicing aute do irure do eiusmod incididunt voluptate voluptate magna.</span>",
        }
      ]
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
  .studyPlan
    // min-height: 100%
  .studyPlan > .title
    font-size: 20px
    font-weight: 900
    padding: 5px
    display: inline-block
    border-top: 2px solid #444
    border-bottom: 2px solid #444
    margin: 20px 0px
</style>

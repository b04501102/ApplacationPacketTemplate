<template lang="pug">
  .home.container
    .row
      NameCard.col-sm-12
      SideBar.col-sm-4(:skills='skills')
      TimeLine.col-sm-8(title='EXPERIENCE' :events='events')

</template>

<script>
// @ is an alias to /src
import NameCard from '@/components/NameCard.vue'
import SideBar from '@/components/SideBar.vue'
import TimeLine from '@/components/TimeLine.vue'
import ContentCard from '@/components/ContentCard.vue'

export default {
  name: 'home',
  data: () => {
    return {
      events: {
        "台大土木CAE暑期實習": {
          time: "2016.07",
          content: "負責 Coursera 影片剪輯、石化管線資料庫視覺化網站的修改、以及拿災害相關文獻做斷詞及詞頻統計以建立語料庫"
        },
        "畢業專題遊戲開發": {
          time: "2016.09",
          content: "負責遊戲中戰鬥機制程式編寫"
        },
        "TSA CAE 組組長兼美宣長": {
          time: "2018.08",
          content: "在 2018 台大土木的 TSA 中日韓三校交流活動中，帶領組員與其他兩校進行交流，一起完成最後的學術簡報。"
        },
        "衛武資訊研發部門 iOS 軟體工程師": {
          time: "2018.07",
          content: "負責 iOS 平台的產品開發"
        }
      },
      skills: [
        {
          name: "Front End",
          icon: "Skills/responsive.png",
          level: 5,
          description: "text message"
        },
        {
          name: "Python",
          icon: "Skills/Python.png",
          level: 4,
          description: "text message"
        },
        {
          name: "Swift",
          icon: "Skills/Swift.png",
          level: 4,
          description: "text message"
        },
        {
          name: "Unity",
          icon: "Skills/Unity.png",
          level: 5,
          description: "text message"
        },
        {
          name: "3D 建模",
          icon: "Skills/3DModeling.png",
          level: 3,
          description: "text message"
        },
        {
          name: "數位創作",
          icon: "Skills/Film.png",
          level: 3,
          description: "text message"
        },
      ],
    }
  },
  components: {
    NameCard,
    SideBar,
    TimeLine,
    ContentCard,
  },
};
</script>
<style lang="sass">



</style>


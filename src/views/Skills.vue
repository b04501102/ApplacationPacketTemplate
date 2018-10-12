<template lang='pug'>
  .skills.container
    .title(:class='isLightMode ? "text-main-dark border-main-dark" : "text-main-light border-main-light"') 特殊才能
    .row
      ContentCard.col-sm-6(v-for='skill in skills' :title='skill.name' :content='skill.description' :images='skill.images' :links='skill.links')
</template>

<script>
import ContentCard from '@/components/ContentCard.vue'
import { mapState } from 'vuex'

export default {
  data: () => {
    return {
      skills: [
        {
          name: "Front End",
          icon: "Skills/responsive.png",
          level: 5,
          description: "<span>上大學才開始學寫網頁，至今 CodePen 上也累積快100各大大小小的網頁，也會使用前端框架 Vue.js 做開發，前端的語言相對其他強型別的語言較為不嚴謹，但也比較自由，可以很容易的將自己的美感呈現出來。平時除了做些 UI/UX 、動畫特效的實驗，也常常運用前端技術於簡報、文字排版中，例如擔任2018 TSA 美宣長時就是利用前端做活動手冊的排版（如下圖所示），又例如這份備審也是，前端框架排版很快，元件複用性又高，還可以很輕易地跨多種平台、甚至行動裝置，互動性也比較好。</span>",
          images: ["Skills/TSAHandBook.png",],
          links: [
            {
              name: "個人網頁",
              address: "#"
            },
            {
              name: "CodePen",
              address: "https://codepen.io/collection/XpPaoV/"
            },
            {
              name: "TSA 手冊",
              address: "https://codepen.io/collection/DJNGZN/"
            },
          ]
        },
        {
          name: "Python",
          icon: "Skills/Python.png",
          level: 4,
          description: "一開始學 Python 是在機器學習還沒很紅時，當時只是覺得這語言很美，用途也只是想用做網頁後端使用，到後來修了資料科學後，才真正體悟到其在資料處理的強大，而隨著越接觸越多，更是越能體會，除了網頁後端、機器學習，許多跟圖學相關的也能使用它，例如我正在學習的 Blender 3D 底層就有用他；而所用來做遊戲的 Unity 因近年導入機器學習，也可使用 Python 訓練的模型於遊戲製作中。而在我個人，也常常使用 Python 作演算法的原型測試，或用於修圖等等。",
          images: [],
        },
        {
          name: "Swift",
          icon: "Skills/Swift.png",
          level: 4,
          description: "一開始學習的理由跟 Python 相同，另一方面也是期許自己在為檯面上都沒有自己能滿意的應用難過時，自己有能力能開發應用給自己用，甚至能夠上架。殊不知後來有好幾次實習機會包括目前的工作，就是因為會寫 Swift 。",
          images: [],
        },
        {
          name: "Unity",
          icon: "Skills/Unity.png",
          level: 5,
          description: "Unity 是從 2016 台大電輔組暑期實習時開始，其後也定期參與遊戲開發的活動，大二至大三時跟別人到外面接過遊戲開發相關的案子，目前也正在跟別人一起開發一款手機遊戲。在學習 Unity 中，除了一些遊戲機制程式的撰寫，也對於特效製作及鏡頭運鏡、畫面渲染有興趣，而這學期開始學習較為底層的 Shader Script 編寫。",
          images: ["Skills/EasyCard_T.jpeg", "Skills/EasyCard_S.jpeg", "Skills/EasyCard_A.jpeg"],
        },
        {
          name: "3D 建模",
          icon: "Skills/3DModeling.png",
          level: 3,
          description: "一開始入門是大一實做課的 SketchUp, 到後來學過一陣子 C4D ，最後發現 Blender 3D 這套開源的建模軟體，就決定要好好開始學他，除了想做 3DCG 動畫外，會 3D 建模對於遊戲製作也很有幫助，一方面跟 3D 美術溝通時會比較順暢，另一方面模型需要小修改也不需要再去麻煩美術，亦或當你根本請不起美術時，自己就能獨立完成整條生產鏈。",
          images: ["Skills/Donuts.jpg"],
        },
        {
          name: "數位創作",
          icon: "Skills/Film.png",
          level: 3,
          description: "本身對於鏡頭渲染以及動畫很有興趣，大學社團便是台大的數位影片創作社，喜歡實際參與微電影拍攝，特別是鏡頭語言的的傳達；會基本影片調光、剪輯，目前正朝結合 3DCG 的方向努力，動畫則以網頁端的呈現為主。",
          images: [],
        },
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
  .skills
    // min-height: 100%
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
  .skills > .title
    font-size: 20px
    font-weight: 900
    padding: 5px
    display: inline-block
    border-top: 2px solid #444
    border-bottom: 2px solid #444
    margin: 20px 0px
  
</style>

<template lang="pug">
  #app(:class='isLightMode ? "bg-light text-dark" : "bg-dark text-light"')
    nav.navbar.navbar-expand-md.fixed-top(:class='isLightMode ? "navbar-light bg-light" : "navbar-dark bg-dark"')
      button.navbar-toggler(type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation")
        span.navbar-toggler-icon
      #navbarNavDropdown.collapse.navbar-collapse
        ul.nav.navbar-nav
          li.nav-item
            router-link.nav-link(to='/' :class='isLightMode ? "text-secondary" : "text-light"') 鄭羽霖, Yu-Lin Cheng
          li.nav-item.dropdown
            a#navbarDropdown.nav-link.dropdown-toggle(href='#' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' :class='isLightMode ? "text-secondary" : "text-light"') 自傳
            .dropdown-menu(aria-labelledby='navbarDropdown' :class='isLightMode ? "bg-light border-main-dark" : "bg-dark border-main-light"')
              router-link.dropdown-item(to='/autobiography' :class='isLightMode ? "text-secondary" : "text-light"') 家庭背景與求學過程
              router-link.dropdown-item(to='/activities' :class='isLightMode ? "text-secondary" : "text-light"') 課外活動
              router-link.dropdown-item(to='/skills' :class='isLightMode ? "text-secondary" : "text-light"') 特殊才能
          li.nav-item
            router-link.nav-link(to='/studyplan' :class='isLightMode ? "text-secondary" : "text-light"') 讀書計畫
      .downloadPDF.btn(:class='isLightMode ? "btn-main-dark text-light" : "btn-main-light"' v-on:click='downloadPDF') Download PDF
      .modeSwitch.btn-group.ml-auto.mb-auto
        .btn(:class='isLightMode ? "btn-main-dark text-light" : "btn-outline-main-light"' v-on:click='switchLightDarkMode(true)')
          font-awesome-icon(:icon='["fas", "sun"]' size='sm')
        .btn.ml-auto.mb-auto(:class='isLightMode ? "btn-outline-main-dark" : "btn-main-light"' v-on:click='switchLightDarkMode(false)')
          font-awesome-icon(:icon='["fas", "moon"]' size='sm')
    div(style="page-break-before:always")
    .container-fluid
      transition(name='slide-fade' mode='out-in')
        router-view
    .html2pdf__page-break
    
</template>
<script>
import { mapState , mapMutations } from 'vuex'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import html2pdf from 'html2pdf.js'
import Home from '@/views/Home.vue'
import Autobiography from '@/views/Autobiography.vue'
import StudyPlan from '@/views/StudyPlan.vue'

export default {
  name: 'app',
  data: () => {
    return {
      
    }
  },
  computed: {
    ...mapState(['isLightMode'])
  },
  methods: {
    ...mapMutations(['switchLightDarkMode']),
    downloadPDF: () => {
      // var data = document.getElementById('app');
      // var data = document
      // html2canvas(data, {
        
      // }).then(canvas => {
      //   // document.body.appendChild(canvas)
      //   // Few necessary setting options
      //   var imgWidth = 208;
      //   var pageHeight = 295;
      //   var imgHeight = canvas.height * imgWidth / canvas.width;
      //   var heightLeft = imgHeight;

      //   const contentDataURL = canvas.toDataURL('image/png')
      //   let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
      //   var position = 0;
      //   pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      //   pdf.save('MYPdf.pdf'); // Generated PDF
      // });
      var element = document.getElementById('app');
      var opt = {
        margin:       1,
        filename:     'myfile.pdf',
        image:        { type: 'png', quality: 1 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };

      // New Promise-based usage:
      html2pdf().from(element).set(opt).save();

      // Old monolithic-style usage:
      html2pdf(element, opt);
    }
  }
}
</script>
<style lang="sass">
@import '../node_modules/bootstrap/scss/bootstrap.scss'

*
	// border: 1px black solid
html, body
  // height: 1050px
  // width: 1485px
  width: 100%
  height: auto
  min-height: 100%
  margin: 0
  background-color: #f8f9fa
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  position: relative
  transition: 0.5s
  height: 100%
  width: 100%
  min-height: 100vh
  margin: 0
  // overflow: scroll
  // background-color: #f4f4f2
  .navbar
    .nav
      a
        font-weight: bold
        color: #2c3e50
        // margin: 10px
        &.text-secondary.router-link-exact-active
          color:  $main-dark !important
        &.text-light.router-link-exact-active
          color:  $main-light !important
    .btn-outline-main-dark:hover
      color: $light !important
    .downloadPDF
      margin-right: 10px
  .container-fluid
    margin-top: 50px

.slide-fade-enter-active
  transition: all .5s ease
.slide-fade-leave-active
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)
.slide-fade-enter, .slide-fade-leave-to
  transform: translateX(10px)
  opacity: 0

</style>

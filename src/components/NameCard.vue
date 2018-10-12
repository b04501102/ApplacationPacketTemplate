<template lang="pug">
	.container.nameCard
		.row
			.photo.col-sm-4
				img.headShot(alt='Head Shot', src='../assets/headShot.jpg')
			.contents.col-sm-8
				.name(:class='isLightMode ? "text-main-dark" : "text-main-light"') 鄭羽霖, YU-LIN CHENG
				hr(:class='isLightMode ? "border-main-dark" : "border-main-light"')
				.education 臺灣大學土木工程學系 四年級
				.job iOS 軟體工程師 @ 衛武資訊
				.bio(:class='isLightMode ? "text-dark" : "text-light"') 喜愛寫程式、有質感的事物或用程式做出有質感的事物

</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'nameCard',
	computed: {
    ...mapState(['isLightMode'])
  },
}
</script>

<style lang="sass">
@mixin size($w, $h: $w)
  width: $w
  height: $h

.nameCard
	// border-radius: 10px
	// box-shadow: 5px 5px 5px 5px #eee
	// transition: .5s
	// &:hover
	// 	transform: translate(-5px, -5px)
	// 	box-shadow: 5px 5px 10px 10px #e4e4e4
	.row
		.photo
			display: flex
			justify-content: center
			align-items: center
			.headShot
				width: 100%
				max-width: 300px
				height: auto
				border-radius: 50%
				margin: 20px
		.contents
			display: flex
			justify-content: center
			align-items: center
			flex-direction: column
			.name
				font-size: 28px
				font-weight: 900
			hr
				+size(20%, 0)
				border: 1px solid #444
				margin: 10px
				margin-top: 5px
			.education, .job, .bio
				// font-size: 16px
			.bio
				margin-top: 20px
				color: #999

		
</style>

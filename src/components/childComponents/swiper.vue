<template>
	<swiper :options="swiperOption" class="swiper-box">
	    <swiper-slide class="swiper-item" 
	    			  v-for="(value,index) in movieList">
			{{value.content}}
	    </swiper-slide>
<!-- 	    <swiper-slide class="swiper-item">Slide 2</swiper-slide>
	    <swiper-slide class="swiper-item">Slide 3</swiper-slide>
	    <swiper-slide class="swiper-item">Slide 4</swiper-slide>
	    <swiper-slide class="swiper-item">Slide 5</swiper-slide>
	    <swiper-slide class="swiper-item">Slide 6</swiper-slide>
	    <swiper-slide class="swiper-item">Slide 7</swiper-slide>
	    <swiper-slide class="swiper-item">Slide 8</swiper-slide>
	    <swiper-slide class="swiper-item">Slide 9</swiper-slide>
	    <swiper-slide class="swiper-item">Slide 10</swiper-slide> -->
	    <!-- <div class="swiper-pagination" slot="pagination"></div> -->
    </swiper>
</template>
<script type="text/javascript">
	import { swiper , swiperSlide } from 'vue-awesome-swiper'
	export default {
		name: "SwiperComponent",
		compoents: {
			swiper,
			swiperSlide
		},
		data: function() {
			return {
				props: {
					movieList: {
						type: Arrary,
						required: true
					}
				},
				swiperOption {
					direction : 'horizontal',
					// autoplay: { //自动播放
					// 	delay: 1000,
					// 	disableOnInteraction: false
					// },
					slidesPerView: 3,
					spaceBetween: 30,
					freeMode: true,
					pagination: {
						el: '.swiper-pagination',
						clickable: true
					}
				}
			}
		}
	}
</script>
<style lang="scss" scoped type="text/css">
html body .swiper-box .swiper-wrapper {
	display: flex;
	flex-direction: row;
}
.swiper-item {
	height: 100%;
}
.single_show {
  width: 100%;
  display: flex;
  flex-direction: column;
  float: left;
  padding: 10rpx;
  box-sizing: border-box;
}
.single_show .movie_name {
  width: 100%;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  font-size: 30rpx;
  color: #333;
  line-height: 80rpx;
}
.single_show .movie_img_box {
  width: 100%;
  height: 300rpx;
  overflow: hidden;
}
.single_show .movie_img_box .movie_img {
  width: 100%;
}
</style>
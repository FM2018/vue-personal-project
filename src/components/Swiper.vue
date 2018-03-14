<template>
	<swiper :options="swiperOption" 
			class="swiper-box">
	    <swiper-slide class="swiper-item" 
	    			  v-for="(item,index) in list" 
	    			  :key="index">
	    	{{item.title}}
	    </swiper-slide>
	    <swiper class="swiper-pagination swiper-pagination-bullets" slot="pagination"></swiper>
    </swiper>
</template>
<script type="text/javascript">
	import {swiper , swiperSlide} from 'vue-awesome-swiper';
	export default {
		name: "Swiper",
		components: {
			swiper,
			swiperSlide
		},
		data() {
			return {
				list: [
					{
						title: "导航1"
					},
					{
						title: "导航2"
					},
					{
						title: "导航3"
					},
					{
						title: "导航4"
					},
					{
						title: "导航5"
					},
					{
						title: "导航6"
					},
					{
						title: "导航4"
					},
					{
						title: "导航5"
					},
					{
						title: "导航6"
					}
				],
				swiperOption: {
					direction : 'horizontal',
					// autoplay: { //自动播放
					// 	delay: 1000,
					// 	disableOnInteraction: false
					// },
					// slidesPerView: 1,
					// centeredSlides: true,
					// spaceBetween: 20,
					// freeMode: true,
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
						renderBullet(index, className) {
			              return `<swiper-slide class="${className} swiper-pagination-bullet-custom">导航${index + 1}</swiper-slide>`
			            }
					}
	    		},
	    		swiperOptionTwo: {
	    			direction : 'horizontal',
	    			slidesPerView: 5
	    		}

			}
		}
	}
</script>
<style lang="scss" type="text/css">
.swiper-wrapper {
	margin-top: 40px;
}
.swiper-pagination-bullet-custom {
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    color: #000;
    opacity: 1;
    background: rgba(0,0,0,0.2);
}
.swiper-pagination-bullet-custom.swiper-pagination-bullet-active {
    color: #fff;
    background: #007aff;
}
.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet {
	width: 40px;
	border-radius: 0;
}
.swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {
	top: 20px;
}
</style>
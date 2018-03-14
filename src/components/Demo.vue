<template>
		<swiper :options="swiperOption" class="swiper-box">
	    <swiper-slide class="swiper-item">Slide 1</swiper-slide>
	    <swiper-slide class="swiper-item">Slide 2</swiper-slide>
	    <swiper-slide class="swiper-item">Slide 3</swiper-slide>
	    <swiper-slide class="swiper-item">Slide 4</swiper-slide>
	    <swiper-slide class="swiper-item">Slide 5</swiper-slide>
	    <swiper-slide class="swiper-item">Slide 6</swiper-slide>
	    <swiper-slide class="swiper-item">Slide 7</swiper-slide>
	    <swiper-slide class="swiper-item">Slide 8</swiper-slide>
	    <swiper-slide class="swiper-item">Slide 9</swiper-slide>
	    <swiper-slide class="swiper-item">Slide 10</swiper-slide>
	    <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
	export default {
		name: "Demo",
		data() {
			return {
				swiperOption: {
				direction: 'vertical',
				slidesPerView: 1,
				spaceBetween: 30,
				mousewheel: true,
					pagination: {
						el: '.swiper-pagination',
						clickable: true
					}
        		}
			} 
		},
		beforeCreate: function() {
		// console.log("创建前")
		},
		created: function() {
		// 	let apikey="Yzc4ZjUwOTctNzMwMy00NzI2LTg4MGMtNzE2MGY2MDAyODgy",
		// 		that = this;
		// // console.log("创建之后"); 
		// 	this.$http.get('https://api.napster.com/v2.2/playlists?limit=10&apikey='+apikey).then((response) => {
		// 			console.log(response)
		// 			console.log(that)
		// 	    // 响应成功回调
		// 	}, (response) => {
		// 	    // 响应错误回调
		// 	});
		},
		beforeMount: function() {
		// console.log("mount之前")
		}, 
		methods: {
			
		},
		mounted: function() {
		// console.log("mount之后")
		},
		beforeUpdate: function() {
		// console.log("更新前");
		},
		updated: function() {
		// console.log("更新完成");
		},
		beforeDestroy: function() {
		// console.log("销毁前");
		},
		destroyed: function() { 
		// console.log("已销毁");
		}
	}	
</script>

<style lang="scss" scoped>
html,body {
    position: relative;
    height: 100%;
  }
  body {
    background: #eee;
  }
  .swiper-box {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
  .swiper-item {
    height: 100%;
    text-align: center;
    font-size: 18px ;
    background: #fff;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
</style>
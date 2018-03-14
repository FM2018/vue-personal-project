<template>
	<div class="container">
		<div v-for="(list,index) in apiList"
			 :key = "index">
			<div class="title">{{list.title}}</div>
			<swiper :options="swiperOption" 
					class="swiper-box">
			    <swiper-slide class="swiper-item" 
			    			  v-for="(item,index) in list.listData" 
			    			  :key="index">
			    	<div class="single_show">  
					    <div class="movie_img_box">
					      <img :src="item.images.small" class="movie_img"></img>
					    </div>
					     <div class="movie_name">{{item.title}}</div>
					  </div>
			    </swiper-slide>
		    </swiper>
		</div>
	</div>
</template>

<script>
	//引入子组件
	import {swiper , swiperSlide} from 'vue-awesome-swiper';
	export default {
		name: "Movie",
		components: {
			swiper,
			swiperSlide,
			// swiperTemplate
		},
		data() {
			return {
				swiperOption: {
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
        		},
				movieList: [
					{content: "Slide1"},
					{content: "Slide2"},
					{content: "Slide3"},
					{content: "Slide4"},
					{content: "Slide5"},
					{content: "Slide6"}
				],
				apiList: []
			} 
		},
		beforeCreate: function() {
			let that = this;
			this.$http.get('https://www.xiaomintx.cn/others/demo.php').then((res) => {
				// console.log(res);
				that.apiList = res.body;
				let apiList = that.apiList;
				// console.log(that.apiList)
			    // 响应成功回调
			    for(let i in apiList) {
					let apiUrl = apiList[i].apiUrl;
					that.$http.get('https://www.xiaomintx.cn/wx/wxxcx/getMovieList.php?url='+ apiUrl).then((res) => {
						// console.log(res);
						that.apiList[i].listData = res.body.subjects;
						that.apiList[i].title = res.body.title;
						console.log(res)
						// console.log(apiList)
					    // 响应成功回调
					}, (err) => {
					    // 响应错误回调
					    console.log(err)
					});
				}
			}, (err) => {
			    // 响应错误回调
			    console.log(err)
			});
		},
		created: function() {
			
		},
		beforeMount: function() {
		// console.log("mount之前")
		}, 
		computed: {

		},
		methods: {
			
		},
		mounted () {
		
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
  html body .swiper-box .swiper-wrapper {
  	display: flex;
  	flex-direction: row;
  }
  .container {
  	width: 100VW;
  	min-height: 100VH;
  	background: #000;
  	position: relative;
  	display: flex;
    flex-direction: column;
    justify-content: space-around;
  	.title {
  		padding: 10px 0;
	    width: 100%;
	    text-align: left;
	    color: white;
  	}
  }
  .swiper-box {
    width: 100%;
    margin: 0 auto;
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
  color: #fff;
  line-height: 80rpx;
  padding: 5px 0;
  font-size: 16px;
}
.single_show .movie_img_box {
	width: 100%;
	height: 38VW;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
}
.single_show .movie_img_box .movie_img {
  width: 100%;
}
</style>
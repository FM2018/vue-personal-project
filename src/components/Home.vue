<template>	
	<div class="container">
		<div class="home">
			<div class="selectList">
				<div class="listBox" 
					 v-for="(item,index) in list" 
					 v-bind:class="{ active: list[index].isActive }"
					 :key="item.id"
					 :data-id="item.id"
					 :data-index="index"
					 @click='clickBtn(index)'>
					<div class="listIcon">
						<img :src="item.img" />
					</div>
					<div class="title">{{item.name}}</div>
				</div>
			</div>
			<div class="bottomBox">
				<img src="/static/img/icon/case.png"/>
			</div>
		</div>
		<div class="mask">
			<img src="/static/img/home1.png" >
			<div class="maskPage"></div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'Home',
		data () {
			return {
				msg: 'this is home',
				list: [
					{
						name: "线上案例",
						img: "/static/img/icon/case.png",
						src: "/case",
						id: 1,
						isActive: false,
						clickAgain: false
					},
					{
						name: "我的乐库",
						img: "/static/img/icon/music.png",
						src: "/music",
						id: 2,
						isActive: false,
						clickAgain: false
					},
					{
						name: "我的图库",
						img: "/static/img/icon/photo.png",
						src: "/photo",
						id: 3,
						isActive: false,
						clickAgain: false
					},
					{
						name: "demo展示",
						img: "/static/img/icon/demo.png",
						src: "/demo",
						id: 4,
						isActive: false,
						clickAgain: false
					},
					{
						name: "我的影院",
						img: "/static/img/icon/movie.png",
						src: "/movie",
						id: 5,
						isActive: false,
						clickAgain: false
					},
					{
						name: "关于我",
						img: "/static/img/icon/contact.png",
						src: "/contact",
						id: 6,
						isActive: false,
						clickAgain: false
					}
				]
			}
		},
		beforeCreate: function() {
		// console.log("创建前")
		},
		created: function() {
		// console.log("创建之后");
		},
		beforeMount: function() {
		// console.log("mount之前")
		},
		methods: {
			clickBtn: function(index) {
				let selectNum = this.list[index].isActive,
					clickAgain = this.list[index].clickAgain,
					src = this.list[index].src,
					that = this;
				if(selectNum == false) {
					for(let i in that.list) {
						that.$set(that.list[i], `isActive`, false)
					}
					this.$set(this.list[index], `isActive`, true)
					this.$set(this.list[index], `clickAgain`, true)
				} else if(selectNum == true && clickAgain == true) {
					this.$router.push(src);
				}
			}
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
<style lang="scss" scoped type="text/css">
$pub_width: 100VW;
$pub_height: 100VH;
$pub_background: rgba(0,0,0,.7);
$pub_click_background: rgba(0,0,0,.5);
$iconWH: 15VW;
.container {
	width: $pub_width;
	height: $pub_height;
	margin: auto; 
	// 这是主要内容
	.home {
		position: relative;
		z-index: 5;
		top: 0;
		width: $pub_width;
		height: $pub_height; 
		.selectList {
			height: 80VH;
			width: $pub_width;
			position:relative;
			top: 0;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-between;
			.listBox {
				width: 49.8VW;
				height: 33%;
				box-sizing: border-box;
				border-bottom: 2px solid rgba(0,0,0,0);
				padding: 7VW;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: space-around;
				background: $pub_background;
				transition: all 0.6s;
				.listIcon {
					width: $iconWH;
					height: $iconWH;
					img {
						vertical-align: top;
						width: 100%;
						height: 100%;
					}
				}
				.title {
					text-align: center;
					line-height: 18px;
					color: white;
				}
			}
			.active {
				transition: all 0.6s;
				background: $pub_click_background;
				border-bottom: 2px solid #fff292;
			}
		}
		.bottomBox {
			height: 20VH;
			width: $pub_width;
			display: flex;
			align-items: center;
			justify-content: center;
			box-sizing: border-box;
			position: relative;
			bottom: 0;
			background: $pub_background;
			border-bottom: 1px solid rgba(0,0,0,0);
			img {
				width: $iconWH;
				height: $iconWH;
				vertical-align: top;
			}
		}
	}
	// 这是遮罩层
	.mask {
		width: $pub_width;
		height: $pub_height;
		position: absolute;
		z-index: 2;
		top: 0;
		left: 0; 
		img {
			width: 100%;
			height: 100%;
			vertical-align: top;
		}
		.maskPage {
			width: 100%;
			height: 100%;
			position: fixed;
			z-index: 3;
			top: 0;
			left: 0;
			background: $pub_background;
		}
	}
}
</style>


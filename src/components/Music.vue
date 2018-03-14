<template>
	<div class="container">
		<div class="allList">
			<!-- 循环展示每日推荐的列表 -->
			<div class="musicList" 
						v-for="(list,index) in recommendList" 
						:key="index"
						v-if="show"
						:data-id="list.id"
						@click="toDetailList(list.id)">
				<div class="number">
					<div>{{index}}</div>
				</div>
				<div class="text">
					{{list.name}}
				</div>
				<div class="icon">
					<!-- <img :src="list.images[0].url"></img>  -->
					<img src="/static/img/icon/back.png" />
				</div>
			</div>
		</div>
	</div>
</template>

<script> 
	export default {
		name: "Music",
		data() {
			return {
				recommendList: [],
				show: true
			}
		},
		beforeCreate: function() {
		// console.log("创建前")
		},
		created: function() {
			let apikey="Yzc4ZjUwOTctNzMwMy00NzI2LTg4MGMtNzE2MGY2MDAyODgy",
				that = this;
		// console.log("创建之后"); 
			this.$http.get('https://api.napster.com/v2.2/playlists?limit=10&apikey='+apikey).then((response) => {
					console.log(response)
					console.log(that)
					that.recommendList = response.body.playlists;
			    // 响应成功回调
			}, (response) => {
			    // 响应错误回调
			});
		},
		beforeMount: function() {
		// console.log("mount之前")
		}, 
		methods: {
			toDetailList:function(id) {
				console.log(id) 
				this.$router.push({
					name: "MusicList",
					params: {
						id: id
					}
				})
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
.container {
	width: 100VW;
	position: relative;
	background: #000;
	z-index: 2;
	.allList {
		width: 100%;
		display: flex;
		flex-direction: column; 
		.musicList {
			position: relative;
			width: 100%;
			height: 120rpx;
			display: flex;
			align-items: center;
			flex-direction: row;
			flex-wrap: nowrap; 
			.number {
				font-size: 45px;
				line-height: 60px;
				font-weight: blod;
				color: white;
				display: flex;
				justify-content: center;
				align-items: center;
				width: 15%; }
			.text {
				color: white;
				font-size: 32px;
				line-height: 120px;
				font-weight: bold;
				overflow:hidden;
				text-overflow:ellipsis;
				white-space:nowrap;
				width: 70%; }
			.icon {
				position: absolute;
				right: 0;
				top: 0;
				width: 120px;
				height: 120px;
				margin-right: -20px;
				display: flex;
				align-items: center;
				justify-content: center; }
			img {
				width: 40%;
				height: 40%;
				border-radius: 50%;
				overflow: hidden;
			}
		}
	}
}
</style>
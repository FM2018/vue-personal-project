<template>
	<div class="container">
		<div class="allList">
			<!-- 循环展示每日推荐的列表 -->
			<div class="musicList"
						v-for="(list,index) in musicList"
						:key="index"
						:data-id="list.id"
						:data-play="list.previewURL"
						:data-name="list.name"
						:data-albumName="list.albumName"
						:data-artistName="list.artistName"
						@click="toDetailList(list.id,list.previewURL,list.name,list.albumName,list.artistName)">
				<div class="number">
					<div>{{index}}</div>
				</div>
				<div class="text">
					{{list.name}}
				</div>
				<div class="icon">
					<img src="/static/img/icon/back.png"></img>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: "MusicList",
		data() {
			return {
				id: "",
		    detailMusicList: [],
		    musicList: []
			}
		},
		beforeCreate: function() {
			let id = this.$route.params.id,
					apikey="Yzc4ZjUwOTctNzMwMy00NzI2LTg4MGMtNzE2MGY2MDAyODgy",
					that = this;
			this.$http.get("https://api.napster.com/v2.2/playlists"+"/"+id+"/tracks?apikey="+apikey+"&limit=10").then((res)=>{
				console.log(res)
				this.musicList = res.body.tracks;
			},(response)=>{

			})
		},
		created: function() {

		},
		beforeMount: function() {

		},
		methods: {
			toDetailList: function(id,previewURL,name,albumName,artistName) {
				console.log(id,previewURL,name,albumName,artistName);
				this.$router.push({
					name: "MusicPlay",
					params: {
						id: id,
						play: previewURL,
						name: name,
						albumName: albumName,
						artistName: artistName
					}
				})
			}
		},
		mounted: function() {

		},
		beforeUpdata: function() {

		},
		updated: function() {

		},
		beforeDestroy: function() {

		},
		destroyed: function() {

		}
	}
</script>
<style lang="scss" scoped type="text/css">
	/*这是背景图片层*/
$blur: 10px;
page {
	background: #000;
}
.background {
	position: fixed;
	z-index: 1;
	top: 0;
	-webkit-filter: blur($blur);
	-moz-filter: blur($blur);
	-o-filter: blur($blur);
	-ms-filter: blur($blur);
   filter: blur($blur); 
	width: 100VW;
	height: 100VH; }
	.background img {
		width: 100%;
		height: 100%;
    	vertical-align: center; }
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
			height: 100px;
			display: flex;
			align-items: center;
			flex-direction: row;
			flex-wrap: nowrap;
			.number {
				font-size: 50px;
				line-height: 80px;
				font-weight: blod;
				color: white;
				display: flex;
				justify-content: center;
				align-items: center;
				width: 15%; }
			.text {
				color: white;
				font-size: 24px;
				line-height: 80px;
				font-weight: bold;
				overflow:hidden;
				text-overflow:ellipsis;
				white-space:nowrap;
				width: 70%; }
			.icon {
				position: absolute;
				right: 0;
				width: 80px;
				height: 80px;
				display: flex;
				align-items: center;
				justify-content: center;
				margin-right: -20px;
				img {
					width: 60%;
					height: 60%;
					border-radius: 50%;
					overflow: hidden;
				}
			}
		}
	}
}
</style>

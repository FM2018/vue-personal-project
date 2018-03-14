<template></template>

<script type="text/javascript">
	export default {
		name: "MusciPlay",
		data() {
			return {

			}
		},
		beforeCreate: function() {
			let id = this.$route.params.id, //歌曲id
				play = this.$route.params.play, //播放地址
				name = this.$route.params.name, //歌曲名字
				albumName = this.$route.params.albumName, //专辑名称
				artistName = this.$route.params.artistName; //艺术家名称
			console.log(id,play,name,albumName,artistName);
		},
		created: function() {

		},
		beforeMount: function() {

		},
		//计算属性
		methods: {

		},
		mounted: function() {

		},
		beforeUpdate: function() {

		},
		updated: function(){

		},
		beforeDestroy: function() {

		},
		destroyed: function() {

		}
	}
</script>

<style type="text/css" lang="scss" scoped="">
	
</style>
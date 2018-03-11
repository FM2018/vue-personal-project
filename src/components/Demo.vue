<template>
	<div>Demo</div>
</template>

<script>
	export default {
		name: "Demo",
		data() {
			return {

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

<style lang="sass" scoped="">
</style>
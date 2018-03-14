<template>
	<div class="page" v-cloak>
		<div class="container">
			<div class="column" 
			    v-for="(items,index) in item"
			    :key="items.id"
			    :data-id="items.id"
			    :data-index="index"
			    :class="items.style"
			    @click="toPhotoPage(items.id)">
				<div class="iconBox">
					<img :src="items.icon"></img>
				</div>
				<div class="text">
					<div>{{items.title}}</div>
				</div>
				<div class="gotoPage" 
					 :data-style="items.id">
					<img v-if="items.or" src="/static/img/icon/back_red.png"></img>
					<img v-else src="/static/img/icon/back.png"></img>
				</div>
			</div>
		</div> 
		<div id="backBtn"
			 onclick="window.history.go(-1)"
			 :style="{width:'50px', height:'50px', background:'#1d4fd4', position:'fixed', left:'50px', bottom:'22%'}">
			<img src="/static/img/icon/back.png"></img>
		</div>
	</div>
</template>
<!--   -->
<script>
	export default {
		name: "Photo",
		directives:{
			drag(el,bindings){
				let disx = "",
					disy = "";
				// el.onmousedown = function(e) {
				// 	console.log(el) //这是dom
				// 	console.log(e) //这是鼠标

				// }
		    	el.onmousedown = function(e){
		    		console.log("准备跑路")
		    		console.log(e)
			        disx = e.pageX - el.offsetLeft;
			        disy = e.pageY - el.offsetTop;
			        el.onmousemove = function (e){
			        	disx = e.pageX - el.offsetLeft;
			        	disy = e.pageY - el.offsetTop;
			        	console.log("跑路啦！")
			        	console.log(el);
			            el.style.left = e.pageX - disx+'px';
			            el.style.top = e.pageY - disx+'px';
			            document.onmousemove = document.onmouseup = null;
			        }
			        el.onmouseup = function(){
			        	console.log("不跑了")
			            document.onmousemove = document.onmouseup = null;
			        }
			    }
			}
		},
		data() {
			return {
				item: [
			      {
			        icon: "/static/img/icon/poster.png",
			        style: "one",
			        title: "poster",
			        id: 1,
			        or: false
			      },
			      {
			        icon: "/static/img/icon/flat.png",
			        style: "two",
			        title: "flat",
			        id: 2,
			        or: false
			      },
			      {
			        icon: "/static/img/icon/painting.png",
			        style: "three",
			        title: "painting",
			        id: 3,
			        or: true
			      },
			      {
			        icon: "/static/img/icon/background.png",
			        style: "four",
			        title: "background",
			        id: 4,
			        or: false
			      }
			    ]
			}
		},
		beforeCreate: function() {
		// console.log("创建前")
		},
		created: function() {

		},
		beforeMount: function() {
		// console.log("mount之前")
		}, 
		methods: {
			toPhotoPage: function(id) {
				console.log(id)
				switch(id) {
					case 1: 
						this.$router.push({name: "PhotoList",params:{ id: "1"}});
						break;
					case 2: 
						this.$router.push({name: "PhotoList",params:{ id: "2"}});
						break;
					case 3:
						this.$router.push({name: "PhotoList",params:{ id: "3"}});
						break;
					case 4:
						this.$router.push({name: "PhotoList",params:{ id: "4"}});
						break;
				}
			},
			touchstart: function () {
		      var e = window.event;
		      // e.preventDefault();
		      startX = e.targetTouches[0].pageX;
		      startY = e.targetTouches[0].pageY;
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
	@import "../../static/scss/photo.scss";
</style>
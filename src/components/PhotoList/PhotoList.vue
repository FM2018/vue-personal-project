<template>
	<div>
		<div class="container" v-bind:style="{height:scrollH+'px'}">
			<div class="backgroundImg" v-if="bgImg">
				<img src="../../../static/img/home1.png"></img>
			</div>
			<!-- 主要盒子，图片大容器 -->
			<div class="mainBox">
				<!-- 主要盒子，图片大容器 -->
				<div class="allImgPage">
					<!-- 左边列 -->
					<div class="pub">
						<div class="img_item leftBox" v-for="(item,index) in col1" :key="item.id">
							<img :src="item.img" :data-src="item.img" @click="preview"></img>
						</div>
					</div>
					<!-- 右边列 -->
					<div class="pub">
						<div class="img_item rightBox" v-for="(item,index) in col2" :key="item.id">
				      		<img :src="item.img" :data-src="item.img" @click="preview"></img>
						</div>	
					</div>
				</div>
			</div>
		</div>
		<div style="display:none">
		  <img v-for="(item,index) in images" :key="item.index" :data-id="item.id" :src="item.img" :@click="onImageLoad(item)"></img>
		</div>
		<!-- 悬浮按钮 -->
		<div id="backBtn" onclick="window.history.go(-1)">
			<img src="../../../static/img/icon/back.png" />
		</div>
	</div>
</template>

<script>
	export default {
		name: "PhotoList",
		data() {
			return {
				col1H: 0,
				col2H: 0,
				bgImg: false,
				scrollH: 0,
		        imgWidth: 0,
		        loadingCount: 0,
		        images: [],
		        col1: [],
		        col2: [],
		        allImgList: [],
		        showNum: 6, //限定每次加载的数量
		        maxNum: "",   //所有图片的数量,显示的图片最大数量
		        end: false,
		        loadImages: function() {
		        	let that = this,
		        		allImgList = this.allImgList,
						showNum = this.showNum,
						num = showNum - 1,
						length = allImgList.length;
		        	// console.log(that)
		        	if(length >= 0) {
						let newList = allImgList.slice(0,showNum);  //截取前6个作为新增图片
						allImgList.splice(0,num);
						// wx.showToast({
						//   icon: "loading"
						// })
						setTimeout(()=>{
							let images = newList;
							let baseId = "img-" + (+new Date()),
							    showNum = that.showNum;
							for (let i = 0; i < images.length; i++) {
							    images[i].id = baseId + "-" + i;
							}
						    that.loadingCount = showNum;
						    that.images = images;
						    that.allImgList = allImgList;
						    that.end = false;
						},500);
					} else {
						console.log("已经到底了")
					}
		        },
		        onImageLoad: function(item) {
			        let imageId = item.id,
			        	that = this,
			        	images = this.images,
			        	imageObj = null;
			        for (let i = 0; i < images.length; i++) {
			            let img = images[i];
			            if (img.id === imageId) {
			                imageObj = img;
			                break;
			            }
			        }
			        // console.log(imageObj)
			        let imgHeight = imageObj.img.height,
			         	loadingCount = this.loadingCount - 1,
			         	col1 = this.col1,
			         	col2 = this.col2,
			         	col1H = this.col1H,
			         	col2H = this.col2H;
			        //判断当前图片添加到左列还是右列
			        // console.log(col1H);
			        // console.log(col2H);
			        col2H =col2H*1 + 1;
			        if (col1H < col2H) {
			            col1.push(imageObj);
			            col1H =col1H*1 + 2;
			        } else {
			            col2.push(imageObj);
			            col2H =col2H*1 + 2;
			        }
		            this.loadingCount = loadingCount;
		            this.col1 = col1;
		            this.col2 = col2;
			        //当前这组图片已加载完毕，则清空图片临时加载区域的内容
			        if (!loadingCount) {
			            that.images = [];
			        }    
			        this.col1H = col1H;
		            this.col2H = col2H;   	
		        },
		        preview: function() {}
			}
		},
		beforeCreate: function() {
		// console.log("创建前")
		console.log(this.$route)
		let id = this.$route.params.id,
			that = this,
			apiUrl = "https://www.xiaomintx.cn/wx/wxxcx/getStyleImgList.php?style="+id;
			this.$http.get(apiUrl)
				.then((response)=>{
					// console.log(response)
					that.allImgList = response.data;
					that.maxNum = that.allImgList.length;
					that.imgWidth = document.documentElement.clientWidth * 0.48;
					that.scrollH = document.documentElement.clientHeight;
					//加载首组图片
					that.loadImages()
				}, (response) => {
				    // 响应错误回调
				    
				}
			);
			
		},
		// 创建前
		created: function() {
			
		},
		beforeMount: function() {
		// console.log("mount之前")
		// console.log(123)
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

<style lang="scss" scoped type="text/css">
	@import "../../../static/scss/photoList.scss";
</style>
<template>
	<view class="preview">
		
		<!--图片内容展示以滑块展示-->
		<swiper circular="true" :current="currentIndex" @change="swiperChange">
			<swiper-item v-for="(item,index) in classList" :key="item._id">
				<image v-if="readImgs.includes(index)" @click="maskChange" :src="item.picurl" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		<!--内部具体按键与显示 返回箭头 滑动页面计数器 底部展示栏等-->
		  <view class="mask" v-if="maskState">
		  	 <view class="goBack" :style="{top:getstatusBarHeight()+'px'}"
			 @click="goBack">
				 <uni-icons type="back" color="#fff" size="20"></uni-icons>
			 </view>
			 <view class="count">{{currentIndex+1}} / {{classList.length}}</view>
			 <view class="time">
				 <uni-dateformat :date="new Date()" format="hh:mm"></uni-dateformat>
			 </view>
			 <view class="date">
				<uni-dateformat :date="new Date()" format="MM月dd日"></uni-dateformat>
			 </view>
			 <view class="footer">
			 	  <view class="box" @click="clickInfo">
			 	  	  <uni-icons type="info" size="28"></uni-icons>
					  <view class="text">信息</view>
			 	  </view>
				  <view class="box" @click="clickScore">
				  	  <uni-icons type="star" size="28"></uni-icons>
				  	  <view class="text">{{userScore}}分</view>
				  </view>
				  <view class="box">
				  	  <uni-icons type="download" size="28" @click="clickDownLoad"></uni-icons>
				  	  <view class="text">下载</view>
				  </view>
			 </view>
		  </view>
		  <!--底部弹窗-->
		  
				<uni-popup ref="infoPopup" type="bottom">
						 <view class="infoPopup">
						 	 <view class="popheader">
								 <view ></view>
						 	 	 <view class="title">壁纸信息</view>
						 	 	 <view class="close" @click="clickInfoClose">
						 	 			<uni-icons type="closeempty" size="18" color="#999">
						 	 			</uni-icons>
						 	
						 	 	</view>
						 	 </view>
							  <scroll-view scroll-y="true">
								 <view class="content">
								 	 <view class="row">
										 <view class="label">壁纸ID:</view>
										 <text selectable class="value">{{currentInfo._id}}</text>
								     </view>
									 <!-- <view class="row">
									 	 <view class="label">分类:</view>
										 <text selectable class="value classify">美女</text>
									 </view> -->
									 <view class="row">
									 	 <view class="label">发布者:</view>
									 	 <text selectable class="value">{{currentInfo.nickname}}</text>
									 </view>
									 <view class="row">
									 	 <text class="label">评分:</text>
										   <view class="value ratebox" >
										   	 <uni-rate readonly :value="currentInfo.score" size="16"/>
										   	 <text selectable class="score">{{currentInfo.score}}</text>
										   </view>
									 </view>
									 <view class="row">
									 	 <view class="label">摘要:</view>
									 	 <text selectable class="value">{{currentInfo.description}}</text>
									 </view>
									 <view class="row">
									 	 <view class="label">标签:</view>
									 	  <view class="value tabs">
									 	  	  <view class="tab" v-for="(item ,index) in currentInfo.tabs" :key="index">
									 	  	  	 {{item}}
									 	  	  </view>
									 	  </view>
									 </view>
									 
									 <view class="copyright">
									 	声明：本图片用来用户投稿，非商业使用，用于学习资料使用
										如果侵权了您的权益 您可以拷贝壁纸ID举报至平台,邮箱1982879902@qq.com,管理将删除侵权壁纸，维护你的权益
									 </view>
								 </view>
								 
							  </scroll-view>
							 
						 </view>
		        </uni-popup>
	      <!--评分弹窗-->
		        <uni-popup ref="scorePopup" :is-mask-click="false">
					<view class="scorePopup">
						<view class="popheader">	
							 <view ></view>
							 <view class="title">壁纸评分</view>
							 <view class="close" @click="clickScoreClose">
									<uni-icons type="closeempty" size="18" color="#999">
									</uni-icons>
												 	
							</view>
						</view>
						<view class="content">
							<uni-rate v-model="userScore" @change="onChange" allowHalf="true"/>
							<text class="text">{{userScore}}分</text>
						</view>
						<view class="footer">
							<button @click="sumbitScore" :disabled="!userScore" type="default" size="mini" plain>确认评分</button>
						</view>
					</view>
				</uni-popup>
	</view>
</template>

<script setup lang="js" >
// import {getStore} from  '@/store/classlist.ts';
// import {apiSetupScore} from "@/api/apis.js"
import {onLoad} from '@dcloudio/uni-app'
import { ref } from 'vue';
import {getstatusBarHeight} from '@/hooks/system.js';


     //数据
	const maskState=ref(true);
	const infoPopup=ref();
	const scorePopup=ref();
	//默认0星
	const userScore =ref(0);
	//用一个响应式变量接收
	const classList =ref([])
	//接收当前id
	const currentId=ref()
	//定义一个变量来接收图片索引值（是哪张图片展示相应画面）
	const currentIndex =ref(0)
	//定义一个变量接收当前图片详细信息
	const currentInfo =ref([])
	//为解决额外加载图片资源问题 定义一个数组接收看过的图片的索引值
	const readImgs=ref([])
	
	
	onLoad((data)=>{
		//得到当前图片id 并进行比较返回索引，如果当前列表对象的id等于传过来的图片的索引id 就返回这个索引 也就是找到当前图片在列表中的位置
		currentId.value=data.id
	    currentIndex.value=classList.value.findIndex(item=>{
			 if(item._id==currentId.value){
				 return item._id
			 }
		})	 
			readImgfun();
		//得到当前图片的详细信息的数据
		currentInfo.value=classList.value[currentIndex.value]
		
	
	
	})
	
	function readImgfun(){
		// 看过的图片的索引值追加  同时预加载前后2张图片索引值
		readImgs.value.push(currentIndex.value-1,currentIndex.value,currentIndex.value+1)
        //给数组去重
		readImgs.value =[...new Set(readImgs.value)];
		
	}
	
	//轮播图被滑动时更新数据
	const swiperChange=(e)=>{
		//将滑动后的当前索引值传给之前进入组件时的索引值
		currentIndex.value=e.detail.current;
		//将滑动后的当前图片详细信息存入之前的图片信息变量中
		currentInfo.value=classList.value[currentIndex.value]
	   
	    readImgfun();
	}
	
	

    //接收本地缓存数据
	const storageClassList=uni.getStorageSync("storageClassList") || [];
	//将数据中的图片里的后缀改为:.jpg格式 并生成一个新的数组classlist接收storageclasslist中的值！！
	classList.value=storageClassList.map(item=>{
		return {
			...item,
			picurl:item.smallPicurl.replace("_small.webp",".jpg")
			
			}
	})
	 

    	
	//方法 用于点击图片时 遮盖或者显示mask层
	const maskChange = ()=>{
		maskState.value = !maskState.value
	};
	function onChange(){
		
	}

	//点击打开详情弹窗
	function clickInfo(){
		infoPopup.value.open();
	}
	
	
	//点击关闭详情弹窗
  const clickInfoClose=	function clickInfoClose(){
		 infoPopup.value.close();
	}
	
	//点击打开评分弹窗
  const clickScore = function clickScore(){
	   scorePopup.value.open();
  }
	
	//点击关闭评分弹窗
  const clickScoreClose= function clickScoreClose(){
	    scorePopup.value.close();
  }
	//点击评分确认
	const sumbitScore =async function sumbitScore(){
		console.log(userScore.value)
		//通过别名解构得到我们需要传入数据库想要打分的图片的评分和id
		const {classid,_id:wallId} =currentInfo.value;
		//将需要的值出使用api接口传入数据库
	 //    let res = await apiSetupScore({
		// 	classid:classid,
		// 	wallId:wallId,
		// 	userScore:userScore.value
		// })
	}
	//返回上一页(class:goback)
	const goBack=()=>{
		uni.navigateBack()
	}
	
	//点击下载
	const clickDownLoad=()=>{
		// #ifdef H5
		  uni.showModal({
		  	  content:"请长按保存壁纸",
			  showCancel:false
		  })
		// #endif
		// #ifndef H5
		//获取图片信息。小程序下获取网络图片信息需先配置download域名白名单才能生效。
		uni.getImageInfo({
			//获取临时地址
			src:currentInfo.value.picurl,
			success: (res) => {
				   //保存图片到系统相册
				   uni.saveImageToPhotosAlbum({
					   filePath:res.path,
					   success: (res) => {
					   	 
					   }
				   })
			}
		})
		
		
		
		// #endif
	}
	
	
	
</script>

<style lang="scss" scoped>
	  .preview{
		  width: 100vw;//全屏展示 100vw是视图宽度百分比为100
		  height: 100vh;  //全屏展示 100vh是视图高度百分比为100
		  position: relative;
		  swiper{
			  width: 100%;
			  height: 100%;
			  image{
				  width: 100%;
				  height: 100%;
			  }
		  }
		.mask{
			
             /*选择mask父元素的view子元素*/&>view{
				 position: absolute;
				 left: 0;
				 right: 0;
				 margin: auto;
				 color: #fff;
				 width: fit-content ;//根据里面内容自动分配宽高 
			 }
			.goBack{
				width: 38px;
				height: 38px;
				background: rgba(0,0,0,0.5);
				left: 30rpx;
				margin-left: 0;
				border-radius: 100px;
				top: 0;
				backdrop-filter: blur(10rpx);
				border: 1rpx solid rgba(255, 255, 255, 0.3);
				display: flex;
				align-items: center; 
				justify-content: center;
				
			}
			.count{
				top: 10vh;
				background: rgba(0, 0, 0.3);
				font-size: 28rpx;
				border-radius: 40rpx;
				padding: 8rpx 20rpx;
				backdrop-filter: blur(10rpx); //使背景透明一点
			}
			.time{
				
				font-size: 140rpx;
				top:calc(10vh + 80rpx);
				font-weight: 100;   //让字体瘦一点
				line-height: 1em;  //去掉默认行高
				text-shadow: 0 4rpx rgba(0,0,0,0.3);
				
				
			}
			.date{
			
				font-size: 34rpx;
				top:calc(10vh + 220rpx);
				text-shadow: 0 2rpx rgba(0,0,0,0.3);
			}
			.footer{
				background: rgba(255, 255,255,0.8);
				bottom: 10vh;
				width: 65vw;
				height: 120rpx;
				border-radius: 12rpx;
				color: #000;
				display: flex;
				justify-content: space-around;
				align-items: center;
				box-shadow: 0 2rpx 0 rgb(0, 0, 0,0.1);
				
				.box{
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					padding: 2rpx 12rpx;
					.text{
						font-size: 26rpx;
						color:$text-font-color-2 ;
					}
				}
			}
		} 
		  .popheader{
		  	  display: flex;
		  	  justify-content: space-between;
		  	  align-items: center;
		  	  
		  	  .title{
		  		  color: $text-font-color-2;
		  	  }
		  	  .close{
		  		 
		  		  padding: 5rpx;
		  	  }
		            }
		
		 .infoPopup{
			background-color: #fff;
			padding: 30rpx;
			border-radius: 30rpx 30rpx 0 0;
			overflow: hidden;
			
			scroll-view{
				max-height: 50vh;
				.content{
					.row{
					  display: flex;
					  padding: 16rpx 0;
					  font-size: 32rpx;
					  line-height: 1.7em;//em 是一个相对单位，它相对于元素的字体大小。如果一个元素的字体大小是 16px，那么 1.7em 就等于 27.2px（16px * 1.7）。
                                         //设置行高可以改善文本的可读性，较大的行高可以让行与行之间的间距更大，使文本更易于阅读。
					  .label{
						 color:$text-font-color-3;
						 width: 140rpx;
						 text-align: right;
						 font-size: 30rpx;
						 
						 
					  }
					  .value{
						  flex: 1;//当所有子元素都设置为 flex: 1; 时，它们会平分父容器中的可用空间。
                                  //如果某些子元素没有设置 flex 属性，默认情况下它们不会扩展或缩小，而设置了 flex: 1; 的子元素会占据剩余空间。
						  width: 0;
						  margin-left: 10rpx;
					  }
					  .ratebox{
						  display: flex;
						  align-items: center;
						  .score{
							  font-size:  26rpx;
							  color: $text-font-color-2;
						  }
					  }
					  .tabs{
						 display: flex;
						 flex-wrap:wrap;  //超出自动换行
						 .tab{
							 border:  1px solid $brand-theme-color;
							 color:$brand-theme-color ;
							 font-size: 22rpx;
							 padding: 10rpx 30rpx;
							 border-radius: 40rpx;
							 line-height: 1em;
							 margin: 0 10rpx 10rpx 0;
						 }
					  }
					  .classify{
						  color:$brand-theme-color ;
					  }
					}
					.copyright{
						padding: 20rpx;
						background: #f6f6f6;
						color: #666;
						border-radius: 10rpx;
						margin: 20rpx 0;
						line-height: 1.6em;
						font-size: 28rpx;
					}
					
				}
			}
		 }
		.scorePopup{
			 background-color: #fff;
			 padding: 30rpx;
			 width: 70vw;
			 border-radius: 30rpx;
			 .content{
				 padding: 30rpx 0;
				 display: flex;
				 align-items: center;
				 justify-content: center;
				 .text{
					 color: #ffCA3E;
					 padding-left: 10rpx;
					 width: 80rpx;
					 line-height: 1em;
					 text-align: right;
				 }
			 }
			 .footer{
				 display: flex;
				 padding: 10rpx 0;
				 align-items: center;
				 justify-content: center;
			 }
		}  
	  }
	       
</style>

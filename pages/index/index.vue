<template>
	
	<view class="homeLayout pageBg">
		<!--自定义的头部导航 -->
		  <custom-nav-bar title="推荐"></custom-nav-bar>
		<!--首部轮播图 -->
		<view class="banner">
			<swiper indicator-dots="true" indicator-color="rgba(255, 255, 255,0.5)"
			 indicator-active-color="#fff" autoplay="true">
				<swiper-item v-for="item in bannerList" :key="item._id">
				  <image :src="item.url" mode="aspectFill"></image>
				</swiper-item>
				
			</swiper>
		</view>
		<!--首部轮播图 -->
		<!--中部公告 -->
		<view class="notice">
			<view class="left">
				<uni-icons type="sound-filled" size="20" ></uni-icons>
		        <text class="text">公告</text>
			</view>
			<view class="center">
				<swiper vertical="true" autoplay="true" interval="1500" duration="300" circular="true">
				   <swiper-item v-for="item in noticeList" :key="item.rank">
					   <navigator url="/pages/notice/noticeDetail">{{item.keyword}}</navigator>
				   </swiper-item>
				</swiper>
			</view>
			<view class="right">
				<uni-icons type="right" size="26"></uni-icons>
			</view>
		</view>
		<!--中部公告 -->
		<!--每日推荐栏目-->
		<view class="select">
			<commonTitle>
				<template #left>每日推荐</template>
				<template #right>
					<view class="date">
						<uni-icons type="calendar" size="18" ></uni-icons> 
					     <view class="text">
					     	<uni-dateformat :date="Date.now()" format="dd日"></uni-dateformat>
					     </view>
					</view>
				</template>
			</commonTitle>
			<view class="content">
				<scroll-view scroll-x >
					<view class="box" @click="goPreview(item)" v-for="item in selectList" :key="item._id">
						
					 <image :src="item.smallPicurl" mode="aspectFill"></image>
					</view>
				</scroll-view>
			</view>
			
					
		</view>
		<!--每日推荐栏目-->
		<!--专题精选栏目-->
		<view class="theme">
		    <commonTitle>
			<template #left>专题精选</template>
			<template #right>
				<navigator url="" class="more">
					Mores+
				</navigator>
			
			</template>
			</commonTitle>
			
			<view class="content">
				<theme-item v-for="item in classifyList" :key="item._id" :isMore="false"
				  :item="item"
				></theme-item>
				<theme-item :isMore="true"></theme-item>
			</view>
		</view>
		<!--专题精选栏目-->	
	</view>
	
	
		
</template>

<script setup>
import {apiGetBanner,apigetDayselect,apiGetNotice,apiGetClassifytList} from "@/api/apis.js"
import { ref } from 'vue';
import commonTitle from '../../components/common-title/common-title.vue';
//跳转到预览页面	
const goPreview=(item)=>{
	   uni.setStorageSync("storageClassList",selectList.value)
	uni.navigateTo({
			url:`/pages/preview/preview?id=${JSON.stringify(item._id)}`,
			
		})
		
}

//调用返回导航栏图片轮播区的宠物图片接口的函数（banner)
const bannerList=ref([])//定义一个响应式变量数组接收数据
const getBanner=async ()=>{
	let res= await apiGetBanner({size:'5'})
	
	bannerList.value=res.data
}
getBanner()
//



//调用返回每日推荐栏目九张壁纸api接口的函数（select）
const  selectList=ref([])
const  getDayselect=async ()=>{
	    let res=await apigetDayselect()
		
		//如果请求成功 将数据传给selectList变量
		selectList.value=res.data
}

getDayselect()
//



//调用返回每日公告数据api接口的函数（notice）
const  noticeList=ref([])
const getNoticeList=async()=>{
	   let res=await apiGetNotice({size:'5'})
	  
	  //如果请求成功 将数据传给noticeList变量
	  noticeList.value=res.data
}
getNoticeList()
//


//调用返回专题精选壁纸列表api接口的函数(content)
const  classifyList=ref([])
const  getClassifyList= async()=>{
	let  res=await apiGetClassifytList({
		select:true
	})
	
	classifyList.value=res.data
	console.log(classifyList.value)
}

getClassifyList()
</script>

<style lang="scss" scoped>
	.homeLayout{
		.banner{
			width: 750rpx;
			padding: 30rpx 0;
			swiper{
				width: 750rpx;
				height: 340rpx;
				padding: 0 30rpx;
				&-item{
					width: 100%;
					height: 100%;
					image{
						width: 100%;
						height: 100%;
						border-radius: 10rpx;
					}
				}
			}
		}
	    .notice{
			width: 690rpx;
			height: 80rpx;
			background: gray;
			line-height: 80rpx;
			margin:0 auto;
			border-radius: 80rpx;
			display: flex;
			.left{
				width: 140rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				:deep(){
					.uni-icons{
						color: $brand-theme-color !important; 
					}
				}
				.text{
					color: $brand-theme-color;
					font-weight: 600;
					font-size: 28rpx;
				}
			}
			.center{
				flex: 1;
				swiper{
					height: 100%;
					&-item{
						height: 100%;
						font-size: 30rpx;
						color: lightskyblue;
						overflow: hidden;       //元素溢出隐藏
						white-space:nowrap;   //不让文本换行
						text-overflow: ellipsis;  //提出用户溢出内容使用。。。代替
					}
				}
			}
			.right{
				width: 70rpx;
			}
		}
	    .select{
			padding-top: 50rpx;
			.date{
				color: $brand-theme-color;
				align-items: center;
				display: flex;
				//深度选择器样式穿透通常指的是将父组件的样式应用到子组件的根元素上，即使子组件的根元素使用了 scoped 属性。默认情况下，Vue 单文件组件（.vue 文件）中的 <style> 标签带有 scoped 属性，这
				//意味着其中的 CSS 只会应用到当前组件的元素上，而不会穿透到子组件。
				:deep(){
					.uni-icons{
						color: $brand-theme-color !important; 
					}
				}
				.text{
					margin-left: 5rpx;
				}
			}
			.content{
				width: 720px;
				margin-left: 30rpx;
				margin-top: 30rpx;
				scroll-view{
					white-space: nowrap; //阻止内部元素换行
			
					.box{
						width: 200rpx;
						height: 430rpx;
						display: inline-block;//块级变为行内标签
						margin-right: 15rpx;
						image{
							width: 100%;
							height: 100%;
							border-radius: 10rpx;
							
						}
					}
					.box:last-child{
						margin-right: 30rpx;
					}
				}
			}
		}
        .theme{
			padding:50rpx 0rpx;
			.more{
				font-size: 32rpx;
				color: #888;
			}
			.content{
				margin-top: 30rpx;
				padding: 0 30rpx;
				display: grid;  //使用网格布局
				gap: 15rpx;
				grid-template-columns: repeat(3,1fr);
			}
		}	
	}
</style>

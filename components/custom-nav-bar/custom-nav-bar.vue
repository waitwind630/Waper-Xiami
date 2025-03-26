<template>
	<view class="layout">
		<view class="navbar">
			<view class="statusBar" :style="{height:statusBarHeight+'px'}">
				
			</view>
			<view class="titleBar" :style="{height:titleBarHeight+'px'}">
				<view class="title">{{title}}</view>
				<view class="search">
					<uni-icons type="search" color="#888" size="18"></uni-icons>
					<text class="text">搜索</text>
				</view>
			</view>
		</view>
		<view class="fill" :style="{height:FillHeight}">
		</view>
	</view>
</template>

<script setup >
import { computed, ref } from 'vue';
import {getstatusBarHeight,getTitleBarHeight,getFillHeight} from '@/hooks/system.js'

//获取状态栏高度
let statusBarHeight = getstatusBarHeight()


//得到标题导航栏高度
let titleBarHeight  =getTitleBarHeight()


//使用计算属性得到fill填充层高度：注意！计算函数返回的是一个属性值
let FillHeight =getFillHeight.value

 
defineProps({
	title:{
		type:String,
		default:"壁纸"
	}
})

</script>

<style lang="scss" scoped>
        .layout{
			.navbar{
				background:
				linear-gradient(to bottom,transparent,#fff 400rpx),
				linear-gradient(to right, #e6e6fa 20%, #ffc0cb, #add8e6);
				position: fixed; //它将元素依据浏览器窗口进行固定定位，而不是依据文档流或父元素。这意味着，即使用户滚动页面，被 fixed 定位的元素也会保持在浏览器窗口中的相同位置。
				top: 0;
				left: 0;
				width: 100%;
				z-index: 10;
				.statusBar{
					
				}
				.titleBar{
					display: flex;
					align-items: center;
					padding: 0 30rpx;
					
					.title{
						font-size: 22px;
						font-weight: 700;
						color:$text-font-color-1 ;
					}
					.search{
						width: 220rpx;
						height: 50rpx;
						border-radius: 60rpx;
						background-color: raba(255,255,255,1.2);
						border: 1px solid #fff;
						margin-left: 30rpx;
						color: #999;
						font-size: 28rpx;
						display: flex;
						align-items: center;
						.icon{
							margin-left: 5rpx;
						}
						.text{
							padding-left: 10rpx;
						}
					}
				}
			}
			.fill{
				
			}
		}
</style>
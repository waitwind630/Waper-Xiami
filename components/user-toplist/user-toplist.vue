<template>
	<view class="userToplist">
	    <navigator url="/pages/classlist/classlist">
			<user-item >
				<template #icondata>
					<uni-icons type="download-filled" size="20" ></uni-icons>
				</template>
				<template #textdata>
					<view>我的下载</view>
				</template>
			</user-item>
		</navigator>
		
		<navigator url="/pages/classlist/classlist">
			<user-item>
				<template #icondata>
					<uni-icons type="star-filled" size="20" ></uni-icons>
				</template>
				<template #textdata>
					<view>我的评分</view>
				</template>
			</user-item>
		</navigator>
		
		<user-item :customStyle="customStyle" :isShowdata="false" class="row">
			<template #icondata>
				<uni-icons type="chatboxes-filled" size="20" ></uni-icons>
				
			</template>
			<template #textdata>
				<view>联系客服</view>
			 <!-- #ifdef MP --> 
			 <button open-type="contact" >联系客服</button>
			 <!-- #endif -->
			 <!-- #ifndef MP -->
			 <button  @click="clickContact">拨打电话</button>
			 <!-- #endif -->
			
			</template>
		</user-item>
	</view>
</template>

<script setup>
	import userItem from "@/components/user-item/user-item.vue"
	//为子组件最后一行准备的样式
	const customStyle="border-bottom: 0;"
	//每列的右边部分是否显示数字
	//拨打电话号码函数
	const clickContact=()=>{
		uni.makePhoneCall({
			phoneNumber:"17706616165"
		})
	}
</script>

<style lang="scss" scoped>
    .userToplist{
		
		width: 690rpx;
		margin: 50rpx auto;
		border: 1px solid #eee;
		border-radius: 10rpx;
		box-shadow: 0 0 30rpx rgba(0, 0, 0, 0.05);
		.row{
			position: relative;
			button{
				position: absolute;
				top: 0;
				left: 0;
				height: 100rpx;
				width: 690rpx;
				opacity: 0;
			}
		}
		
		
	}
</style>
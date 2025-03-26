<template>
	<view class="userUnderlist">
		<user-item :isShowdata="false">
			<template #icondata>
				<uni-icons type="notification-filled" size="20" ></uni-icons>
			</template>
			<template #textdata>
				<view>订阅更新</view>
			</template>
		</user-item>
		
		<user-item :customStyle="customStyle" :isShowdata="false">
			<template #icondata>
				<uni-icons type="flag-filled" size="20"></uni-icons>
			</template>
			<template #textdata>
				<view>常见问题</view>
			</template>
		</user-item>
	</view>
</template>

<script setup>
	import userItem from "@/components/user-item/user-item.vue"
	//为子组件最后一行准备的样式
	const customStyle="border-bottom: 0;"
</script>

<style lang="scss" scoped>
   .userUnderlist{

	   width: 690rpx;
	   margin: 50rpx auto;
	   border: 1px solid #eee;
	   border-radius: 10rpx;
	   box-shadow: 0 0 30rpx rgba(0, 0, 0, 0.05);
   }
</style>
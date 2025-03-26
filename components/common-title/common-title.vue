<template>
	<view class="common-title">
		<view class="name">
			<slot name="left"></slot>
		</view>
		<view class="coustom">
			<slot name="right"></slot>
		</view>
	</view>
</template>
<script>
	 export default{
		 name:'commonTitle'
	 } 
</script>
<script setup>
	
	
</script>

<style lang="scss" scoped>
    .common-title{
		display: flex;
		justify-content: space-between;//两端对齐
		align-items: center;
		padding: 0 30rpx;
		.name{
			font-size: 40rpx;
		}
	}
</style>
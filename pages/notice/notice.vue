<template>
	<view class="noticeLayout">
		<view class="title">
			<view class="tag">
				<uni-tag text="置顶" type="error" inverted="false"  />
			</view>
			<view class="fonttext">
				这个地方填写标题文字
			</view>
		</view>
		
		<view class="info">
			<view class="item">
				  太微应乘风
			</view>
			<view class="item">
				<uni-dateformat :date="Date.now()" format="yyyy-MM-dd hh:mm:ss"></uni-dateformat>
			</view>
		</view>
		
		 <view class="content">
		 	 内容区域：填写说明
		 </view>
		 <view class="count">
		 	阅读1000
		 </view>
		
		
	</view>
</template>

<script setup>
	
</script>

<style>
	       
</style>

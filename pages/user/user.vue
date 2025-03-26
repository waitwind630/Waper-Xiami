<template>
	<view class="userLayout pageBg">
		
		<view class="userinfo">
			<view class="avatar">
				<image src="/static/images/logo.svg" mode="aspectFill"></image>
			</view>
			<view class="ip">119.163.181.236</view>
			<view class="address">来自:浙江</view>
		</view>
		  <view class="section">
		 
			  <user-toplist></user-toplist>
		      <user-underlist></user-underlist>
			  		 		
		  </view>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
	   .userLayout{
		   
		   .userinfo{
			   display: flex;
			   align-items: center;
			   justify-content: center;
			   flex-direction: column;
			   padding: 50rpx 0;
			 
			   .avatar{
				   width: 160rpx;
				   height: 160rpx;
				   border-radius: 50%;
				   overflow: hidden;
				   background-color: blanchedalmond;
				  image{
					  width: 100%;
					  height: 100%;
				  }
			   }
			   .ip{
				   color: #333;
				   font-size: 28rpx;
				   padding: 20rpx 0 5rpx;
			   }
			   .address{
				   color: #aaa;
				   font-size: 42rpx;
			   }
		   }
		   
	   }    
</style>

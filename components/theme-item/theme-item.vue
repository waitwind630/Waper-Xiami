<template>
	<view class="themeItem">
		  <!--大众展示图片-->
		 <navigator :url="`/pages/classlist/classlist?id=${item._id}&name=${item.name}`" class="box" v-if="!isMore">
			 <image class="pic" :src="item.picurl" mode="aspectFill"></image>
			 <view class="mask">{{item.name}}</view>
			 <view class="tab">{{formatTimeDifference(item.updateTime)}}</view>
		 </navigator>
		   <!--更多栏目图片                         由于是跳转到tabbar导航栏页面 需要改变跳转方式  --> 
		 <navigator url="/pages/classify/classify" open-type="switchTab" class="box more" v-if="isMore">
		 			 <image class="pic" src="/common/images/more.jpg" mode="aspectFill"></image>
		 			 <view class="mask">
						 <uni-icons type="more-filled" size="30"></uni-icons>
                          <view class="text">
                          	 更多
                          </view>
					 </view>
		 			
		 </navigator>
	</view>
</template>

<script setup>
	import formatTimeDifference  from '@/hooks/common.js'
defineProps({
	isMore:{
		type:Boolean,
		default:false
	},
	item:{
		type:Object,
		default(){         //对象类型的参数接收需要写成函数返回式
			return{
				name:"默认名称",
				picurl:'/common/images/more.jpg',
				updateTime:Date.now()-1000*60*60*5
			}
		}
		
	}
})

	
</script>

<style lang="scss" scoped>
    .themeItem{
		.box{
			height: 340rpx;
			border-radius: 10rpx;
			overflow: hidden;
			position: relative;
			.pic{
				width: 100%;
				height: 100%;
			}
			.mask{
				width: 100%;
				height: 70rpx;
				position: absolute;
				bottom: 0;
				left: 0;
				background: rgba(0, 0, 0, 0.2);
				color: #fff;
				display: flex;   //使文字居中显示
				align-items: center;  //使里面元素垂直居中
				justify-content: center; //使里面元素水平居中
				backdrop-filter: blur(20rpx);   //将半透明背景进行模糊来达到磨砂效果
			    font-weight: 600px;
				
			     }
		 	.tab{
				position: absolute;
				left: 0;
				top: 0;
				background: rgba(250, 129, 90, 0.7);
				backdrop-filter:  blur(20rpx); 
				color: #fff;
				font-size: 22rpx;
				padding: 6rpx 14rpx;
				border-radius: 0 0 20rpx 0;
				transform: scale(0.8); //缩放元素
				transform-origin: left top;
			}
				 
		}
		.box.more{
			.mask{
				width: 100%;
				height: 100%;
			}
			.text{
				font-size: 23rpx;
			}
		}
	}
</style>
<template>
	<view class="userItem" :style="all.customStyle">
		<view class="left">
			 <slot name="icondata">图片未被插槽替换</slot>
			<view class="left-text">
			    <slot name="textdata">未被插槽替换</slot>
			</view>
		</view>
		<view class="right">
			<view class="right-text" v-show="all.isShowdata">
				0
			</view>
			<uni-icons type="right" size="15" color="#aaa"></uni-icons>	
		</view>
	</view>
</template>

<script setup>
import { onMounted,defineProps } from 'vue';

	//从父组件中得到参数 修改最后一行的样式 使其没有下划线
let  all=defineProps({
		 customStyle: {
		    type:String,  //默认类型使object
		    default: " border-bottom: 10rpx solid #eee;"   //这里为什么使用箭头函数？
			                      //设置 customStyle prop 的默认值为一个空对象。
								  //这里使用了一个函数来返回默认值，这是因为在 Vue 中，
								  //对象类型的默认值需要是一个函数，
			                      //以避免所有组件实例共享同一个对象实例。
		  },
		 isShowdata:{
			 type:Boolean,
			 default:true,
		 }
			
		
		
		
	});
	
		
	
	
</script>

<style lang="scss" scoped>
      .userItem{
		  display: flex;
		  justify-content: space-between;  //二段对齐
		  align-items: center;//垂直对齐
		  padding: 0 30rpx;
		  height: 100rpx;
		  border-bottom: 10rpx solid #eee;
		  background-color: #fff;
		  .left{
			  display: flex;
			  align-items: center;
		   :deep(){
		   	.uni-icons{
		   		color: $brand-theme-color !important; 
		   	        }
		          }	  
			  .left-text{
				  margin-left: 20rpx;
				  color: #666;
			  }
		  }
		  .right{
			  display: flex;
			  align-items: center;
			  .right-text{
				  font-size: 28rpx;
				  color: #aaa;
			  }
			  
		  }
	  }
</style>

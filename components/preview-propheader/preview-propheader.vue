<template>
<view class="popheader">
	 <view class="title">{{title}}</view>
	 <view class="close" @click="clickInfoClose">
			<uni-icons type="closeempty" size="18" color="#999">
			</uni-icons>
			<slot :whatTitle="title"></slot>
	</view>
</view>
</template>

<script setup>
	import { ref } from 'vue'
	//数据
	
	const clickInfoClose1=ref(0)
	
	//判断点击事件是否被阻止
	const { title,isreact } = defineProps(['title','isreact']);
	
	//事件
	//点击关闭图标关闭弹窗
	function clickInfoClose(){
			 // infoPopup.value.close();
			 if (!isreact) {
			     console.log('点击事件被阻止',isreact);
			      return
			   }else{
				   console.log('点击成功',isreact);
				   if(title==="壁纸信息"){
					   console.log('是壁纸信息弹窗传过来的',title)
				   }
			   }
			  
		}
</script>

<style lang="scss" scoped>
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
</style>
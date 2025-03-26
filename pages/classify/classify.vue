<template>
	<view class="classifyLayout pageBg">
		  <custom-nav-bar title="分类"></custom-nav-bar>
		<view class="classify">
			<theme-item v-for="item in classifyList" :key="item._id" :item="item">
				
			</theme-item>
		</view>
	</view>
</template>

<script setup>
	import { ref } from 'vue'
	import { apiGetClassifytList } from '../../api/apis'
	//调用返回专题精选壁纸列表api接口的函数(content)
	const  classifyList=ref([])
	const  getClassifyList= async()=>{
		let  res=await apiGetClassifytList({
			pageSize:15
		})
		
		classifyList.value=res.data
		console.log(classifyList.value)
	}
	
	getClassifyList()
</script>

<style lang="scss" scoped>
 .classify{
	 padding: 30rpx;
	 display: grid;
	 grid-template-columns: repeat(3,1fr);
 }
</style>

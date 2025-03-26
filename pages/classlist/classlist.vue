<template>
	<view class="classlist">
		  <!-- <custom-nav-bar title="分类详情"></custom-nav-bar> -->
		  <view class="LoadLayout" v-if="!classList.length && (noData===true)"> 
		  	<uni-load-more status="loading"></uni-load-more>
		  </view>
		<view class="content">
			 <navigator :url="`/pages/preview/preview?id=${item._id}`" class="item" 
			 v-for="item in classList" :key="item._id">
				 <image :src="item.smallPicurl" mode="aspectFill"></image>
			 </navigator>
		</view>
		<view class="LoadLayout" v-if="classList.length===true">
			<uni-load-more status="noData?'loading':'noMore'"></uni-load-more>
		</view>
	</view>
</template>

<script setup>
	import {ref} from 'vue';
	import {apiGetClassList} from '@/api/apis.js';
	import {onReachBottom,onLoad} from  '@dcloudio/uni-app'
	
	
	const queryParams= {
		pageNum:1,
		pageSize:12
	}  //之所以不用响应式是因为他不需要渲染所以可以不用ref
	
	
	
	//接收从上一个跳转页面navigator标签中传过来的参数！使用onLoad钩子函数
	onLoad((data)=>{
		let {id=null,name=null} =data;
		queryParams.classid=id;
		uni.setNavigationBarTitle({
			title:name
		})
		getClassList() //为什么要放到这里执行呢？因为setup先执行 后执行onLoad函数 所以为了参数的传递：(获取到classID来调用合适的数据渲染分类页面)
	})
	
	
	//定义一个变量用于判断是否还需要请求数据
	const noData=ref(true);
	//触底加载更多 使用onReachBottom钩子函数,改变pageNum值使其加载下一页的数据
	onReachBottom(()=>{
		//如果变为false 就不再触发触底 不再请求数据 因为数据已经请求完了
		if(noData.value===false) {
			return
		};
		queryParams.pageNum++,
		getClassList()
	})
	
	
	//调用返回分类详情页面内容展示api接口的函数（content）
    const classList=ref([])
	const getClassList= async ()=>{
	 let res=await apiGetClassList(queryParams)
	  //如果请求成功 将数据传给classList变量 
	  classList.value=[...classList.value,...res.data]//这段代码的作用是将 res.data 数组中的元素添加到 classList.value 数组中，同时保持 classList.value 的响应性
	    console.log(res.data)
	   //如果发送进来的数据长度已经不足12条：也就是比定义的pageSize12条已经不足,就把NOdata改为false 也就是不再请求接口了
	   if(queryParams.pageSize>res.data.length){
		   noData.value=false
	   }
	   uni.setStorageSync("storageClassList",classList.value)
	   
	} 


</script>

<style lang="scss" scoped>
	       .classlist{
			   .content{
				   display: grid;
				   grid-template-columns: repeat(3,1fr);
				   gap: 5rpx;
				   padding: 5rpx;
				   
			   }
			   .item{
				   height: 440rpx;
				   image{
					   width: 100%;
					   height: 100%;
					   display: block;
				   } 
			   }
		   }
</style>

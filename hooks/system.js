import { computed } from 'vue'





	
	
	//方法
	
const SYSTEM_INFO=uni.getSystemInfoSync()	 //获取系统信息
    //1.获取状态栏高度的函数
  export const getstatusBarHeight=function (){
		
	      return	SYSTEM_INFO.statusBarHeight||15;
	}
	
	//2.获取胶囊按钮高度的函数
   export const getTitleBarHeight =function(){
	   if(uni.getMenuButtonBoundingClientRect){
		  let {top,height}=uni.getMenuButtonBoundingClientRect();//获取胶囊按钮状态 到顶部的距离以及胶囊按钮的高度
          let titleBarHeight= height+(top-getstatusBarHeight()) *2//计算得出标题导航栏的高度
         return titleBarHeight;
	   }else{
		  return 40; 
	   }
	   
	   
	
   }	
   //3.返回填充内容高度的计算属性函数
   
   export const getFillHeight=computed(()=>{
	 return ( getstatusBarHeight()+getTitleBarHeight()+'px')
 })


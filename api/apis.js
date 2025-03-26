import  {request}  from "../hooks/request"

//调用返回导航栏图片轮播区的宠物图片接口的函数（index.vue下的banner）
export function apiGetBanner(data={}){
	 return request({
		 url:"/tools/petShow",
		 data:data
		 })

}

//调用返回每日推荐栏目九张壁纸api接口的函数（index.vue下的select）
export function apigetDayselect(data={}){
	return request({
	  url:"/api/bizhi/randomWall",
	  
    })
	
}

//调用返回每日公告数据api接口的函数（index.vue下的notice）
export function apiGetNotice(data={}){
	return request({
	 url:"/tools/baiduHot",
     data:data
     		
	})
}

//调用返回专题精选壁纸列表api接口的函数(index.vue下的.vue下的content)
export function apiGetClassifytList(data={}){
	return request({
		url:"/api/bizhi/classify",
		data:data
	})
}

//调用返回分类详情页面内容展示api接口的函数（classlist.vue下的content）
export function apiGetClassList(data={}){
    return request({
		url:'/api/bizhi/wallList',
		data:data
	})



}
//调用壁纸评分数据并返回给数据库的api接口的函数（preview.vue下的content）
// export function apiSetupScore(data={}){
//     return request({
// 		url:'/api/bizhi/setupScore',
// 		data:data
// 	})

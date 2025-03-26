const BASE_URL="https://tea.qingnian8.com"


export  function request(config={}){
	
let{
	url,
	method="GET",
	header={},
	data={}
	} = config
	
	url=BASE_URL+url
	// data['size']=6
	
	header['assess-key']='476320'
	// header['assess-key']='865114'
	return new Promise((resolve,reject)=>{
		uni.request({
			url:url,
			header:header,
			method:method,
			data:data,
			success:(res) => {
				if(res.data.errCode===0){
					resolve(res.data)
				}else if(res.data.errCode===400){
					uni.showModal({
						title:"错误提示",
						content:res.data.errMsg,
						showCancel:false
					})
					reject(res.data)
				}else{
					uni.showToast({
						title:res.data.errMsg,
						icon:"none"
					})
				}
			},
			fail:(err)=>{
				reject(err)
			}
		})
	})
	
	
	
}
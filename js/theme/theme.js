/**
 * 主题框架页面JS
 */
var theme = {};

/**
 * 我的信息
 */
theme.clickMyInfo = function(){
	
}

/**
 * 切换用户
 */
theme.clickChangeUser = function(){
	theme.clickLogOff();
}

/**
 * 退出登录
 */
theme.clickLogOff = function(){
	if(window.sessionStorage && typeof window.sessionStorage == "object"){
		try{
			sessionStorage.removeItem("loginState");
			window.location.href = "../../index.html";
		}catch(e){
			alert("cache error:"+e);		
			window.location = "../../index.html";
		}
	}else{
		alert("当前浏览器不支持缓存");		
		window.location = "../../index.html";
	}
}



/**
 * 获取功能菜单信息
 */
theme.getMenuInfo = function() {

}

/**
 * 页面初始化加载
 */
$(function(){
	//获取功能菜单信息
	theme.getMenuInfo();
});


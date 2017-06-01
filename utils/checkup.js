/**
 * 检查用户登录
 */
;((function($,w){
	"use strict";
	var C = function(){
		var currPath = window.location.pathname, tagUrl = "";
		currPath && (tagUrl = currPath.split("pages")[0] + "index.html");
		if(w.sessionStorage && typeof w.sessionStorage == "object"){
			try{
				sessionStorage.getItem("loginState") || (top.location.href = tagUrl);
			}catch(e){
				alert("cache error:"+e);		
				window.location = tagUrl;
			}
		}else{
			alert("当前浏览器不支持缓存");		
			window.location = tagUrl;
		}
	}
	C();
})(jQuery, window));

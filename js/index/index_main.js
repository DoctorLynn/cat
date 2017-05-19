var indexMain = {
	isAdmin: false,
	isFlag: false
};

function indexInitPage(){
	var b = document.getElementById("loginBtn");
	if(b){
		if(typeof window.addEventListener != "undefined"){  
	        // 非IE，支持addEventListener方法  
	        b.addEventListener("click", loginSubmit, false);  
	    }else{  
	    	//IE
	        b.attachEvent("onclick", loginSubmit);  
	    } 
	}
}

function loginSubmit(){
	var u = document.getElementById("userName").value,
		p = document.getElementById("passWord").value,
		isAdmin = indexMain.isAdmin;
	if(u && p){
		var uc = jsonUtil.getJsonfileData("config/index/indexConf.json");
			alert(uc);
			console.log(uc);
			
		if(isAdmin){
			var a = userConf.admin;
			if(a){
				if(u == a.username && p == a.password){
					window.location.href = "pages/theme/theme_main.html";
				}else{
					alert("用户名或密码输入错误!!!");
				}
			}
		}else{
			
//			var v = userConf.visitor, l = v.length, i = 0;
//			if(l > 0){
//				for (; i < l; i++) {
//					if(u == v[i].username && p == v[i].password){
//						indexMain.isFlag = true;
//						break;
//					}
//				}
//				if(indexMain.isFlag){
//					window.location.href = "pages/theme/theme_main.html";
//				}else{
//					alert("用户名或密码输入错误!!!");
//				}
//			}
		}
	}else{
		alert("请输入用户名和密码!");
	}
}

window.onload = function(){  
    indexInitPage();
};
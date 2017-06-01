var indexMain = {
	isAdmin: false,
	isOk: false,
	interval: null
};

function setSessionStorage(){
	var state = true;
	if(window.sessionStorage && typeof window.sessionStorage == "object"){
		try{
			sessionStorage.setItem("loginState", state);
		}catch(e){
			alert("cache error:"+e);		
			state = false;
		}
	}else{
		alert("当前浏览器不支持缓存");
		state = false;
	}
	return state;
}

function checkUserLogin(d, u, p){
	var isAdmin = indexMain.isAdmin;
	if(isAdmin){
		var a = d.admin;
		if(a){
			clearInterval(indexMain.interval);
			jsUtil.maskTopHide();
			if(u == a.username && p == a.password){
				setSessionStorage() && (window.location.href = "pages/theme/theme_main.html");
			}else{
				alert("用户名或密码输入错误!!!"); return false;
			}
		}else{
			alert("ERROR: DATA OBJECT IS NULL!"); return false;
		}
	}else{
		var v = d.visitor, l = v.length, i = 0;
		if(v && l > 0){
			clearInterval(indexMain.interval);
			jsUtil.maskTopHide();
			for (; i < l; i++) {
				if(u == v[i].username && p == v[i].password){
					indexMain.isOk = true;
					break;
				}
			}
			if(indexMain.isOk){
				setSessionStorage() && (window.location.href = "pages/theme/theme_main.html");
			}else{
				alert("用户名或密码输入错误!!!"); return false;
			}
		}else{
			alert("ERROR: DATA OBJECT IS NULL!"); return false;
		}
	}
}

function loginSubmit(){
	var u = document.getElementById("userName").value,
		p = document.getElementById("passWord").value,
		t = new Date().getTime();
	if(u && p){
		jsUtil.maskTopShow();
		var url = "config/index/indexConf.json";
		$.getJSON(url, function(data){
			if(data){
				checkUserLogin(data, u, p);
			}else{
				alert("ERROR: DATA OBJECT IS NULL!"); return false;
			}
		});
		indexMain.interval = setInterval(function(){
			if(t && (new Date().getTime() - t) > 10000){
				jsUtil.maskTopHide();
				clearInterval(indexMain.interval);
				alert("请求超时,请稍候再试!");
				return false;
			}
		}, 1000);
	}else{
		alert("请输入用户名和密码!"); return false;
	}
}

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

window.onload = function(){  
    indexInitPage();
    setSessionStorage() && (window.location.href = "pages/theme/theme_main.html");
};
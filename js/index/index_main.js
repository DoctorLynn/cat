var indexMain = {
	isAdmin: false,
	isOk: false
};

function checkUserLogin(d, u, p){
	var isAdmin = indexMain.isAdmin;
	if(isAdmin){
		var a = d.admin;
		if(a){
			if(u == a.username && p == a.password){
				window.location.href = "pages/theme/theme_main.html";
			}else{
				alert("用户名或密码输入错误!!!");
			}
		}
	}else{
		var v = d.visitor, l = v.length, i = 0;
		if(l > 0){
			for (; i < l; i++) {
				if(u == v[i].username && p == v[i].password){
					indexMain.isOk = true;
					break;
				}
			}
			if(indexMain.isOk){
				window.location.href = "pages/theme/theme_main.html";
			}else{
				alert("用户名或密码输入错误!!!");
			}
		}
	}
}

function loginSubmit(){
	var u = document.getElementById("userName").value,
		p = document.getElementById("passWord").value;
	if(u && p){
		var url = "config/index/indexConf.json";
		$.getJSON(url, function(data){
			if(data){
				checkUserLogin(data, u, p);
			}else{
				alert("ERROR: DATA OBJECT IS NULL!");
			}
		});
	}else{
		alert("请输入用户名和密码!");
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
};
var jsonUtil = {};

/**
 * 获取文件后缀名
 * @param {Object} str
 */
jsonUtil.getFileExt = function(str) { 
	return str.split(".").pop().toLocaleLowerCase();
}

/**
 * 获取json文件中的数据
 * @param {Object} u
 */
jsonUtil.getJsonFileData = function(u){
	var r = null, xhr = null;
	if(window.XMLHttpRequest){  
	    xhr = new XMLHttpRequest();  
	}else if(window.ActiveXObject){  
	    xhr = new window.ActiveXObject();  
	}else{  
	    alert("请升级至最新版本的浏览器");  
	}  
	if(xhr !=null){  
		alert(u);
		alert(jsonUtil.getFileExt(u));
		if(u && jsonUtil.getFileExt(u) == "json"){
			xhr.open("GET", "config/index/indexConf.json", true);  
		    xhr.send(null);  
		    xhr.onreadystatechange=function(){  
		        if(xhr.readyState == 4 && xhr.status == 200){  
		            alert(xhr);
		            alert(xhr.responseText);
		            r = JSON.parse(xhr.responseText);
		            alert(r);
		        }  
	   	 	};  
		}else{
			alert("json配置文件地址错误!");  
		}
	} 
	alert(r);
	return r;
}


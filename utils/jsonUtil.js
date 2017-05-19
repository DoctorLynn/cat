var jsonUtil = {};

/**
 * 获取文件后缀名
 * @param {Object} str
 */
jsonUtil.getFileExt = function(str) { 
	return (/\.[^\.]+$/.exec(str)).toLowerCase(); 
}

/**
 * 获取json文件中的数据
 * @param {Object} u
 */
jsonUtil.getJsonfileData = function(u){
	var r = null, xhr = null;
	if(window.XMLHttpRequest){  
	    xhr = new XMLHttpRequest();  
	}else if(window.ActiveXObject){  
	    xhr = new window.ActiveXObject();  
	}else{  
	    alert("请升级至最新版本的浏览器");  
	}  
	if(xhr !=null){  
		if(u && jsonUtil.getFileExt(u) == "json"){
			xhr.open("GET", u, true);  
		    xhr.send(null);  
		    xhr.onreadystatechange=function(){  
		        if(xhr.readyState == 4 && xhr.status == 200){  
		            r = JSON.parse(xhr.responseText);  
		        }  
	   	 	};  
		}else{
			alert("json文件地址错误!");  
		}
	} 
	return r;
}


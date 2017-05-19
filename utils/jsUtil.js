var jsUtil = {};

/**
 * 获取文件后缀名
 * @param {Object} str
 */
jsUtil.getFileExt = function(str) { 
	return str.split(".").pop().toLocaleLowerCase();
}

/**
 * 线性进度条,不确定进度
 */
jsUtil.maskTopShow = function(){
	$("body").append("<div id='maskTopShow' style='position: absolute; top: -.5rem; left: 0; width: 100%;'><div class='progress'><div class='indeterminate'></div></div><div>");
}
jsUtil.maskTopHide = function(){
	var m = $("body").find("#maskTopShow");
	if(m){
		m.remove();
	}
}

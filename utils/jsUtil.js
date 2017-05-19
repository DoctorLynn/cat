var jsUtil = {};

/**
 * 获取文件后缀名
 * @param {Object} str
 */
jsUtil.getFileExt = function(str) { 
	return str.split(".").pop().toLocaleLowerCase();
}


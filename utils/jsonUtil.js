var jsonUtil = {};

/**
 * 获取文件后缀名
 * @param {Object} str
 */
jsonUtil.getFileExt = function(str) { 
	return str.split(".").pop().toLocaleLowerCase();
}


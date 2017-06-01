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
	if(m){m.remove();}
}

/**
 * 弹出层
 */
;((function($, w){
	var openDialog = function(opt){
		if(opt){
			var ww = $(w).width(), wh = $(w).height(), dw = opt.width, dh = opt.height, dc = opt.content,
            	mask = "<div></div>";
            	
            
            
            
		}
	};
	var closeDialog = function(){
		
	};
	$.extend({
		showDialog: function(options){
    		var _defaults = {
				width: 400,
				height: 300,
				content: null
            },
            _options = $.extend({}, _defaults, options);
            if(_options){
            	openDialog(_options);
            }
		};
		hideDialog: function(){
			closeDialog();
		}
	});
})(jQuery, window));

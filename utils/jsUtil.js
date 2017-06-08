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
			var ww = document.body.clientWidth, 
				wh = document.body.clientHeight, 
				dw = opt.width, 
				dh = opt.height, 
				dc = opt.content,
				contentType = typeof dc,
            	maskDiv = document.createElement("div"),
            	dialogDiv = document.createElement("div"),
            	dialogDivTop = document.createElement("div"),
            	dialogDivTopTitle = document.createElement("span"),
            	dialogDivTopClose = document.createElement("span"),
            	dialogDivMiddle = document.createElement("div");
            maskDiv.id = "dialog-mask-content";
            maskDiv.style.cssText = "display:flex;justify-content:center;align-items:center;position: absolute;top: 0; left: 0; width: "+ww+"px; height: "+wh+"px; background: rgba(180,180,180,.2);-webkit-transform: translateZ(0);";
            dialogDiv.style.cssText = "width: "+dw+"px; height: "+dh+"px; box-shadow: 0 0 12px 2px #888; background: #fff; border-radius: 2px;";
            dialogDivTop.style.cssText = "display: -webkit-flex; display: flex; justify-content: space-between; align-items: center; width: 100%; height: 32px; border-bottom: 1px inset #eee; font-size: 14px; color: #555;";
            dialogDivTopTitle.style.cssText = "padding-left: 5px;";
            dialogDivTopClose.style.cssText = "display: inline-block; padding: 0 8px; font-size: 20px; cursor: pointer;";
            dialogDivMiddle.style.cssText = "display: flex; justify-content: center;align-items: center;width: 100%; height: calc(100% - 32px);";
            dialogDivTopTitle.innerHTML = opt.title;
            dialogDivTopClose.innerHTML = "X";
            dialogDivTopClose.onmouseover = function(){
            	dialogDivTopClose.style.color = "#f00";
            }
            dialogDivTopClose.onclick = function(event){
            	event.stopPropagation();
            	closeDialog();
            }
            maskDiv.onclick = function(event){
            	event.stopPropagation();
            	return false;
            }
            if(contentType == "object"){
            	dialogDivMiddle.appendChild(dc[0]);
            }else if(contentType == "string"){
            	var c = document.getElementById(dc); 
            	c && (c.style.display = "block", dialogDivMiddle.appendChild(c));
            }
            dialogDivTop.appendChild(dialogDivTopTitle);
            dialogDivTop.appendChild(dialogDivTopClose);
            dialogDiv.appendChild(dialogDivTop);
            dialogDiv.appendChild(dialogDivMiddle);
            maskDiv.appendChild(dialogDiv);
            document.body.appendChild(maskDiv);
		}
	};
	var closeDialog = function(){
		var d = document.getElementById("dialog-mask-content");
		if(d){
			document.body.removeChild(d);
		}
	};
	$.extend({
		showDialog: function(options){
    		var _defaults = {
    			title: "",
				width: 500,
				height: 300,
				content: null
            },
            _options = $.extend({}, _defaults, options);
            if(_options){
            	openDialog(_options);
            }
		},
		hideDialog: function(){
			closeDialog();
		}
	});
})(jQuery, window));

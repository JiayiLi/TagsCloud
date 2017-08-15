(function(factory){
	var root = (typeof self === "object" && self.self === self && self) || (typeof global === "object" && global.global === global && global);

	if(typeof define === "function" && define.amd){
		define(['jquery','exports'],function($, exports){
			root.TagCloud = factory(root, exports, $)
		});
	}else if(typeof exports !== "undefined"){
		var $ = require('jquery');
		factory(root, exports, $);
	}else {
		root.TagCloud = factory(root, {}, root.jQuery || root.$);
	}

})(function(root, TagCloud, $){

	var previousTagCloud = root.TagCloud;

	TagCloud.VERSION = "1.0.0";

	TagCloud.noConflict = function(){
		root.TagCloud = previousTagCloud;
		return this;
	}








	return TagCloud;

})
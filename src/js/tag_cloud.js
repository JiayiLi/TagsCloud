//TagsCloud.js
(function(factory){
	var root = (typeof self === "object" && self.self === self && self) || (typeof global === "object" && global.global === global && global);

	if(typeof define === "function" && define.amd){
		define(['jquery'],function($){
			return factory(root, $)
		});
	}else if(typeof exports !== "undefined"){
		var $ = require('jquery');
		module.exports = factory(root, $);
	}else {
		root.TagCloud = factory(root, root.jQuery || root.$);
	}

})(function(root , $){

	var DefaultOptions = {
		color:[],

	}


	var TagsCloud = function(options){
		console.log(this);
		console.log(options);
		var self = this;
	}

	$.extend(TagsCloud.prototype,{
		VERSION : "1.0.0",
		noConflict : function(){

		},
		init : function(){
			console.log("xix");
		}


	})




	$.fn.TagsCloud = $.TagsCloud = TagsCloud ;
	root.TagsCloud = TagsCloud.prototype;

	return TagsCloud;

})
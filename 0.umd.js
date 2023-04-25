;((root, factory) => {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory)
	} else if (typeof exports === 'object') {
		// CommonJS
		var $ = requie('jquery')
		modules.exports = factory($)
	} else {
		// 都不是，浏览器全局定义
		root.testModule = factory(root.jQuery)
	}
})(this, ($) => {
	// do something.. 这是真正的函数体
})

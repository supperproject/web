$(function () {
	if($(window).width()>=800){
		var theUA = window.navigator.userAgent.toLowerCase();
	    if ((theUA.match(/msie\s\d+/) && theUA.match(/msie\s\d+/)[0]) || (theUA.match(/trident\s?\d+/) && theUA.match(/trident\s?\d+/)[0])) {
	        var ieVersion = theUA.match(/msie\s\d+/)[0].match(/\d+/)[0] || theUA.match(/trident\s?\d+/)[0];
	        if (ieVersion < 9) {
	            alert('您的浏览器版本太低！ 推荐使用:谷歌,火狐,其他双核极速模式如果你的使用的是双核浏览器,请切换到极速模式访问');
	        }
	    }
	    
	}
	/***html默认px初始化***/
	    publicObj.resize();
	    $(window).resize(function () {
	        publicObj.resize();
	    });
});
var publicObj = {
	resize:function(){
		document.getElementsByTagName("html")[0].style.fontSize = document.documentElement.clientWidth / 32 + "px";
	},
};



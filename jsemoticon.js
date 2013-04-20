(function () {
	var _cfg = {
		//the id of the html tag which contain your text.
		domID: 'content',

		//the location of your smilies images.
		path: 'http://zhuli.me/wp-content/themes/evolz/images/smilies/',

		//all of the smilies' definition.
		//smilies: the tag you will used in your text; filename: the smilies's filename.
		emotions: [
			{smilies: '[ali啊啊啊]', filename: 'ali_aaa.gif'},
			{smilies: '[ali闭嘴]', filename: 'ali_bizui.gif'},
			{smilies: '[ali不公平]', filename: 'ali_bugongpin.gif'},
			{smilies: '[ali不耐烦]', filename: 'ali_bunaifan.gif'},
			{smilies: '[ali嘲弄]', filename: 'ali_chaonong.gif'},
			{smilies: '[ali大汗]', filename: 'ali_dahan.gif'}
		]
	}



	function replacer(em, index) {
		var metachars = /[[\]{}()*+?.\\|^$\-,&#\s]/g;
		var pattern = em.smilies.replace(metachars, "\\$&");
		var targetNode = document.getElementById(_cfg.domID);
		var origString = targetNode.innerHTML;
		
		var modString = origString.replace(new RegExp(pattern, 'g'), '<img src="' + _cfg.path + em.filename + '" />');
		targetNode.innerHTML = modString;
	}
	
	var emLength = _cfg.emotions.length;
	for (var i = emLength - 1; i >= 0; i--) {
		replacer(_cfg.emotions[i], i)
	};
})()
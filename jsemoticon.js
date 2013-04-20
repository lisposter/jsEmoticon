(function () {
	var _cfg = {
		domID: 'content',
		path: 'http://zhuli.me/wp-content/themes/evolz/images/smilies/',
		emotions: [
			{smilies: ':ali啊啊啊:', filename: 'ali_aaa.gif'},
			{smilies: ':ali闭嘴:', filename: 'ali_bizui.gif'},
			{smilies: ':ali不公平:', filename: 'ali_bugongpin.gif'},
			{smilies: ':ali不耐烦:', filename: 'ali_bunaifan.gif'},
			{smilies: ':ali嘲弄:', filename: 'ali_chaonong.gif'},
			{smilies: ':ali大汗:', filename: 'ali_dahan.gif'}
		]
	}

	var emLength = _cfg.emotions.length;

	function replacer(em, index) {
		var metachars = /[[\]{}()*+?.\\|^$\-,&#\s]/g;
		var pattern = em.smilies.replace(metachars, "\\$&");
		var targetNode = document.getElementById(_cfg.domID);
		var origString = targetNode.innerHTML;
		
		var modString = origString.replace(em.smilies, '<img src="' + _cfg.path + em.filename + '" />');
		targetNode.innerHTML = modString;
	}

	for (var i = emLength - 1; i >= 0; i--) {
		replacer(_cfg.emotions[i], i)
	};
})()
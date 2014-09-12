(function() {
'use strict';

window.onload = function() {
	var e, i = 0,
		index = Math.floor((Math.random() * window.quotes.length)),
		quote = window.quotes[index],
		share_buttons = document.getElementsByClassName('js-share-button'),
		share_click = function (button) {
			var t = button.getAttribute('data-text'),
					u = button.getAttribute('href').replace(/\%t/g,encodeURIComponent(t)).replace(/\%u/g, encodeURIComponent('https://chrome.google.com/webstore/detail/chrometicker/joijepfhjnajmclgemibkchnfkghicpo'));
			window.open(u,'sharer','toolbar=0,status=0,width=626,height=436');
			return false;
		},
		formatDigit = function(d) {
			return (d < 10 ? '0' : '') + d;
		},
		setDateAndTime = function () {
			var currentDate = new Date();
			var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
			document.getElementById('time').innerHTML = formatDigit(currentDate.getHours()) + ':' + formatDigit(currentDate.getMinutes());
			document.getElementById('date').innerHTML = currentDate.getDate() + ' ' + months[currentDate.getMonth()] + ' ' + currentDate.getFullYear();
			setTimeout(setDateAndTime, 30000);
		};
	document.getElementById('quote').innerHTML = quote[0];
	document.getElementById('author').innerHTML = quote[1];
	document.getElementById('get-the-old').onclick = function() {
		chrome.tabs.update({
		    url: 'chrome://apps'
		});
	};
	for (i = 0; i < share_buttons.length; i++) {
	 	e = share_buttons[i];
		e.setAttribute('data-text', '«'+quote[0] + '» ' + quote[1]);
		e.onclick = share_click.bind(this, e);
	}

	// time and date
	setDateAndTime();
};
})();

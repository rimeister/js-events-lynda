var jukeBox = document.querySelector('ul.player');
jukeBox.addEventListener('click', function(e){
	var audioPlayer = document.createElement('audio');
	var songName = e.target.getAttribute('data-src'); // Because data- attribute is custom attribute, we have to use .getAttribute()
	audioPlayer.id = 'player';
	e.target.className = 'playing';
	audioPlayer.src = songName;
	document.body.appendChild(audioPlayer);
	audioPlayer.play();
}, false);
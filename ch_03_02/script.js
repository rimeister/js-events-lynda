var jukeBox = document.querySelector('ul.player');
jukeBox.addEventListener('click', function(e){
	var audioPlayer = document.createElement('audio');
	var songName = e.target.getAttribute('data-src');
	audioPlayer.id = 'player';
	audioPlayer.src = songName;
	document.body.appendChild(audioPlayer);
	audioPlayer.play();
}, false);
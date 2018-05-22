var jukeBox = document.querySelector('ul.player');
jukeBox.addEventListener('click', function(e){
	var songName = e.target.getAttribute('data-src'); // Because data- attribute is custom attribute, we have to use .getAttribute()
	var songPlaying = document.querySelector('#player');

	if (songPlaying) {

		if (songName === songPlaying.getAttribute('src')) {

			if (songPlaying.paused) {

				songPlaying.play();
				e.target.className = 'playing';

			} else {

				songPlaying.pause();
				e.target.className = 'paused';

			}

		} else {

			songPlaying.src = songName;
			songPlaying.play();
			document.querySelector('.playing').className = '';
			e.target.className = 'playing';

		}



	} else {
	
		var audioPlayer = document.createElement('audio');
		audioPlayer.id = 'player';
		e.target.className = 'playing';
		audioPlayer.src = songName;
		document.body.appendChild(audioPlayer);
		audioPlayer.play();

		audioPlayer.addEventListener('ended', function(){
			audioPlayer.parentNode.removeChild(audioPlayer);
			e.target.className = "";
		}, false);

	}

}, false);
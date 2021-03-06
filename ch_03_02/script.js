var jukeBox = document.querySelector('ul.player');
jukeBox.addEventListener('click', function(e){
	var songName = e.target.getAttribute('data-src'); // Because data- attribute is custom attribute, we have to use .getAttribute()
	var audioPlayer = document.querySelector('#player');

	if (audioPlayer) {

		if (songName === audioPlayer.getAttribute('src')) {

			if (audioPlayer.paused) {

				audioPlayer.play();
				e.target.className = 'playing';

			} else {

				audioPlayer.pause();
				e.target.className = 'paused';

			}

		} else {

			audioPlayer.src = songName;
			audioPlayer.play();

			if ( document.querySelector('.playing') ) {
				document.querySelector('.playing').className = '';
				e.target.className = 'playing';
			} else {
				document.querySelector('.paused').className = '';
			}

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
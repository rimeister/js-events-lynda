var dragAndDrop	= (function(){
	
	// Creates a "protected name space". "name spacing" was popularized by Yahoo. See also: closures.
	var myX = '';
	var myY = '';
	var whichArt = '';

	function moveStart(e) {
		whichArt = e.target;
		myX = e.offsetX === undefined ? e.layerX : e.offsetX; // Quick turnary conditional for browser compatability. If offsetX is undefined, use e.layerX instead.
		myY = e.offsetY === undefined ? e.layerY : e.offsetY;
		whichArt.style.zIndex = 10;
	}

	document.querySelector('body').addEventListener('dragstart', moveStart, false);

})();
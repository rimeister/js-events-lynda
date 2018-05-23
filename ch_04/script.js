var dragAndDrop	= (function(){
	
	// Creates a "protected name space". "name spacing" was popularized by Yahoo. See also: closures.
	var myX = '';
	var myY = '';
	var whichArt = '';

	// Event Listeners
	document.querySelector('body').addEventListener('dragstart', moveStart, false);
	document.querySelector('body').addEventListener('dragover', moveDragOver, false);
	document.querySelector('body').addEventListener('drop', moveDrop, false);

	// Functions
	function resetZ() {
		var elements = document.querySelectorAll('img');
		for (var i = elements.length -1; i >= 0; i--) {
			//console.log(elements.length - i + 10);
			elements[i].style.zIndex =  5;
		}
	}

	function moveStart(e) {
		whichArt = e.target;
		myX = e.offsetX === undefined ? e.layerX : e.offsetX; // Quick turnary conditional for browser compatability. If offsetX is undefined, use e.layerX instead.
		myY = e.offsetY === undefined ? e.layerY : e.offsetY;
		resetZ(); // Reset z-index of all other elements to 5
		whichArt.style.zIndex = 10;
	}

	function moveDragOver(e) {
		e.preventDefault();
	}

	function moveDrop(e) {
		e.preventDefault();
		whichArt.style.left = e.pageX - myX + 'px';
		whichArt.style.top = e.pageY - myY + 'px';
	}

})();
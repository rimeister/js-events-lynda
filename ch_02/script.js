document.querySelector('.grid').addEventListener('contextmenu', function(e) { // On mouse over

  e.preventDefault();

  if (e.target.tagName === 'IMG') {

  	var myElement = document.createElement('div'); // Create an element in memory (not in DOM)
  	myElement.className = 'preview'; // Give div 'preview' class name
  	e.target.parentNode.appendChild(myElement); // Put the new div element in the parent (li) of the img being clicked

  	var myImg = document.createElement('img'); // Create a new image element

    // Get the initial X and Y position when right-click happens
    // Apply that to our img element, so the preview appears near cursor
    myElement.style.left = e.offsetX + 15 + 'px';
    myElement.style.top = e.offsetY + 15 + 'px';

    var imgLoc = e.target.src; // get src of image being hovered
  	myImg.src = imgLoc.substring(0,imgLoc.length-7) + '.jpg'; // get rid of last seven characters of the string from target src, add .jpg back on
  	myElement.appendChild(myImg); // Add the new image to the div element created earlier

  	e.target.addEventListener('mouseout', function handler(d){ // Mouseout Event listener inside mouseover event listener. Named function 'handler' instead of anaonymous function
  		var myNode = d.target.parentNode.querySelector('div.preview'); // Go to parent node (<li>) then select child div.preview
  		myNode.parentNode.removeChild(myNode); // Remove the node in roundabout way. Guess you could have also done d.target.parentNode.removeNode(myNode)
  		e.target.removeEventListener('mouseout', handler, false); // Remove the event listener for mouseout. Requires the attributes passed into the addEventListener: event, function name, false
  	}, false);

    e.target.addEventListener('mousemove',function(f){
  
      // When mouse moves, get the X and Y position of cursor
      // Apply that to our img element, so the preview moves with cursor
      myElement.style.left = f.offsetX + 15 + 'px';
      myElement.style.top = f.offsetY + 15 + 'px';
    });

  } // check to see that I clicked on IMG only

}, false); // click event
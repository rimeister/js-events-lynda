document.querySelector('.grid').addEventListener('click',function(e){

	var removeTarget = e.target.parentNode; 
	/* The target of the click is the image, but we 
	want the parent of the image, the <li> */

	/* So, we have to taget the parent of the <li> (the <ul>) so that 
	we can use the removeChild() method to remove the <li> */
	/* It's a circular way of doing things, but that's what he says to do */
	removeTarget.parentNode.removeChild(removeTarget);	


},false);
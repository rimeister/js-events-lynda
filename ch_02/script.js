document.querySelector('.grid').addEventListener('click',function(e){

	var howMany = this.querySelectorAll('li').length;

	if (e.target.tagName === 'IMG') {

		if (howMany > 1) {

			var removeTarget = e.target.parentNode; 
			/* The target of the click is the image, but we 
			want the parent of the image, the <li> */

			/* So, we have to taget the parent of the <li> (the <ul>) so that 
			we can use the removeChild() method to remove the <li> */
			/* It's a circular way of doing things, but that's what he says to do */
			removeTarget.parentNode.removeChild(removeTarget);

		}
	
	}

	if (howMany < 3) {

		document.querySelector('#art p').innerHTML = document.querySelector('.grid li img').alt;

	}


},false);
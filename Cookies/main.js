function bringImage(array) {
	for (imageIndex in array) {
		console.log("hola");
		var element = $('<img>');
		element.attr('src', array[imageIndex]);
		$('.container-image').append(element);
	}
}

function loadSavedImage() {
	var savedImage = JSON.parse(window.localStorage.getItem('favouriteImages'));
	
	if (savedImage) {
		//$('.image').attr("src", savedImage);
		bringImage(savedImage);
	}
}

function getImage() {
	var storedImages = JSON.parse(window.localStorage.getItem('favouriteImages')) || {};
	var url = prompt('Enter the URL of your favourite image');

	storedImages[Object.keys(storedImages).length + 1] = url;
	window.localStorage.setItem('favouriteImages', JSON.stringify(storedImages));
	$('.image').attr("src", url);
}

$('.askURL').click(getImage);

loadSavedImage();



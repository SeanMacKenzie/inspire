function ImageController() {
	//Your ImageService is a global constructor function what can you do here if you new it up?
	var imageService = new ImageService()

	imageService.getImage(function(image) {
		// console.log(image);
		template = ''
		template = `url(${image.url})`
		document.body.style.backgroundImage = template


		
		

	})
}



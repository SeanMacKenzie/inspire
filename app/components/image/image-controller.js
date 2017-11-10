function ImageController() {
	//Your ImageService is a global constructor function what can you do here if you new it up?
	var imageService = new ImageService()

	imageService.getImage(function(image) {
		console.log(image);
		var template = ''
		var image = image.url
		template = `
			<img src="${image}"
		`
		// document.getElementById('body').innerHTML = template
		// drawBody()
	})

	// function drawBody(res) {
	// 	imageService.getImage()
	// 	var template = ''
	// 		template = `
	// 			<img src="${image.large_url}"
	// 		`
		
	// 	document.getElementById('body').innerHTML = template
	// }
	
}



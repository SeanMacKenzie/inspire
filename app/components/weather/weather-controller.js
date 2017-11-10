function WeatherController(){
	var wc = this;
	var weatherService = new WeatherService();
	
	weatherService.getWeather(function(weather){
		console.log(weather);
		// drawWeather()
		
		//What can you do with this weather object?
	})

	function drawWeather(weather){
		weatherService.getWeather()
		var template = ''
		for(var i = 0; i < weather.length; i++){
			var temper = weather[i];
			template += `
			<div class="col-xs-12">
				<h4>${temper.main.temp * (9/5) - 459.67}</h4>
				<h4>High:  Low: 10</h4>
				<h4>${temper.main.name}</h4>
			</div>
			`
		}
		document.getElementById('weather').innerHTML = template
	}
	// drawWeather()
}

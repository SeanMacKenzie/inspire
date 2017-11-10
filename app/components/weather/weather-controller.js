function WeatherController() {
	var wc = this;
	var weatherService = new WeatherService();

	//No longer looking at arrays. Looking at 1 item pulled from the api. Merely need to reference the 1 item, at a particular characteristic
	weatherService.getWeather(function (weather) {
		console.log(weather);
		var template = ''

		template += `
			<div class="col-xs-12">
				<h4>${Math.floor(weather.main.temp * (9 / 5) - 459.67)}°</h4>
				<h4>High: ${Math.floor(weather.main.temp_max * (9 / 5) - 459.67)}° - Low: ${Math.floor(weather.main.temp_min * (9 / 5) - 459.67)}°</h4>
				<h4>${weather.name}</h4>
			</div>
			`

		document.getElementById('weather').innerHTML = template

		//What can you do with this weather object?
	})



}

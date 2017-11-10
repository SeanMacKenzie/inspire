function QuoteController() {

	var quoteService = new QuoteService()

	quoteService.getQuote(function (quote) {
		// console.log('What is the quote', quote)
		drawQuote(quote)
	})

	function drawQuote(quote) {

		var template = ''

		template = `
				<div class="col-xs-12">
					<h4>${quote.quote}</h4>
					<h6>${quote.author}</h6>
				</div>
			`

		document.getElementById('quote').innerHTML = template
	}
}

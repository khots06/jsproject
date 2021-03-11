// const data = null;

// 	const xhr = new XMLHttpRequest();
// 	xhr.withCredentials = true;

// 	xhr.addEventListener("readystatechange", function () {
// 		if (this.readyState === this.DONE) {
// 			console.log(this.responseText);
// 		} else {
// 			console.log('something wrong');
// 		}
// 	});


// xhr.open("GET", "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-recommendations?symbol=APPL");
// xhr.setRequestHeader("x-rapidapi-key", "ad2185fabemsh522f701ad4ebe0bp109193jsn8b214984504b");
// xhr.setRequestHeader("x-rapidapi-host", "apidojo-yahoo-finance-v1.p.rapidapi.com");

// xhr.send(data);

let input = document.getElementById('symbol').value.toUpperCase();
console.log(input);

// function isValidSymbol(input) {
// 	return /^[A-Z]{1,5}(?:\s*\d{6}[PC]\d{8})?$/.test(input);
// }



const data = null;

const xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);

		const regex = /^[A-Z]{1,5}(?:\s*\d{6}[PC]\d{8})?$/;
		console.log(regex.test(input));

		if (regex.test(input) === false) {
			
			$('#regexError').fadeIn('slow', function() {
				$('#regexError').delay(5000).fadeOut();
			});
			
			// document.getElementById('regexError').innerHTML = 'Please enter a valid symbol';
			// document.getElementById('regexError').style.color = 'red';
			// document.getElementById('regexError').style.display = 'block';
		} else {
			document.getElementById('regexError').style.display = 'none';
		}

		regex.lastIndex = 0;

		if (this.responseText === "") {
			document.getElementById('other').innerHTML = 'There isnt a stock with that ticker symbol. Please try another symbol.';
			document.getElementById('basicInfo').style.display = 'none';
			document.getElementById('details').style.display = 'none';
			document.getElementById('statistics').style.display = 'none';
			document.getElementById('other').style.display = 'block';
		};

		var parseData = JSON.parse(xhr.responseText);



		let symbol = parseData.symbol;
		document.getElementById('ticker').innerHTML = 'Ticker Symbol: ' + symbol;
		console.log(symbol);
		;

		let quoteType = parseData.quoteType;
		let name = quoteType.longName;
		document.getElementById('longName').innerHTML = 'Name: ' + name;
		console.log(name);

		if (parseData.price.quoteType === 'EQUITY') {

			document.getElementById('basicInfo').style.display = 'block';
			document.getElementById('details').style.display = 'block';
			document.getElementById('statistics').style.display = 'block';
			document.getElementById('other').style.display = 'none';

			let currentPrice = parseData.financialData.currentPrice.fmt;
			document.getElementById('currentPrice').innerHTML = 'Current Price: $' + currentPrice;
			console.log('Current Price ' + currentPrice);
			
			let open = parseData.summaryDetail.open.fmt;
			document.getElementById('open').innerHTML = 'Market Open: $' + open;
			console.log(open);

			let previousClose = parseData.summaryDetail.previousClose.fmt;
			console.log('Previous Close ' + previousClose);

			let dayChange = Math.round(((currentPrice - previousClose)/previousClose) * 100000)/1000;
			if (dayChange > 0) {
				document.getElementById('dayChange').style.color = 'green';
			} else {
				document.getElementById('dayChange').style.color = 'red';
			}
			document.getElementById('dayChange').innerHTML = 'Day Change: ' + dayChange + '%';
			console.log(dayChange);

			let dayLow = parseData.summaryDetail.dayLow.fmt;
			document.getElementById('dayLow').innerHTML = 'Day Low: $' + dayLow;
			console.log(dayLow);

			let dayHigh = parseData.summaryDetail.dayHigh.fmt;
			document.getElementById('dayHigh').innerHTML = 'Day High: $' + dayHigh;
			console.log(dayHigh);

			let fiftyDayAverage = parseData.summaryDetail.fiftyDayAverage.fmt;
			document.getElementById('fiftyDayAverage').innerHTML = 'Fifty Day Average: $' + fiftyDayAverage;
			console.log(fiftyDayAverage);

			let forwardPE = parseData.summaryDetail.forwardPE.fmt;
			document.getElementById('forwardPE').innerHTML = 'Forward P/E: ' + forwardPE;
			console.log(forwardPE);

			let marketCap = parseData.price.marketCap.fmt;
			document.getElementById('marketCap').innerHTML = 'Market Cap: ' + marketCap;
			console.log(marketCap);

			let dividendYield = parseData.summaryDetail.dividendYield.fmt;
			document.getElementById('dividendYield').innerHTML = 'Dividend Yield: ' + dividendYield;
			console.log(dividendYield);

			let freeCashflow = parseData.financialData.freeCashflow.fmt;
			document.getElementById('freeCashflow').innerHTML = 'Free Cashflow: $' + freeCashflow;
			console.log(freeCashflow);

			let operatingCashflow = parseData.financialData.operatingCashflow.fmt;
			document.getElementById('operatingCashflow').innerHTML = 'Operating Cashflow: $' + operatingCashflow;
			console.log(operatingCashflow);

			let returnOnAssets = parseData.financialData.returnOnAssets.fmt;
			document.getElementById('returnOnAssets').innerHTML = 'Return on Assets: ' + returnOnAssets;
			console.log(returnOnAssets);

			let returnOnEquity = parseData.financialData.returnOnEquity.fmt;
			document.getElementById('returnOnEquity').innerHTML = 'Return on Equity: ' + returnOnEquity;
			console.log(returnOnEquity);

			let earningsGrowth = parseData.financialData.earningsGrowth.fmt;
			document.getElementById('earningsGrowth').innerHTML = 'Earnings Growth: ' + earningsGrowth;
			console.log(earningsGrowth);

			let pegRatio = parseData.defaultKeyStatistics.pegRatio.fmt;
			document.getElementById('pegRatio').innerHTML = 'Price/Earnings to Growth Ratio: ' + pegRatio;
			console.log(pegRatio);

			let recommendationKey = parseData.financialData.recommendationKey;
			document.getElementById('recommendationKey').innerHTML = 'Yahoo Finance Recommendation: ' + recommendationKey;
			console.log(recommendationKey);
		} else {
			document.getElementById('basicInfo').style.display = 'block';
			document.getElementById('details').style.display = 'none';
			document.getElementById('statistics').style.display = 'none';
			document.getElementById('other').style.display = 'block';
			document.getElementById('other').innerHTML = 'This tool is only used for individual stocks.  Please enter a stock ticker symbol.'
		};

		console.log(parseData);
	}
});
	// 	document.getElementById('basicInfo').innerHTML = 'There is no stock associated with that symbol.  Please enter a different symbol.'
	// 	document.getElementById('details').style.display = 'none';
	// 	document.getElementById('statistics').style.display = 'none';
	// };



xhr.open("GET", "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-statistics?symbol=" + input);
xhr.setRequestHeader("x-rapidapi-key", "ad2185fabemsh522f701ad4ebe0bp109193jsn8b214984504b");
xhr.setRequestHeader("x-rapidapi-host", "apidojo-yahoo-finance-v1.p.rapidapi.com");

xhr.send(data);


document.getElementById('submit').addEventListener('click', function () {

	let input = document.getElementById('symbol').value.toUpperCase();
	console.log(input);

	const regex = /^[A-Z]{1,5}(?:\s*\d{6}[PC]\d{8})?$/;
	console.log(regex.test(input));

	if (regex.test(input) === false) {
		$('#regexError').fadeIn('slow', function() {
			$('#regexError').delay(5000).fadeOut();
		});
	} else {
		document.getElementById('regexError').style.display = 'none';
	}

	regex.lastIndex = 0;

	xhr.open("GET", "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-statistics?symbol=" + input);
	xhr.setRequestHeader("x-rapidapi-key", "ad2185fabemsh522f701ad4ebe0bp109193jsn8b214984504b");
	xhr.setRequestHeader("x-rapidapi-host", "apidojo-yahoo-finance-v1.p.rapidapi.com");
	
	xhr.send(data);
});

document.getElementById('symbol').addEventListener('keyup', function(e) {
	if (e.key === 'Enter') {
		let input = document.getElementById('symbol').value.toUpperCase();
		console.log(input);

		const regex = /^[A-Z]{1,5}(?:\s*\d{6}[PC]\d{8})?$/;
		console.log(regex.test(input));

		if (regex.test(input) === false) {
			$('#regexError').fadeIn('slow', function() {
				$('#regexError').delay(5000).fadeOut();
			});
		} else {
			document.getElementById('regexError').style.display = 'none';
		}

		regex.lastIndex = 0;

		xhr.open("GET", "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-statistics?symbol=" + input);
		xhr.setRequestHeader("x-rapidapi-key", "ad2185fabemsh522f701ad4ebe0bp109193jsn8b214984504b");
		xhr.setRequestHeader("x-rapidapi-host", "apidojo-yahoo-finance-v1.p.rapidapi.com");
		
		xhr.send(data);
	}
});
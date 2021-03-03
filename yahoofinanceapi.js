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

const data = null;

// let stockDetails = (
// 	symbol: ,
// 	regularMarketDayRange: ,
// 	regularMarketChangePercent: 
// )

const xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
		var parseData = JSON.parse(xhr.responseText);

		// myArray = Object.values(parseData);
		
		// info = Object.values(myArray[0]);
		// var node = document.createElement("LI");
		// var textnode = document.createTextNode(info);
		// node.appendChild(textnode);
		// document.getElementById('myList').appendChild(node);

		
		// for (i = 0; i < myArray.length; i += 1) {
		// 	info = Object.values([i]);
		// 		for (i = 0; i< info.length; i += 1) {
		// 			var node = document.createElement("LI");
		// 			var textnode = document.createTextNode([i]);
		// 			node.appendChild(textnode);
		// 			document.getElementById('myList').appendChild(node);
		// 		}
		// };
		
		// document.getElementById('statistics').innerHTML = myArray;


		// Object.keys(parseData).forEach(key => {
		// 	document.getElementById('statistics').innerHTML = parseData[key];
		// })

		let symbol = parseData.symbol;
		document.getElementById('ticker').innerHTML = symbol;
		console.log(symbol);

		let quoteType = parseData.quoteType;
		let name = quoteType.longName;
		document.getElementById('longName').innerHTML = name;
		console.log(name);

		let currentPrice = parseData.financialData.currentPrice.fmt;
		document.getElementById('currentPrice').innerHTML = currentPrice;
		console.log(currentPrice);
		
		let open = parseData.summaryDetail.open.fmt;
		document.getElementById('open').innerHTML = open;
		console.log(open);

		let dayLow = parseData.summaryDetail.dayLow.fmt;
		document.getElementById('dayLow').innerHTML = dayLow;
		console.log(dayLow);

		let dayHigh = parseData.summaryDetail.dayHigh.fmt;
		document.getElementById('dayHigh').innerHTML = dayHigh;
		console.log(dayHigh);

		let fiftyDayAverage = parseData.summaryDetail.fiftyDayAverage.fmt;
		document.getElementById('fiftyDayAverage').innerHTML = fiftyDayAverage;
		console.log(fiftyDayAverage);

		// let oneYearChange = parseData.defaultKeyStatistics.52WeekChange.fmt;
		// document.getElementById('52WeekChange').innerHTML = oneYearChange;
		// console.log('52WeekChange');

		let freeCashflow = parseData.financialData.freeCashflow.fmt;
		document.getElementById('freeCashflow').innerHTML = freeCashflow;
		console.log(freeCashflow);

		let operatingCashflow = parseData.financialData.operatingCashflow.fmt;
		document.getElementById('operatingCashflow').innerHTML = operatingCashflow;
		console.log(operatingCashflow);

		let returnOnAssets = parseData.financialData.returnOnAssets.fmt;
		document.getElementById('returnOnAssets').innerHTML = returnOnAssets;
		console.log(returnOnAssets);

		let returnOnEquity = parseData.financialData.returnOnEquity.fmt;
		document.getElementById('returnOnEquity').innerHTML = returnOnEquity;
		console.log(returnOnEquity);

		let earningsGrowth = parseData.financialData.earningsGrowth.fmt;
		document.getElementById('earningsGrowth').innerHTML = earningsGrowth;
		console.log(earningsGrowth);

		let pegRatio = parseData.defaultKeyStatistics.pegRatio.fmt;
		document.getElementById('pegRatio').innerHTML = pegRatio;
		console.log(pegRatio);

		let recommendationKey = parseData.financialData.recommendationKey;
		document.getElementById('recommendationKey').innerHTML = recommendationKey;
		console.log(recommendationKey);

		console.log(parseData);


		// let currPrice = parseData.financialData.currentPrice.raw;
		// document.getElementById('details').innerHTML = currPrice
		// console.log(currPrice);
	}

});



xhr.open("GET", "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-statistics?symbol=AAPL&region=US");
xhr.setRequestHeader("x-rapidapi-key", "ad2185fabemsh522f701ad4ebe0bp109193jsn8b214984504b");
xhr.setRequestHeader("x-rapidapi-host", "apidojo-yahoo-finance-v1.p.rapidapi.com");

xhr.send(data);

// let growth = xhr.financialData.earningsGrowth.fmt;
// console.log(growth);
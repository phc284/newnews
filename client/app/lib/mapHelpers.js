
var mongoKeyParser = function(mongoData) {
	let regionalizedData = {
		'nAmerica' : [],
		'sAmerica' : [],
		'Europe' : [],
		'Africa' : [],
		'Asia' : [],
		'Oceania' : [],
	}

	mongoData.forEach((entry) => { regionalizedData[entry.continent].push(entry); });

	console.log('regionalized data: ', regionalizedData);

	let result = [];

	for(let region in regionalizedData) { 
		result = result.concat(regionalizedData[region].sort((a, b) => { return b.matching_results - a.matching_results; }).slice(0, 5));
	}

	return result;
}

module.exports = {
	mongoKeyParser: mongoKeyParser,
}
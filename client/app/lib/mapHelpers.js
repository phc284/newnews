
var mongoKeyParser = function({keys, topArticles}) {
	let regionalizedData = {
		'nAmerica' : [],
		'sAmerica' : [],
		'Europe' : [],
		'Africa' : [],
		'Asia' : [],
		'Oceania' : [],
	}

	// mongoData.forEach((entry) => { regionalizedData[entry.continent].push(entry); });
	keys.forEach((entry) => { regionalizedData[entry.continent].push(entry); });

	for(let region in regionalizedData) {
		regionalizedData[region] = regionalizedData[region].sort((a, b) => { return b.matching_results - a.matching_results; }).slice(0, 15);
	}

	return regionalizedData;

}

module.exports = {
	mongoKeyParser: mongoKeyParser,
}

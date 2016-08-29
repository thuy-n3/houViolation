//fetch best report from api router 

fetchBestReports: function(inputQuery){

	var passedReportsByLocation = {}

	$.getJSON("/api/getBestRated")
		.then(dbResult)

		console.log(dbResult)
}
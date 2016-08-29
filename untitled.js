fetchBestReport = function(inputQuery){
	var passedReportsByLocation = {}

	$.getJSON("/api/getBestRated")
		.then((dbResults)=>{

			dbResults.forEach((location)=>{
				passedReportsByLocation[location._id] = location.inspectionsPassed
			})

			let listOfAddresses = dbResults.map((passedReports)=>{
				return passedReports._id
			})

			return Actions.fetchReports({

				"FacilityFullStreetAddress": {
					"$in" : listOfAddresses
				}, 

				"InspectionStatus": "PASS"
			})
		}).then((passedReportsFullRecord)=>{
			console.log("passed fullReport", passedReportsFullRecord)
			console.log("passed by location", passedReportsByLocation)
		})
}
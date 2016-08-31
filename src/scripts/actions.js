import $ from 'jquery'

import {CohCollection} from './models/models'
import COH_Store from './store'

//7. Establish actions module 

const Actions = {

	//create a fetch method: to query for data 
	fetchReports: function(inputQuery){
		
		return COH_Store.data.collection.fetch({
			data: inputQuery || {}
		})
	}, 


	// fetchWorstReports: function(inputQuery){
	// 	// COH_Store.data.collection.url = '/api/getWorstRated'
	// 	//passing in the the api url to the getWorstRated end point so the filered collection to be pass through
	// 	$.getJSON("/api/getWorstRated")
	// 		.then((dbResults)=>{
	// 			console.log('from actions - the result from db',dbResults)

	// 			//use dbResult and interate over to populate the Actipons.fetchReports dynamicly 

	// 			return Actions.fetchReports({
					
	// 				"FacilityFullStreetAddress" : {
	// 					"$in": ["421 SAN JACINTO", "7303 BREEN DR STE A"]
	// 				},

	// 				"InspectionStatus": "FAIL"
	// 			})
	// 		})
	// 		.then((allReports)=>{
	// 			console.log("from actions - object of allReports",allReports)
	// 			console.log("from actions - collection after fetchReports",COH_Store.data.collection)

	// 			//check out the COH_Store.data.collection for fetch data....might have to put into a collection 
	// 		})
	// },

	// fetchWorstReports: function(inputQuery){
	// 	$.getJSON("/api/getWorstRated")
	// 		.then((dbResults)=> {

	// 			dbResults.map( (failedReport)=>{
	// 				return Actions.fetchReports({

	// 					"FacilityFullStreetAddress": {
	// 						"$in": failedReport._id
	// 					}, 
	// 					"InspectionStatus": failedReport.inspectionFailed
	// 				})
	// 			})

	// 		})
	// 		.then((allReports)=>{
	// 			console.log("from actions - object of allReports", allReports)
	// 			console.log("from actions - collection after fetchReports", COH_Store.data.collection)
	// 		})
	// },


//fetch worst report from api route/ fetch full profile of worst report and filter data to render top 10 worst  	

	fetchWorstReports: function(inputQuery){

		var failedReportsByLocation = {}

		$.getJSON("/api/getWorstRated")
			.then((dbResults)=>{

				dbResults.forEach((location)=>{
					failedReportsByLocation[location._id] = location.inspectionsFailed

				})

				let listOfAddresses = dbResults.map((failedReport)=>{
					
					return failedReport._id
				})

				return Actions.fetchReports({

					"FacilityFullStreetAddress": {
						"$in" : listOfAddresses
					}, 
					
					"InspectionStatus": "FAIL"
				})
			}).then( (failureReportsFullRecord) =>{
				console.log("failed fullReport",failureReportsFullRecord)
				console.log("failed by location",failedReportsByLocation)
				console.log("address of location fail",failureReportsFullRecord[0].FacilityFullStreetAddress)

				let firstFailedReportAddress = failureReportsFullRecord[0].FacilityFullStreetAddress

				// let listOfFailedPlaces = {}
				// failureReportsFullRecord.forEach( (record)=>{
				// 	listOfFailedPlaces
				// })

				console.log(" # failed Reports by location with Address",failedReportsByLocation[firstFailedReportAddress])

				var directoryOfRestaurantsThatFailed = {}

				failureReportsFullRecord.forEach( function(record){
					if ( !directoryOfRestaurantsThatFailed[record.FacilityName] ) {
							directoryOfRestaurantsThatFailed[record.FacilityName] = {
							facilityName: record.FacilityName,
							inspectionsFailed: failedReportsByLocation[record.FacilityFullStreetAddress],
							facilityAddress: record.FacilityFullStreetAddress, 
							facilityZip: record.FacilityZip,
							cuisine: record.Cuisine
						}
					}
				})


				console.log("directory of Restaurant that failed",directoryOfRestaurantsThatFailed)

				let listOfFaileds = []
				for (var prop in directoryOfRestaurantsThatFailed){
					listOfFaileds.push(directoryOfRestaurantsThatFailed[prop])
				}
				console.log("list of Faileds from actions", listOfFaileds)
				COH_Store._set('worstList', listOfFaileds)
			})
	},



// fetch the best report from api router 

	
	fetchBestReports: function(inputQuery){

	var passedReportsByLocation = {}

	$.getJSON("/api/getBestRated")
		.then((dbResults)=>{

			dbResults.forEach((location)=>{
				passedReportsByLocation[location._id] = location.inspectionsPassed
			})

			let listOfAddresses = dbResults.map((passedReport)=>{

				return passedReport._id
			})

			return Actions.fetchReports({

				"FacilityFullStreetAddress": {
					"$in" : listOfAddresses
				},

				"InspectionStatus": "PASS"
			})
		}).then((passedReportsFullRecords)=>{

			console.log("passed fullReport", passedReportsFullRecords)
			console.log("passed by location", passedReportsByLocation)
			console.log("address of location of passed", passedReportsFullRecords[0].FacilityFullStreetAddress)


			let firstPassedReportAddress = passedReportsFullRecords[0].FacilityFullStreetAddress

			console.log("firstPassedReportAddress",firstPassedReportAddress)
			console.log("#passed Reports by location with Address", passedReportsByLocation[firstPassedReportAddress])


			var directoryOfRestaurantsThatPassed = {}

			passedReportsFullRecords.forEach( function(record){
				if( !directoryOfRestaurantsThatPassed[record.FacilityName]){
					directoryOfRestaurantsThatPassed[record.FacilityName]= {
						facilityName:record.FacilityName,
						inspectionsPassed: passedReportsByLocation[record.FacilityFullStreetAddress],
						facilityAddress: record.FacilityFullStreetAddress,
						facilityZip: record.FacilityZip,
						cuisine: record.Cuisine
					}
				}
			})

			// passedReportsFullRecords.forEach( function(record){
			// 	if( !directoryOfRestaurantsThatPassed[record.FacilityName] ){
			// 		directoryOfRestaurantsThatPassed[record.facilityName] = {
			// 			facilityName: record.FacilityName, 
			// 			inspectionsPassed: passedReportsByLocation[record.FacilityFullStreetAddress],
			// 			facilityAddress: record.FacilityFullStreetAddress, 
			// 			facilityZip: record.FacilityZip

			// 		}
			// 	}

			// })


			console.log("directory of Restaurants that passed",directoryOfRestaurantsThatPassed)

			let listOfPassed = []
			for(var prop in directoryOfRestaurantsThatPassed){
				listOfPassed.push(directoryOfRestaurantsThatPassed[prop])
			}

			console.log("list of Passed from actions", listOfPassed)
			COH_Store._set('bestList', listOfPassed)

		})
	},



	fetchSearchReports: function(inputQuery){

		return COH_Store.data.collection.fetch({
			data: inputQuery || {}
		})
	
	},
	

	fetchWeeklyReports: function(inputQuery){ 	//ROACH ROULETTE FETCH @ RANDOM 
		
		return COH_Store.data.collection.fetch({
			data: inputQuery || {}
		})


	},

	
	updateView: function(viewString){
		COH_Store.set('viewType', viewString)
	} 


}




export default Actions 
// Actions.fetchReports({FacilityName: x? }) --> pass in the data attribute

//fetch from the apiRouter of best or worstRating 
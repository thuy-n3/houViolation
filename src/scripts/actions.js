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

	fetchWeeklyReports: function(inputQuery){
		
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

	fetchWorstReports: function(inputQuery){
		var failedReportsByLocation ={}


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
							facilityZip: record.FacilityZip
						}
					}
				})

				console.log(directoryOfRestaurantsThatFailed)
				let listOfFaileds = []
				for (var prop in directoryOfRestaurantsThatFailed){
					listOfFaileds.push(directoryOfRestaurantsThatFailed[prop])
				}
				console.log("list of Faileds from actions", listOfFaileds)
				COH_Store._set('worstList', listOfFaileds)
			})


	},


	fetchSearchReports: function(inputQuery){
		//COH_Store.data.
	},

	
	updateView: function(viewString){
		COH_Store.set('viewType', viewString)
	}


}

export default Actions  


// Actions.fetchReports({FacilityName: x? }) --> pass in the data attribute

//fetch from the apiRouter of best or worstRating 
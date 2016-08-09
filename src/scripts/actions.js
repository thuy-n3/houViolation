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

	fetchWorstReports: function(inputQuery){
		// COH_Store.data.collection.url = '/api/getWorstRated'
		//passing in the the api url to the getWorstRated end point so the filered collection to be pass through
		$.getJSON("/api/getWorstRated")
			.then((dbResults)=>{
				console.log('the result from db',dbResults)

				//use dbResult and interate over to populate the Actipons.fetchReports dynamicly 

				return Actions.fetchReports({
					
					"FacilityFullStreetAddress" : {
						"$in": ["421 SAN JACINTO", "7303 BREEN DR STE A" ]
					},

					"InspectionStatus": "FAIL"
				})
			})
			.then((allReports)=>{
				console.log("object of allReports",allReports)
				console.log("collection after fetchReports",COH_Store.data.collection)

				//check out the COH_Store.data.collection for fetch data....might have to put into a collection 
			})
	},

	// fetchSearchReports: function(inputQuery){
	// 	//COH_Store.data.
	// },

	//ASk TRAVIS!! How does updateView relate to set in actions.js??
	updateView: function(viewString){
		COH_Store.set('viewType', viewString)
	}


}

export default Actions  


// Actions.fetchReports({FacilityName: x? }) --> pass in the data attribute

//fetch from the apiRouter of best or worstRating 
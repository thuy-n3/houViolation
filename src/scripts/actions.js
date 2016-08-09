import {CohCollection} from './models/models'
import COH_Store from './store'

//7. Establish actions module 

const Actions = {

	//create a fetch method: to query for data 
	fetchReports: function(inputQuery){
		COH_Store.data.collection.fetch()
	}, 

	fetchWeeklyReports: function(inputQuery){
		COH_Store.data.collection.fetch()
	},

	// fetchQueryReports: function(inputQuery){
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
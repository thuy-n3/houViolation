import React from 'React'
import COH_Store from '../store'
import Actions from '../actions'
import {CohCollection, ReportModel} from '../models/models'
import $ from 'jquery'
import Header from './header'


const SearchView = React.createClass({


	// getInitialState: function(){
	// 	console.log("collection from store", COH_Store.data.collection)
	// 	return COH_Store._getData()
	// },

	// componentWillMount: function(){
	// 		console.log("collection from store", COH_Store.data.collection)

			
	// 		Actions.fetchReports()

	// 		COH_Store.on('updateContent', ()=> { 
	// 			this.setState(COH_Store._getData())
	// 		})
	// },

	// componentWillUnMount: function(){
	// 	COH_Store.off('updateContent')

	// },

	render: function(){
		return(
			<div className="viewAll">

				<h1>Search For Roaches</h1>

				<Header />

				<input className="searchBox" type="text" placeholder="Enter Restaurant Name"></input>

				 {/* <ReportContainer collection={this.state.collection} /> */}

			</div>
		)
	}
})

// const ReportContainer = React.createClass({

// 	render: function(){
		
// 		return(
// 			<div className="reportContainer">

// 				<h1>Search The Roach Report</h1>



// 				{this.props.collection.map(	(model)=> <Reports reportsModel={model} key={model.id}/> 

// 				)}

// 			</div>
// 		)
// 	}
// })

// const Reports = React.createClass({

// 	render: function(){
// 		// console.log("from Report", this.props.reportsModel)
// 		return (
// 			<div className="reports">

				
// 				<h3>Name: {this.props.reportsModel.get('FacilityName')}</h3>


// 			</div>
// 		)
// 	}
// })

export default SearchView 

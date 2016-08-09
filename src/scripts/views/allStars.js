import React from 'React'
import COH_Store from '../store'
import Actions from '../actions'
import {CohCollection, ReportModel} from '../models/models'
import $ from 'jquery'
import Header from './header'

const AllStars = React.createClass({

	// getInitialState: function(){
	// 	console.log("collection from store", COH_Store.data.collection)
	// 	return COH_Store._getData()
	// },

	// componentWillMount: function(){
	// 		console.log("collection from store", COH_Store.data.collection)

	// 		Actions.fetchAllStarReports()

	// 		COH_Store.on('updateContent', ()=> { 
	// 			this.setState(COH_Store._getData())
	// 		})
	// },

	// componentWillUnMount: function(){
	// 	COH_Store.off('updateContent')

	// },

	render: function(){
		return(
			<div className="allStarView">

				<h1>All Stars</h1>

				<Header />
				
				{ /* <WeeklyContainer collection={this.state.collection}/> */ }

				<h3 className="starIntro">All Stars are restaurants repeatly pass their inspection report with flying colors</h3>

			</div>
		)
	}

})

export default AllStars
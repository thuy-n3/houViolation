import React from 'React'
import COH_Store from '../store'
import Actions from '../actions'
import {CohCollection, ReportModel} from '../models/models'

const HomeView = React.createClass({

	getInitialState: function(){
		// console.log("collection from store", COH_Store.data.collection)
		return COH_Store._getData()
	},

	componentWillMount: function(){
			// console.log("collection from store", COH_Store.data.collection)

			let getReport 

			
			Actions.fetchReports(getReport)

			COH_Store.on('updateContent', ()=> { 
				this.setState(COH_Store._getData())
			})
	},

	componentWillUnMount: function(){
		COH_Store.off('updateContent')

	},



	render: function(){
		console.log("the report collection",this.state.collection)
		return(
			<div className="homeView">

				<h1>The Roach Report</h1>

				



			</div>
		)
	}
})


//<WeeklyView weekColl=/>

// 	<viewAll allColl={this.state.collection} />
	
export default HomeView 
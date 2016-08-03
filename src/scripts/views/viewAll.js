import React from 'React'
import COH_Store from '../store'
import Actions from '../actions'
import {CohCollection, ReportModel} from '../models/models'
import $ from 'jquery'

const ViewAll = React.createClass({


	getInitialState: function(){
		// console.log("collection from store", COH_Store.data.collection)
		return COH_Store._getData()
	},

	componentWillMount: function(){
			console.log("collection from store", COH_Store.data.collection)

			
			Actions.fetchReports()

			COH_Store.on('updateContent', ()=> { 
				this.setState(COH_Store._getData())
			})
	},

	componentWillUnMount: function(){
		COH_Store.off('updateContent')

	},

	render: function(){
		return(
			<div className="viewAll">

				<ReportContainer collection={this.state.collection} />

			</div>
		)
	}
})

const ReportContainer = React.createClass({

	render: function(){
		
		return(
			<div className="reportContainer">

				<h1>All Roach Report</h1>

				{this.props.collection.map(	(model)=> <Reports reportsModel={model} /> 

				)}

			</div>
		)
	}
})

const Reports = React.createClass({

	render: function(){
		console.log("from Report", this.props.reportsModel)
		return (
			<div className="reports">
				
				<h2>{this.props.reportsModel.get('FacilityName')}</h2>
				<h4>{this.props.reportsModel.get('FacilityFullStreetAddress')}</h4>
				<h4>{this.props.reportsModel.get('Cuisine')}</h4>
				<h4>{this.props.reportsModel.get('InspectionStatus')}</h4>

			</div>
		)
	}
})

export default ViewAll
import React from 'React'
import COH_Store from '../store'
import Actions from '../actions'
import {CohCollection, ReportModel} from '../models/models'
import $ from 'jquery'


const WeeklyView = React.createClass({

	getInitialState: function(){
		console.log("collection from store", COH_Store.data.collection)
		return COH_Store._getData()
	},

	componentWillMount: function(){
			console.log("collection from store", COH_Store.data.collection)

			Actions.fetchWeeklyReports()

			COH_Store.on('updateContent', ()=> { 
				this.setState(COH_Store._getData())
			})
	},

	componentWillUnMount: function(){
		COH_Store.off('updateContent')

	},

	render: function(){
		return(
			<div className="weeklyView">
				
				<WeeklyContainer collection={this.state.collection}/>

			</div>
		)
	}
})

const WeeklyContainer = React.createClass({

	render: function(){
		return(
			<div className="weeklyContainer">

				<h1>this is the weekly Report </h1>

				{this.props.collection.map( (model)=> <WeeklyReports weeklyModel={model} key={model.id} />

				)}
				
			</div>
		)
	}

})

const WeeklyReports = React.createClass({

	render: function(){
			console.log("from weeklyReport", this.props.weeklyModel)
		return(
			<div className="weeklyReports">

				<h3>Name: {this.props.weeklyModel.get('FacilityName') }</h3>
				<h5>Address: {this.props.weeklyModel.get('FacilityFullStreetAddress') }</h5>
				<h5>Zip: {this.props.weeklyModel.get('Zip') }</h5>
				<h5>Cuisine: {this.props.weeklyModel.get('Cuisine') }</h5>
				<h5>Inspection Date: {this.props.weeklyModel.get('InspectionDate') }</h5>
				<h5>Inspection Status: {this.props.weeklyModel.get('InspectionStatus') }</h5>
				<h5>FacilityRiskScore: {this.props.weeklyModel.get('FacilityRiskScore') }</h5>

				
			</div>
		)
	}
})



export default WeeklyView

import React from 'React'
import COH_Store from '../store'
import Actions from '../actions'
import {CohCollection, ReportModel} from '../models/models'
import $ from 'jquery'
import Header from './header'


//===>this page might turn into an 'ABOUT' page or 'random roach - roach roulette'


const RoachRoulette  = React.createClass({

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


				
				<RouletteContainer collection={this.state.collection}/>


			</div>
		)
	}
})

const RouletteContainer = React.createClass({

	render: function(){
		return(
			<div className="weeklyContainer">

				<h1> The Roach Roulette</h1>

				<Header />

				{this.props.collection.map( (model)=> <RouletteReports rouletteModel={model} key={model.id} />

				)}
				
			</div>
		)
	}

})

const RouletteReports = React.createClass({

	render: function(){
			console.log("from weeklyReport", this.props.rouletteModel)
		return(
			<div className="weeklyReports">

				<h3>Name: {this.props.rouletteModel.get('FacilityName') }</h3>
				<h5>Address: {this.props.rouletteModel.get('FacilityFullStreetAddress') }</h5>
				<h5>Zip: {this.props.rouletteModel.get('Zip') }</h5>
				<h5>Cuisine: {this.props.rouletteModel.get('Cuisine') }</h5>
				<h5>Inspection Date: {this.props.rouletteModel.get('InspectionDate') }</h5>
				<h5>Inspection Status: {this.props.rouletteModel.get('InspectionStatus') }</h5>
				<h5>FacilityRiskScore: {this.props.rouletteModel.get('FacilityRiskScore') }</h5>

				
			</div>
		)
	}
})



export default RoachRoulette

import React from 'React'
import COH_Store from '../store'
import Actions from '../actions'
import {CohCollection, ReportModel} from '../models/models'
import $ from 'jquery'
import Header from './header'


//===>this page might turn into an 'ABOUT' page or 'random roach - roach roulette'


const RoachRoulette = React.createClass({

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
			<div className="rouletteContainer">

				<header className="hero">

					<div className="container-narrow">

						<h1 className="rouletteTitle"> The Roach Roulette</h1>

						<h3 className="subtitle"> Be adventurous, try a new restaurant </h3>

						<Header />

					</div>

				</header>


				{this.props.collection.map( (model)=> <RouletteReports rouletteModel={model} key={model.id} />

				)}
				
			</div>
		)
	}

})


// const RouletteReports = React.createClass({

// 	render: function(){
// 			console.log("from weeklyReport", this.props.rouletteModel)
// 		return(

// 			<div className="weeklyReports">

// 				<div className="grid-container">

// 					<div className="sm-12-x-12 md-4-x-12">

// 						<figure className="tn-card">

// 							<figcaption className="tn-title txt-center">

// 								<p>{this.props.rouletteModel.get('FacilityName') }</p>

// 							</figcaption>

// 							<figcaption className="more-info">

// 								<h4>{this.props.rouletteModel.get('FacilityFullStreetAddress') }</h4>
// 								<h4>{this.props.rouletteModel.get('Zip') }</h4>
// 								<h4>Cuisine: {this.props.rouletteModel.get('Cuisine') }</h4>
// 								<h4>Inspection Status: {this.props.rouletteModel.get('InspectionStatus') }</h4>
// 								<h4>Facility Risk Score: {this.props.rouletteModel.get('FacilityRiskScore') }</h4>

// 							</figcaption>

// 						</figure>

// 					</div>

// 				</div>
				
// 			</div>
// 		)
// 	}
// })


const RouletteReports = React.createClass({

	render: function(){
		return(
			<div className="rouletteReports">

				<div className="grid-container">

					<div className="sm-12-x-12 md-4-x-12">

						<figure className="tn-card">

							<figcaption className="tn-title txt-center">
								
								<p>{this.props.rouletteModel.get('FacilityName') }</p>

							</figcaption>

							<figcaption className="more-info">
								
								<p>{this.props.rouletteModel.get('FacilityFullStreetAddress') }</p>
								<p>{this.props.rouletteModel.get('FacilityZip') }</p>
								<p>Cuisine: {this.props.rouletteModel.get('Cuisine') }</p>
	
								<p>Facility Risk Score: {this.props.rouletteModel.get('FacilityRiskScore') }</p>

							</figcaption>

						</figure>

					</div>
					
				</div>
				
			</div>
		)
	}
})



export default RoachRoulette

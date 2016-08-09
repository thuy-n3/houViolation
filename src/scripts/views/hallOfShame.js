import React from 'React'
import COH_Store from '../store'
import Actions from '../actions'
import {CohCollection, ReportModel} from '../models/models'
import $ from 'jquery'

const HallOfShame = React.createClass({

		getInitialState: function(){
		// console.log("collection from store", COH_Store.data.collection)
		return COH_Store._getData()
	},

	componentWillMount: function(){
			// console.log("collection from store", COH_Store.data.collection)

			Actions.fetchWorstReports({FacilityName: "DENNY'S"})
			
			// Actions.fetchWorstReports(FacilityName: "RACHEL'S SANDWICH SHOP","IBAR  & GRILL","DENNY'S")
			// Actions.fetchWorstReports(FacilityName: "IBAR  & GRILL")
			// Actions.fetchWorstReports(FacilityName: "DENNY'S")

			COH_Store.on('updateContent', ()=> { 
				this.setState(COH_Store._getData())
			})
	},

	componentWillUnMount: function(){
		COH_Store.off('updateContent')

	},

	render: function(){
		console.log("collection from store", COH_Store.data.collection)
		return(
			<div className="weeklyView">
				
				<ShameContainer collection={this.state.collection.url}/>

			</div>
		)
	}
})


//{this.props.collection.map( (model)=> <ShameReport shameModel={model} key={model.id} /> )}

// Actions.fetchReports({FacilityName: x? }) --> pass in the data attribute

//fetch from the apiRouter of best or worstRating 

const ShameContainer = React.createClass({


	render: function(){
		return(
			<div>
				
				<h1>Hall of Shame</h1>



			</div>
		)
	}
})

const ShameReport = React.createClass({

	render: function(){
		console.log("from ShameReport", this.props.shameModel)
		return(
			<div>
				<h3>{this.props.shameModel.get('_id')}</h3>
				<h5>{this.props.shameModel.get('inspectionFailed')}</h5>
			</div>
		)
	}
})

export default HallOfShame
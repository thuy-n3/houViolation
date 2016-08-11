import React from 'React'
import COH_Store from '../store'
import Actions from '../actions'
import {CohCollection, ReportModel} from '../models/models'
import $ from 'jquery'
import Header from './header'

const HallOfShame = React.createClass({

		getInitialState: function(){
		console.log("collection from store", COH_Store.data.collection)
		return COH_Store._getData()
	},

	componentWillMount: function(listOfFaileds){
			console.log("collection from store in componentWillMount", COH_Store.data.collection)

			// Actions.fetchWorstReports({FacilityName: "DENNY'S"})

			Actions.fetchWorstReports(listOfFaileds)
			
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
		console.log("from hallofshame - collection from store in render", COH_Store.data.collection)
		return(
			<div className="shameView">


				
				<ShameContainer collection={this.state.collection}/>


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
				<Header />

				<h3 className="shameIntro">Restaurants who are serial offenders of Health Inspections</h3>

				{this.props.collection.map( (model)=> <ShameReport shameModel={model} />

				)}

			</div>
		)
	}
})


// $.map(result.products, function (item, i) {
//     if(i>9){
//         return null
//     }
// }

const ShameReport = React.createClass({

	render: function(){
		console.log("from hallofshame - ShameReport from shameModel", this.props.shameModel)
		return(
			<div>
				<h3> {this.props.shameModel.get('FacilityName')}</h3>
				<h5> {this.props.shameModel.get('FacilityFullStreetAddress')}</h5>
				<h5> {this.props.shameModel.get('FacilityZip')}</h5>

			</div>
		)
	}
})

export default HallOfShame
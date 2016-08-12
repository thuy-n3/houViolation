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

	componentWillMount: function(){
			console.log("hallofShame - collection from store in componentWillMount", COH_Store.data.collection)

			// Actions.fetchWorstReports({FacilityName: "DENNY'S"})

			Actions.fetchWorstReports()

			
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
		console.log("from hallofshame - collection from store in render", COH_Store.data.worstList)
		return(
			<div className="shameView">


			
				<ShameContainer worstL={this.state.worstList}/>


			</div>
		)
	}
})


//{this.props.collection.map( (model)=> <ShameReport shameList={model} key={model.id} /> )}

// Actions.fetchReports({FacilityName: x? }) --> pass in the data attribute

//fetch from the apiRouter of best or worstRating 

const ShameContainer = React.createClass({


	render: function(){
		return(
			<div className="shameContainer">

				<header className="hero">



					<div className="container-narrow">

						<h1 className="title">Hall of Shame</h1>

						<h3 className="subtitle">Restaurants who are serial offenders of Health Inspections</h3>

						<Header />

					</div>

				</header>



						{this.props.worstL.map( (wList)=> <ShameReport shameList={wList} />

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
		console.log("from hallofshame - ShameReport from shameList", this.props.shameList)
		return(
			<div className="shameReport">

				<div className="grid-container">

					<div className="sm-12-x-12 md-4-x-12">

						<figure className ="tn-card">

							<figcaption className="tn-title txt-center">

								<p>{this.props.shameList.facilityName}</p>

							</figcaption>

							<figcaption className="more-info"/>

							<p>{this.props.shameList.facilityAddress}</p>
							<p>{this.props.shameList.facilityZip}</p>
							<p>Inspection Failed: {this.props.shameList.inspectionsFailed}</p>

							<figcaption />

						</figure>

					</div>
					
				</div>





			</div>
		)
	}
})

export default HallOfShame

	// <h3> {this.props.shameList.get('FacilityName')}</h3>
	// <h5> {this.props.shameList.get('FacilityFullStreetAddress')}</h5>
	// <h5> {this.props.shameList.get('FacilityZip')}</h5>


			//<img src="../images/beefdish.jpeg" width="1214.41" height="500"/>


				// <div className="shameTitle">Hall of Shame</div>

				// <Header />

				// <p className="shameIntro">Restaurants who are serial offenders of Health Inspections</p>

				// {this.props.worstL.map( (wList)=> <ShameReport shameList={wList} />

				// )}



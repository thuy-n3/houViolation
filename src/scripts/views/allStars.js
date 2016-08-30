import React from 'React'
import COH_Store from '../store'
import Actions from '../actions'
import {CohCollection, ReportModel} from '../models/models'
import $ from 'jquery'
import Header from './header'

const AllStars = React.createClass({

	getInitialState: function(){
		console.log("allStars - collection from store", COH_Store.data.collection)
		return COH_Store._getData()
	},

	componentWillMount: function(){
			console.log("allStars - collection from store in componentWillMount", COH_Store.data.collection)
			
			Actions.fetchBestReports()

			COH_Store.on('updateContent', ()=> { 
				this.setState(COH_Store._getData())
			})
	},

	componentWillUnMount: function(){
		COH_Store.off('updateContent')

	},

	render: function(){

		console.log("from allStars - collection from store in render", COH_Store.data.bestList)
		console.log("allStars - bestList", this.state.bestList)

		return(
			<div className="allStarView">


				<h1>Hall of AllStars</h1>

				<AllStarsContainer bestL={this.state.bestList} />


			</div>
		)
	}

})

const AllStarsContainer = React.createClass({

	render: function(){
		return(
			<div className="allStarsContainer">
				
				<header className="hero">
					
					<div className="container-narrow">
						
						<h1 className="title"> Hall of All Stars </h1>

						<h3 className="subtitle"> Restaurants repeatly pass their inspection report with flying colors </h3>

						<Header />

					</div>	

				</header>

						{this.props.bestL.map( (bList)=> <AllStarsReport bestList={bList} />

						)}

			</div>
		)
	}
})

const AllStarsReport = React.createClass({

	render: function(){
			console.log("from allstars - allstarreport from bestlist", this.props.bestList)
		return (
			<div className="allStarsReport">

				<div className="grid-container">

					<div className="sm-12-x-12 md-4-x-12">

						<figure className="tn-card">

							<figcaption className="tn-title txt-center">
								
								<p>{this.props.bestList.facilityName}</p>

							</figcaption>

							<p>{this.props.bestList.facilityAddress}</p>
							<p>{this.props.bestList.facilityZip}</p>
							<p>Inspection Passed: {this.props.bestList.inspectionsPassed}</p>

						</figure>

					</div>

				</div>				

			</div>
		)
	}

})




export default AllStars


//<Header />

//<h3 className="starIntro">All Stars are restaurants repeatly pass their inspection report with flying colors</h3>
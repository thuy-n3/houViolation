import React from 'React'
import COH_Store from '../store'
import Actions from '../actions'
import {CohCollection, ReportModel} from '../models/models'
import $ from 'jquery'
import Header from './header'

const AllStars = React.createClass({

	getInitialState: function(){
		console.log("collection from store", COH_Store.data.collection)
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

		return(
			<div className="allStarView">


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


						{this.props.bestL.map( (bList)=> <AllStarsReport starList={bList} />

						)}

			</div>
		)
	}
})


const AllStarsReport = React.createClass({

	render: function(){

		return(
			<div className="allStarsReport">

				<div className="grid-container">

					
					
				</div>
				
			</div>
		)
	}
})

export default AllStars


//<Header />

//<h3 className="starIntro">All Stars are restaurants repeatly pass their inspection report with flying colors</h3>
import React from 'React'
import COH_Store from '../store'
import Actions from '../actions'
import {CohCollection, ReportModel} from '../models/models'
import Header from './header'

const HomeView = React.createClass({

	//rendering the weekly view....need make fetch with weekly filter 

	getInitialState: function(){
		// console.log("collection from store", COH_Store.data.collection)
		return COH_Store._getData()
	},

	componentWillMount: function(){
			// console.log("collection from store", COH_Store.data.collection)

		
			
			Actions.fetchReports()

			COH_Store.on('updateContent', ()=> { 
				this.setState(COH_Store._getData())
			})
	},

	componentWillUnmount: function(){
		COH_Store.off('updateContent')

	},



	render: function(){
		console.log("the report collection",this.state.collection)
		return(
			<div className="homeView">

				<div className="container-narrow">

					<h1>The Roach Report</h1>

					<Header />

					<h2 className="intro">Do you want to know if your favorite restaurant failed their health inspection?</h2>
				
					<img className="roach" src="https://s-media-cache-ak0.pinimg.com/236x/0a/a7/81/0aa7815c194f8248b92135c17b9d6d12.jpg" />



				</div>


			</div>
		)
	}
})




	
export default HomeView 
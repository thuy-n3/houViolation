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

				<Header />
				
				

			</div>
		)
	}
})




	
export default HomeView 
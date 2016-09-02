import React from 'React'
import COH_Store from '../store'
import Actions from '../actions'
import {CohCollection, ReportModel} from '../models/models'
import $ from 'jquery'
import Header from './header'


const SearchView = React.createClass({

	// getInitialState: function(){
	// 	console.log("collection from store", COH_Store.data.collection)
	// 	return COH_Store._getData()
	// },

	// componentWillMount: function(){
	// 		console.log("collection from store", COH_Store.data.collection)

			
	// 		Actions.fetchSearch()

	// 		COH_Store.on('updateContent', ()=> { 
	// 			this.setState(COH_Store._getData())
	// 		})
	// },

	// componentWillUnMount: function(){
	// 	COH_Store.off('updateContent')

	// },

	getInitialState: function(){
			console.log("search - collection from store", COH_Store.data.collection)
		return COH_Store._getData()
	}, 


	componentWillMount: function(searchQuery){


		
		COH_Store.on('updateContent', ()=>{
			this.setState(COH_Store._getData())
		})

	},


	componentWillUnMount: function(){
		COH_Store.off('updateContent')
	},




	render: function(){
		return(
			<div className="viewAll">

				 <RestaurantsContainer restColl={this.state.collection}/>

			</div>
		)
	}
})


const RestaurantsContainer = React.createClass({

	getInitialState() {
		return {items:[]}
	},

	componentDidMount(){
		this._search()
	},

	// _handleSearch: function(evt){
	// 	if(evt.keyCode === 13){
	// 		console.log(evt.target.value)
	// 		Actions.fetchSearch(evt.target.value)
	// 		evt.target.value = ''
	// 	}
	// },

	_search: function(restaurantName){
		let searchQuery
		if(restaurantName){
			searchQuery = {restaurantName}
		}
		Actions.fetchSearch(searchQuery).then(data => {
			console.log(data, this)
			this.setState({items: data})
		})
	},

	_handleSearch: function(evt){
		if(evt.keyCode === 13){
			console.log(evt.target.value)
			this._search(evt.target.value)
			evt.target.value = ''
		}
	},


	render: function(){
		console.log("state in search", this.state)
		return(
			<div>
				
				<h1>Search For Roaches</h1>

				<Header />


				<input onKeyDown={this._handleSearch} className="searchBox" type="text" placeholder="Enter Restaurant Name" />

				{
					this.state.items.map(x => {
						return
							 <div>{x.FacilityName}</div>

					})
				}
			</div>
		)
	}
})




/*const ReportContainer = React.createClass({

	render: function(){
		
		return(
			<div className="reportContainer">

				<h1>Search The Roach Report</h1>



				{this.props.collection.map(	(model)=> <Reports reportsModel={model} key={model.id}/> 

				)}

			</div>
		)
	}
})

const Reports = React.createClass({

	render: function(){
		// console.log("from Report", this.props.reportsModel)
		return (
			<div className="reports">

				
				<h3>Name: {this.props.reportsModel.get('FacilityName')}</h3>


			</div>
		)
	}
})*/

export default SearchView 

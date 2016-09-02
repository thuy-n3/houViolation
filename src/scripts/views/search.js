import React from 'React'
import COH_Store from '../store'
import Actions from '../actions'
import {CohCollection, ReportModel} from '../models/models'
import $ from 'jquery'
import Header from './header'


const SearchView = React.createClass({


	getInitialState: function(){
			console.log("search - collection from store", COH_Store.data.collection)
		return COH_Store._getData()
	}, 


	componentWillMount: function(){

		COH_Store.on('updateContent', ()=>{
			this.setState(COH_Store._getData())
		})

	},


	componentWillUnMount: function(){
		COH_Store.off('updateContent')
	},


	_handleSearch: function(evt){

		if(evt.keyCode === 13){
			console.log(evt.target.value)
			var searchQuery = evt.target.value
			console.log(searchQuery)
			Actions.fetchSearch(searchQuery)
			evt.target.value = ''
			
		}
	}, 


	render: function(){
		return(
			<div className="searchView">

				<h1 className="searchTitle">Search Roaches</h1>

				<Header />

				<input onKeyDown={this._handleSearch} className="searchBox" type="text" placeholder="Search By Restaruant's Name" />

				<SearchContainer restColl={this.state.collection} />


			</div>
		)
	}
})

const SearchContainer= React.createClass({


	render: function(){
		return(
			<div>
				
				{this.props.restColl.map( (model)=> <SearchReport sModel={model} key={model.id} />

				)}

			</div>
		)

	}
})

const SearchReport = React.createClass({


	render: function(){
		//console.log("search report - sModel ", this.props.sModel)

		return(
			<div>

			<p>{this.props.sModel.get('FacilityName')}</p>

			</div>
		)
	}

})


export default SearchView 

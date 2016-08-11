import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'
import HomeView from   './views/homeView'
import RoachRoulette from './views/weeklyView.js'
import ViewAll from    './views/viewAll'
import HallOfShame from './views/hallOfShame'
import AllStars from './views/allStars'
import SearchView from './views/search'
import {CohCollection, ReportModel} from './models/models'

//remember to export and import all views to app.js

//4. Build client-side app routes 

const app = function() {

	const appRouter = Backbone.Router.extend({
		routes: {
			"home" 		 : "showHome",
			"roachroulette"	 : "showRoulette",
			"hallofshame": "showHallOfShame",
			"allstars"	 : "showAllStars",
			"search"	 : "showSearch",			
			"*catchAll"  : "redirect"
		},

		redirect: function(){
			location.hash = "home"
		}, 

		showHome: function(){
			ReactDOM.render(<HomeView />, document.querySelector('.container'))
		},

		showRoulette: function(){
			ReactDOM.render(<RoachRouletteView />, document.querySelector('.container'))
			// alert('test')
		},

		showHallOfShame: function(){
			ReactDOM.render(<HallOfShame />, document.querySelector('.container'))
		},

		showAllStars: function(){
			ReactDOM.render(<AllStars />, document.querySelector('.container'))
		},

		showSearch: function(){
			ReactDOM.render(<SearchView />, document.querySelector('.container'))
		},

		initialize: function(){
			Backbone.history.start()
		}

	})

 new appRouter()
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
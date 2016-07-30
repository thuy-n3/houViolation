import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'


const app = function() {

	const appRouter = Backbone.Router.extend({
		routes: {
			"home" : "showHome",
			"*catchAll" : "redirect"
		}

		redirect: function(){
			location.hash = "home"
		}, 

		showHome: function(){
			ReactDOM.render(<HomeView />, document.querySelector('.container'))
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
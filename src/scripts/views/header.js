import React from 'React'
import Actions from '../actions'

const Header = React.createClass({

	render: function(){
		return(
			<div id="headerContainer">

				<NavBar />

			</div>
		)
	}
})

const NavBar = React.createClass({

	render: function(){
		return(
			<div id="navBar">

				<button className="navButton"><a href="#home">Home</a></button>
				<button className="navButton"><a href="#roachroulette">Roach Roulette</a></button>
				<button className="navButton"><a href="#hallofshame">Hall of Shame</a></button>
				<button className="navButton"><a href="#allstars">All Stars</a></button>
				<button className="navButton"><a href="#search">Search</a></button>

			</div>
		)
	}
})

export default Header


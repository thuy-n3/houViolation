import React from 'React'
import Actions from '../actions'

const Header = React.createClass({

	render: function(){
		return(
			<div id="headerContainer">
				
				<h1>The Roach Report</h1>

				<NavBar />

			</div>
		)
	}
})

const NavBar = React.createClass({

	render: function(){
		return(
			<div id="NavBar">

				<button className="navButton" type="button" a herf="#home">HOME</button>

				<a className="navButton" href="#home">Home</a>
				<a className="navButton" href="#hallOfShame">Hall of Shame</a>
				<a className="navButton" href="#allStars">All Stars</a>
				<a className="navButton" href="#search">Search Reports</a>
				
			</div>
		)
	}
})

export default Header
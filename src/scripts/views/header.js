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
			<div id="navBar">

				<button className="navButton"><a href="#home">Home</a></button>
				<button className="navButton"><a href="#weekly">Weekly</a></button>
				<button className="navButton"><a href="#hallofshame">Hall of Shame</a></button>
				<button className="navButton"><a href="#allstars">All Stars</a></button>
				<button className="navButton"><a href="#search">Search</a></button>

			</div>
		)
	}
})

export default Header


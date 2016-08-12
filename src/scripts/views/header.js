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

			 {/*<button className="navB" class="btn"><a href="#home">Home</a></button>
			 <button class="btn"><a href="#roachroulette">Roach Roulette</a></button>
			 <button class="btn"><a href="#hallofshame">Hall Of Shame</a></button>
			 <button class="btn"><a href="#allstars">All Stars</a></button>
			 <button class="btn"><a href="#searcg">Roach Search</a></button>*/}

			 <button className="navButton" ><a href="#home">Home</a></button>


			</div>
		)
	}
})

export default Header

			
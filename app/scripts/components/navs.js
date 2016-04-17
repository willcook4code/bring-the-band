import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';

const Nav = React.createClass({
	render: function() {
		return (
			<div>
				<h2><img src="" />Bring the Band!</h2>
				<nav>
					<Link to="/">Home</Link>
					<Link to="/votes">See Who's Being Voted For</Link>
				</nav>
			</div>
		)
	}
});

export default Nav;

// src={logo}
import React from 'react';
import Navs from './navs.js';

const VotePage = React.createClass({
	render: function() {
		return (
			<section>
				<Navs />
				<h1> The Polls Are In! </h1>
			</section>
		)
	}
});

export default VotePage;
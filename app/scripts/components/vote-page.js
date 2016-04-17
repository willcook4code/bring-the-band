import React from 'react';
import Navs from './navs.js';
import Voted from './eachVote.js';
import vote from './../collections/voteCollection.js'

const VotePage = React.createClass({
	getInitialState: function() {
		return {vote: []}
	},
	componentDidMount: function() {
		vote.on('add', () => {
			this.setState({vote: vote})
		});
		vote.fetch();
	},
	render: function() {
		const Votes = vote.map((val, i, array) => {
			return (
				<Voted 
				key = {i}
				name = {val.get('name')}
				pic = {val.get('pic')}
				/>
			)
		});
		return (
			<section>
				<Navs />
				<h1> The Polls Are In! </h1>
				{Votes}
			</section>
		)
	}
});

export default VotePage;
import React from 'react';
import vote from './../collections/voteCollection.js'

const BandEntry = React.createClass({
	postVote: function() {
		// console.log(this.state.band[this.refs.key]);
		// console.log(e.target.refs);
		// console.log(this.refs.name.innerHTML);
		// console.log(this.refs.pic);
		let newVote = {
			pic: this.props.pic,
			name: this.props.name
		};
		vote.create(newVote);
	},
	render: function() {
		return (
			<div className='searchResults'>
					<img 
					src={this.props.pic}
					/>
					<h3> 
					{this.props.name} 
					</h3>
					<button onClick = {this.postVote}> Rock this Vote </button>
			</div>
		)
	}
});

export default BandEntry;
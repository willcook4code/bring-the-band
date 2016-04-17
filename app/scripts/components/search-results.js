import React from 'react';

const Results = React.createClass ({
	render: function() {
		
		return (
				<div className='searchResults'>
					<img src={this.state.pic}/>
					<h3> {this.props.name} </h3>
					<button> Rock this Vote </button>
				</div>
		)
	}
});

export default Results;
import React from 'react';
import $ from 'jquery';
import Navs from './navs.js'

const Voted = React.createClass ({
	render: function() {
		
		return (
			<div className='voted'>
				<img src= {this.props.pic}
				/>
				<h3> 
				{this.props.name} 
				</h3>
			</div>
		)
	}
});

export default Voted;
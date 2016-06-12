import React from 'react';
import States from './../stateList.js';
import Cities from './../cityList.js';
import $ from 'jquery';

export default React.createClass({
	cityPick: function() {
		var stateIndex = Math.ceil(Math.random()*States.models.length);
		var randomStateIndex = States.at(stateIndex).get('_id');
		var randomState = States.at(stateIndex).get('state');
		var cityCol = Cities.findWhere({stateId: randomStateIndex});
		var cityLength = cityCol.get('byState').length;
		var randomCity = cityCol.get('byState')[Math.ceil(Math.random()*cityLength)];
		console.log(randomCity + ', ' + randomState);

	},	
	render: function() {
		return (
			<div>
				<button onClick= {this.cityPick}>Pick that CITY!!</button>
			</div>
		)
	}
});
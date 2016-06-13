import React from 'react';
import States from './../stateList.js';
import Cities from './../cityList.js';
import $ from 'jquery';

export default React.createClass({
	getInitialState: function() {
		return {
			cityState: null
		}
	},
	cityPick: function() {
		const stateList = []
		for (let i = 0; i < 60; i++) {
			const stateIndex = Math.floor(Math.random()*States.models.length);
			const randomStateIndex = States.at(stateIndex).get('_id');
			const randomState = States.at(stateIndex).get('state');
			const cityCol = Cities.findWhere({stateId: randomStateIndex});
			const cityLength = cityCol.get('byState').length;
			const randomCity = cityCol.get('byState')[Math.ceil(Math.random()*cityLength)];
			stateList.push(randomCity + ', ' + randomState);
		}
		this.setState({
			cityState: stateList
		});
	},
	render: function() {
		
		if (!this.state.cityState) {
			return (
				<div className="pickerContainer">
					<button onClick= {this.cityPick} className="picker"><span>City Picker</span></button>
				</div>
			)
		} else {
			let cityStateList = this.state.cityState.map((listItem, i , array)=>{
				return (
					<h1 key={i} >{listItem}</h1>
				);
			});
			return (
				<div className="pickerContainer">
					<button onClick={this.cityPick} className="picker"><span>City Picker</span></button>
					<div className='scrollable'>
						<div className='items'>
							{cityStateList}
						</div>
					</div>
				</div>
			)
		}
	}
});
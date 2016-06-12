import React from 'react';
import States from './../stateList.js';
import $ from 'jquery';

export default React.createClass({
	runSearch: function() {
		// this.stateSearch = $.get('http://api.sba.gov/geodata/city_links_for_state_of/tx.json', function(locations) {
		// 	console.log(locations);
		// });
		this.spotifySearch = $.get('https://api.spotify.com/v1/search?q=%27song%27&type=track', function(songs) {
			console.log(songs);
		});
	},	
	render: function() {
		const eachState = States.models.map((val, i, array) => {
			return (
			<p key = {i}>{val.get('state')}</p>
			)
		});
		return (
			<div>
				<h1>Hi</h1>
				<button onClick= {this.runSearch}>Search</button>
				{eachState}
			</div>
		)
	}
});
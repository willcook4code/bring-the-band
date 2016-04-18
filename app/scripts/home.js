import React from 'react';
import Navs from './components/navs.js';
import $ from 'jquery';
import BandEntry from './components/band-entry.js'

const Home = React.createClass({
	getInitialState: function() {
		return {
			band: []
		}
	},
	runSearch: function() {
		// var allState = [];
		let bandSearch = this.refs.bandSearch.value;
		this.spotifyRequest = $.get('https://api.spotify.com/v1/search?q='+bandSearch+'&type=artist', function(bands) {
		// console.log(bands.artists.items);
		var band = bands.artists;
		// console.log(band);
		// band.map((val,i,array) => {
			this.setState({
				band: band.items
				// pic: band.items
			// })
			// allState.push(this.state.band)
			// return allState;
		});
		}.bind(this));
		//^^I don't quite understand what bind is doing here.  Found this solution on the React website.
	},
	render: function() {
		const bands = (this.state);
		const eachBand = bands.band.map((val,i,array) => {
			// console.log(val.name);
			// console.log(val.images[0]);
			if (!val.images[0]) {
				val.images.push({url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png'});
			} 
			return (
				<BandEntry 
                    name={val.name}
                    pic={val.images[0].url}
				/>
			)
		});
		return (
			<section className = 'homePage'>
				<Navs />
				<input 
					type='text'
					ref='bandSearch'
					/>
				<button onClick= {this.runSearch}>Search</button>
				{eachBand}
			</section>
		)
	}
});

export default Home;

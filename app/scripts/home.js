import React from 'react';
import Navs from './components/navs.js';
import Results from './components/search-results.js';
import $ from 'jquery';

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
		console.log(this);
		
	},
	render: function() {
		const bands = (this.state);
		const allBands = [];
		allBands.push(bands.band);
		console.log(allBands);
		console.log(bands.band);
		console.log(bands.pic);
		const eachBand = allBands[0].map((val,i,array) => {
			// console.log(val.name);
			// console.log(val.images[0]);
			if (val.images == false) {
				val.images.push({url: 'https://lh4.googleusercontent.com/-fj6pace2cv0/U9Jt75Kq8PI/AAAAAAAARtE/ttg-4YuCOfQ/s250/exe_empty_thumbnail.jpg'});
			} 
			return (
				<div className='searchResults'>
					<img src={val.images[0].url}/>
					<h3> {val.name} </h3>
					<button> Rock this Vote </button>
				</div>
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

	// getInitialState: function() {
	// 	return {Posting: []}
	// },
	// componentDidMount: function() {
	// 	Posting.on('add', () => {
	// 		this.setState({Posting: Posting})
	// 	});
	// 	Posting.fetch();
	// },
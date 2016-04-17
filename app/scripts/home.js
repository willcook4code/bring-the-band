import React from 'react';
import Navs from './components/navs.js';
import $ from 'jquery';
import vote from './collections/voteCollection.js'

const Home = React.createClass({
	getInitialState: function() {
		return {
			band: []
		}
	},
	postVote: function(e) {
		console.log(e.target.refs);
		console.log(this.refs.name.innerHTML);
		console.log(this.refs.pic);
		let newVote = {
			key: this.refs.key,
			pic: this.refs.pic.src,
			name: this.refs.name.innerHTML
		};
		vote.create(newVote);
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
				val.images.push({url: 'https://lh4.googleusercontent.com/-fj6pace2cv0/U9Jt75Kq8PI/AAAAAAAARtE/ttg-4YuCOfQ/s250/exe_empty_thumbnail.jpg'});
			} 
			return (
				<div className='searchResults' key = {i}>
					<img 
					src={val.images[0].url}
					ref= 'pic'/>
					<h3 ref = 'name'> 
					{val.name} 
					</h3>
					<button onClick = {this.postVote} ref = {this.i}> Rock this Vote </button>
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

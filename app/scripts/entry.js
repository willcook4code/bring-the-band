// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';
import React from 'react';
import { render } from 'react-dom';
import CityPicker from './components/cityPicker.js';
import $ from 'jquery';
import CityCollection from './collections/cityCollection.js';

// $.ajaxSetup({
	// headers: {
	// 	Accept: 'application/json',
	// },\
// 	xhrFields: {
// 		withCredentials: true
// 	},
// 	dataType: 'json'
// });

render(<CityPicker/>, document.getElementById('main'));
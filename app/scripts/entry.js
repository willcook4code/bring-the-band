// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';
import $ from 'jquery';
import Backbone from 'backbone';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import Home from './home.js'
import VotePage from './components/vote-page.js';

const router = (
	<Router history={hashHistory}>
		<Route path="/"  component={Home}/>
		<Route path="/votes" component={VotePage} />
	</Router>
)

ReactDOM.render(router, document.querySelector('main'));

import Backbone from 'backbone';
import allStatesModel from '../models/allStates.js';

const allStates = Backbone.Collection.extend({
	model: allStatesModel,
	url: '/states/'
});

export default new allStates();
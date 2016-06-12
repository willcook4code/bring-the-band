import Backbone from 'backbone';
import cityStatesModel from '../models/cityStates.js';

const cityStates =  Backbone.Collection.extend({
	model: cityStatesModel,
	url: '/cityStates/'
});

export default new cityStates();
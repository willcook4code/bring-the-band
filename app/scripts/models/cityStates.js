import Backbone from 'backbone';

export default Backbone.Model.extend({
	defaults: {
		cityName: ''
	},
	urlRoot: '/cityStates/',
	idAttribute: '_id'
});
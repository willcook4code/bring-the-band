import Backbone from 'backbone';

export default Backbone.Model.extend({
	defaults: {
		byState: []
	},
	urlRoot: '/cityStates/',
	idAttribute: '_id'
});
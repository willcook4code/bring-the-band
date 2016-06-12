import Backbone from 'backbone';

export default Backbone.Model.extend({
	defaults: {
		state: ''
	},
	urlRoot: '/states/',
	idAttribute: '_id'
});

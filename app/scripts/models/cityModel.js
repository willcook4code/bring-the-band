import Backbone from 'backbone';

export default Backbone.Model.extend({
	defaults: {
		usedCity: ''
	},
	urlRoot: 'http://small-tiyfe.herokuapp.com/collections/cities',
	idAttribute: '_id'
});

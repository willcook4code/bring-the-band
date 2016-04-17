import Backbone from 'backbone';

const voteModel = Backbone.Model.extend({
	defaults: {
		pic: '',
		name: ''
	},
	urlRoot: 'http://small-tiyfe.herokuapp.com/collections/willsvotes',
	idAttribute: '_id'
});

export default voteModel;
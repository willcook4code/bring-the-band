import Backbone from 'backbone';

const voteModel = Backbone.Model.extend({
	defaults: {
		key: '',
		pic: '',
		name: ''
	},
	urlRoot: 'http://small-tiyfe.herokuapp.com/collections/willsvotes',
	idAttribute: '_id'
});

export default voteModel;
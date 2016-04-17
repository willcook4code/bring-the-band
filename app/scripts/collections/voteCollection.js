import Backbone from 'backbone';
import VoteModel from '../models/voteModel.js';

const voteCollection = Backbone.Collection.extend({
	model: VoteModel,
	url: 'http://small-tiyfe.herokuapp.com/collections/willsvotes'
});

let vote = new voteCollection;

export default vote;
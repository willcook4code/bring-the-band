import Backbone from 'backbone';
import cityModel from '../models/cityModel';

const cityCollection = Backbone.Collection.extend({
	model: cityModel,
	url: 'http://small-tiyfe.herokuapp.com/collections/cities'
});

export default new cityCollection();
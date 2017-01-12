import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    Ember.$.extend(params, this.paramsFor('index.index'));

    var properties = {};
    if (params.search) {
      properties['search'] = params.search;
    }

    if (params.tags) {
      properties['tags'] = params.tags;
    }

    return this.get('store').query('content', properties);
  }
});

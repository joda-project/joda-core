import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: function(model) {
    return model.get('name');
  },

  model: function(params) {
    return this.store.findRecord('file', params.resource_id);
  },
});
